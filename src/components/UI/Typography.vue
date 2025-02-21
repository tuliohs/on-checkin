<template>
    <div :class="['q-mb-sm', size, weight, color]">
      {{ text }}
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    text: { type: String, required: true },
    size: { type: String, default: 'text-h6' },
    weight: { type: String, default: 'text-weight-regular' },
    color: { type: String, default: 'text-black' }
  });
  </script>
  