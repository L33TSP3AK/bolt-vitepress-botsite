<!-- Card.vue -->
<script setup lang="ts">
const props = defineProps<{
  title: string
  icon?: string
}>()
</script>

<template>
  <div class="custom-card">
    <div class="card-header">
      <span v-if="icon" class="icon">{{ icon }}</span>
      <h3>{{ title }}</h3>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  background: var(--vp-c-bg-soft);
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  margin: 1rem 0;
  transition: transform 0.2s, box-shadow 0.2s;
}
.custom-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.icon {
  font-size: 1.5rem;
}

h3 {
  margin: 0;
  color: var(--vp-c-text-1);
}

.card-content {
  color: var(--vp-c-text-2);
}
</style>