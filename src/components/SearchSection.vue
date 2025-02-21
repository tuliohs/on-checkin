<template>
  <div class="full-page">
    <q-card class="search-section">
      <q-card-section>
        <Typography :text="$t('home.reserve')" />
      </q-card-section>

      <q-separator />

      <InputSearch
        :items="items"
        :label="$t('search.destination')"
        @update:modelValue="onSelectionChange"
      />

      <q-card-actions align="right">
        <Button :label="$t('search.buttonChange')" @click="onSearch" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import Typography from './UI/Typography.vue'
import InputSearch from './UI/InputSearch.vue'
import Button from './UI/Button.vue'

defineProps({
  items: {
    type: Array as () => { value: number; label: string; alternative: string }[],
    required: true,
  },
})

const selectedItem = ref<{ value: number; label: string; alternative: string } | null>(null)

const onSelectionChange = (item: { value: number; label: string; alternative: string } | null) => {
  selectedItem.value = item
}

const onSearch = () => {
  if (!selectedItem.value) {
    return
  }
}
</script>

<style scoped>
.full-page {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
}

.search-section {
  width: 100%;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0;
}
</style>
