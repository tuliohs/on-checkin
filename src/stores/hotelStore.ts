import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Hotel } from '@/models/Hotel';

export const useHotelStore = defineStore('hotelStore', () => {
  const selectedHotel = ref<Hotel | null>(null);
  const isDrawerOpen = ref(false);

  const selectHotel = (hotel: Hotel) => {
    selectedHotel.value = hotel;
    isDrawerOpen.value = true;
  };

  const closeDrawer = () => {
    isDrawerOpen.value = false;
    selectedHotel.value = null;
  };

  return { selectedHotel, isDrawerOpen, selectHotel, closeDrawer };
});
