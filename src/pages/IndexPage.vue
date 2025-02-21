<template>
  <q-page class="flex items-center">
    <search-section :items="cities" @update:modelValue="onCitySelected" />
  </q-page>
</template>

<script setup lang="ts">
import SearchSection from '@/components/SearchSection.vue'
import { onMounted, ref } from 'vue'
import { destinationsService } from '@/services'
import type { Place } from '@/models/Place'

const cities = ref()

const onCitySelected = (cidade: { id: number | null; name: string }) => {
  console.log('Cidade selecionada:', cidade)
}

onMounted(async () => {
  const response = await destinationsService.getPlaces()
  cities.value = response.map((place: Place) => ({
    value: place.placeId,
    label: place.name,
    alternative: place.state.name,
  }))
  console.log( cities.value,' cities.value')
})
</script>
