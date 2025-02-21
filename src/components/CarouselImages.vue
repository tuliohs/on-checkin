<template>
  <q-carousel
    v-model="currentSlide"
    animated
    infinite
    swipeable
    autoplay
    class="carousel"
    arrows
  >
    <q-carousel-slide
      v-for="(image, index) in images"
      :key="index"
      :name="index"
      :img-src="image"
      class="carousel-slide"
    />
  </q-carousel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const currentSlide = ref(0)
defineProps<{
  images: string[]
}>()
</script>

<style scoped>

.carousel {
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.carousel-slide {
  background-size: cover;
  background-position: center;
}
</style>

