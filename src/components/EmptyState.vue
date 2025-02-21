<template>
  <div class="empty-state">
    <q-icon name="hotel" size="48px" color="grey-6" />
    <Typography :text="message" size="text-h6" weight="text-weight-bold" color="text-grey-7" />
  </div>
</template>

<script setup lang="ts">
import Typography from '@/components/UI/Typography.vue'

defineProps<{ message: string }>()
</script>

<style scoped>
.empty-state {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  color: #666;
}
</style>
