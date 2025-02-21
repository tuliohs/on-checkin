<template>
  <q-page class="flex items-center">
    <search-section :items="cities" @update:modelValue="onCitySelected" />
    <!--<div class="search-footer">
      <Breadcrumb :items="breadcrumbItems" />
      <SortDropdown :options="sortOptions" @update:modelValue="onSortChange" />
    </div>-->

    <HotelsList v-if="hotels && hotels.length > 0" :hotels="hotels" @selectHotel="onHotelSelect" />
  </q-page>
</template>

<script setup lang="ts">
import SearchSection from '@/components/SearchSection.vue'
import { onMounted, ref } from 'vue'
import { destinationsService } from '@/services'
import HotelsList from '@/components/HotelsList.vue'
import type { Place } from '@/models/Place'
import type { Hotel } from '@/models/Hotel'

const cities = ref()
const hotels = ref<Hotel[]>()

const onCitySelected = (cidade: { id: number | null; name: string }) => {
  console.log('Cidade selecionada:', cidade)
}

const onHotelSelect = (hotel: Hotel) => {
  console.log('Hotel selecionado:', hotel)
}

onMounted(async () => {
  const placesResponse = await destinationsService.getPlaces()
  cities.value = placesResponse.map((place: Place) => ({
    value: place.placeId,
    label: place.name,
    alternative: place.state.name,
  }))

  const hotelsResponse = await destinationsService.getHotels(1, 10)
  if (hotelsResponse.items && hotelsResponse.items.length > 0 && hotelsResponse.items[0]) {
    hotels.value = hotelsResponse.items[0].hotels
  } else {
    hotels.value = []
  }
})
</script>
