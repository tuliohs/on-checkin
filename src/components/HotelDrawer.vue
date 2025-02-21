<template>
  <q-drawer
    v-model="hotelStore.isDrawerOpen"
    side="right"
    :overlay="true"
    :width="600"
    class="hotel-drawer"
    show-if-above
  >
    <q-card v-if="hotel">
      <q-card-section>
        <div class="rating">
          <span class="rating-score">{{ hotel.stars }}/5</span>
          <q-icon name="star" color="yellow-8" v-for="n in parseInt(hotel.stars)" :key="n" />
        </div>
        <div class="drawer-header">
          <Typography :text="hotel.name" size="text-h6" />

          <q-btn icon="close" flat round dense @click="hotelStore.closeDrawer" />
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section v-if="hotel">
        <CarrousselImages class="!w-full" :images="hotel.images" />

        <Typography :text="hotel.description" size="text-body1" color="text-grey-7" />

        <Typography text="Facilidades do hotel" size="text-h6" />

        <Typography text="Conheça um pouco mais" size="text-h6" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Fechar" color="grey" flat @click="hotelStore.closeDrawer" />
      </q-card-actions>
    </q-card>
  </q-drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHotelStore } from '@/stores/hotelStore'
import Typography from '@/components/UI/Typography.vue'
import CarrousselImages from '@/components/CarouselImages.vue'

const hotelStore = useHotelStore()
const { selectedHotel: hotel } = storeToRefs(hotelStore)
</script>

<style scoped>
.hotel-drawer {
  background: white;
  z-index: 1000; 
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drawer-image {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
}

.location {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  margin-top: 8px;
}

.rating {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.rating-score {
  margin-left: 8px;
  font-size: 14px;
  color: #777;
}

.amenities {
  margin-top: 12px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
</style>
