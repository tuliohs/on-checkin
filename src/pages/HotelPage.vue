<template>
  <q-page class="flex items-start">
    <search-section v-if="cities" :items="cities" @onSearch="onCitySelected" />
    <!--<div class="search-footer">
      <Breadcrumb :items="breadcrumbItems" />
      <SortDropdown :options="sortOptions" @update:modelValue="onSortChange" />
    </div>-->

    <hotels-list v-if="hotels && hotels.length > 0" :hotels="hotels"  />
    <empty-state v-else-if="selectedCity" message="Nenhum hotel encontrado" />
    <HotelDrawer />
  </q-page>
</template>

<script setup lang="ts">
import SearchSection from '@/components/SearchSection.vue'
import EmptyState from '@/components/EmptyState.vue'
import { onMounted, ref, watch } from 'vue'
import { destinationsService } from '@/services'
import HotelsList from '@/components/HotelsList.vue'
import HotelDrawer from '@/components/HotelDrawer.vue'
import type { Place } from '@/models/Place'
import type { Hotel } from '@/models/Hotel'

const cities = ref()
const hotels = ref<Hotel[]>()
const selectedCity = ref()

const onCitySelected = (city: { value: number | null; label: string }) => {
  selectedCity.value = city.value
}

onMounted(async () => {
  const placesResponse = await destinationsService.getPlaces()
  cities.value = placesResponse.map((place: Place) => ({
    value: place.placeId,
    label: `${place.name}, ${place.state.name}`,
    alternative: place.state.name,
  }))

  const hotelsResponse = await destinationsService.getHotels(1, 10)
  if (hotelsResponse.items && hotelsResponse.items.length > 0 && hotelsResponse.items[0]) {
    hotels.value = hotelsResponse.items[0].hotels
  } else {
    hotels.value = []
  }
})

watch(
  () => selectedCity.value,
  async () => {
    const hotelsResponse = await destinationsService.getHotels(1, 10, selectedCity.value)
    if (hotelsResponse.items && hotelsResponse.items.length > 0 && hotelsResponse.items[0]) {
      hotels.value = hotelsResponse.items[0].hotels
    } else {
      hotels.value = []
    }
  },
)
</script>
