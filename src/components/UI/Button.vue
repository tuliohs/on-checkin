<template>
    <q-btn :label="label" color="primary" class="rounded-button" @click="onClick" />
  </template>
  
  <script setup lang="ts">
  defineProps({
    label: { type: String, required: true }
  });
  
  const emit = defineEmits(['click']);
  
  const onClick = () => {
    emit('click');
  };
  </script>
  
  <style scoped>
  .rounded-button {
    border-radius: 24px;
    padding: 10px 26px;
    font-weight: bold;
    font-size: 0.75rem;
  }
  </style>
  