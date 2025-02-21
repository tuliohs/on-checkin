<template>
  <q-card-section>
    <Typography :text="label" size="text-caption" weight="text-weight-medium" />
    <q-select
      v-model="selectedItem"
      dense
      outlined
      use-input
      hide-selected
      fill-input
      input-debounce="300"
      :options="filteredItems"
      @filter="filterItems"
      @update:model-value="onSelectionChange"
      option-value="value"
      option-label="label"
      emit-value
      map-options
      class="full-width"
    />
  </q-card-section>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import Typography from './Typography.vue'

const props = defineProps({
  items: {
    type: Array as () => { value: number; label: string; alternative: string }[],
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const selectedItem = ref<{ value: number; label: string; alternative: string } | null>(null)
const searchText = ref('')
const filteredItems = ref(props.items)

const filterItems = (val: string, update: (callback: () => void) => void) => {
  update(() => {
    searchText.value = val
    filteredItems.value = val
      ? props.items.filter(
          (item) =>
            item.label.toLowerCase().includes(val.toLowerCase()) ||
            item.alternative.toLowerCase().includes(val.toLowerCase()),
        )
      : props.items
  })
}

const onSelectionChange = (value: number | null) => {
  selectedItem.value = props.items.find((item) => item.value === value) || null
  emit('update:modelValue', selectedItem.value)
}
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
