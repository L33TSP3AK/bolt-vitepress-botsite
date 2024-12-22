<!-- Badge.vue -->
<script setup lang="ts">
const props = defineProps<{
  type?: 'info' | 'tip' | 'warning' | 'danger'
  text: string
}>()
</script>

<template>
  <span class="custom-badge" :class="type || 'info'">
    {{ text }}
  </span>
</template>

<style scoped>
.custom-badge {
  display: inline-block;
  font-size: 0.875em;
  font-weight: 600;
  padding: 0.25em 0.75em;
  border-radius: 9999px;
  margin: 0 0.5em;
  line-height: 1.25;
}
.info {
  background: #003d4d;
  color: #00e5ff;
}
.tip {
  background: #004d40;
  color: #00e5e0;
}
.warning {
  background: #4d3500;
  color: #ffd000;
}
.danger {
  background: #4d0000;
  color: #ff0000;
}
</style>