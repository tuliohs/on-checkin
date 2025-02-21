<template>
    <q-breadcrumbs class="breadcrumb">
      <q-breadcrumbs-el
        v-for="(item, index) in items"
        :key="index"
        :label="item.label"
        :to="item.to"
        class="breadcrumb-item"
      />
    </q-breadcrumbs>
  </template>
  
  <script setup lang="ts">
  defineProps({
    items: {
      type: Array as () => { label: string; to?: string }[],
      required: true
    }
  });
  </script>
  
  <style scoped>
  .breadcrumb {
    padding: 10px 16px;
    font-size: 14px;
    background-color: white;
  }
  
  .breadcrumb-item {
    color: #007bff;
    cursor: pointer;
  }
  
  .breadcrumb-item:last-child {
    color: black;
    cursor: default;
  }
  </style>
  