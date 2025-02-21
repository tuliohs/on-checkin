<template>
  <q-card class="hotel-card">
    <div class="hotel-card-content">
      <CarrousselImages :style="'width:33%'" :images="hotel.images" />

      <div class="hotel-info">
        <Typography :text="hotel.name" size="text-h6" />
        <Typography :text="hotel.description" size="text-caption" color="text-grey-7" />

        <div class="rating">
          <span class="rating-score">{{ hotel.stars }}/5 </span>
          <q-icon name="star" color="yellow-8" v-for="n in 5" :key="n" />
        </div>

        <q-chip v-if="hotel.hasRefundableRoom">{{ $t('home.hasRefundableRoom') }}</q-chip>
      </div>
      <div class="hotel-actions">
        <Typography :text="$t('home.fromPrice')" size="text-caption" color="text-grey-7" />
        <Typography :text="formattedPrice" size="text-h6" weight="text-weight-bold" />
        <Typography
          :text="`R$ ${pricePerNight}/${$t('home.night')}`"
          size="text-caption"
          color="text-grey-7"
        />
        <Typography :text="$t('home.taxesIncluded')" size="text-caption" color="text-grey-7" />

        <q-btn label="Selecionar" color="primary" class="select-button" @click="onSelect" />
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import Typography from '@/components/UI/Typography.vue'
import type { Hotel } from '@/models/Hotel'
import { formatMoney } from '@/utils/strings'
import { useHotelStore } from '@/stores/hotelStore'
import CarrousselImages from '@/components/CarouselImages.vue'

const { hotel } = defineProps<{
  hotel: Hotel
}>()

const formattedPrice = computed(() => formatMoney(hotel.price))
const pricePerNight = computed(() => formatMoney(hotel.price / hotel.roomsQuantity))

const hotelStore = useHotelStore()
const onSelect = () => {
  hotelStore.selectHotel(hotel)
}
</script>

<style scoped>
.hotel-card {
  display: flex;
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

.hotel-card-content {
  display: flex;
  align-items: center;
  width: 100%;
}


.hotel-info {
  flex-grow: 1;
  padding: 0 16px;
}

.rating {
  display: flex;
  align-items: center;
  margin-top: 4px;
}

.rating-score {
  margin-left: 8px;
  font-size: 14px;
  color: #777;
}

.hotel-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.select-button {
  margin-top: 8px;
  width: 120px;
}
</style>
