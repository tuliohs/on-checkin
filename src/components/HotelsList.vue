<template>
  <div class="hotels-list">
    <HotelCard v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" @select="onSelectHotel" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import HotelCard from './HotelCard.vue'
import type { Hotel } from '@/models/Hotel'

defineProps({
  hotels: {
    type: Array as () => Hotel[],
    required: true,
  },
})

const emit = defineEmits(['selectHotel'])

const onSelectHotel = (hotel: Hotel) => {
  emit('selectHotel', hotel)
}
</script>

<style scoped>
.hotels-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
