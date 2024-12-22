<!-- CyberList.vue -->
<script setup lang="ts">
defineProps<{
  items: { text: string; value?: string }[]
}>()
</script>

<template>
  <div class="cyber-list">
    <div v-for="(item, index) in items" :key="index" class="list-item">
      <span class="bullet">▶</span>
      <span class="text">{{ item.text }}</span>
      <span v-if="item.value" class="value">{{ item.value }}</span>
    </div>
  </div>
</template>

<style scoped>
.cyber-list {
  font-family: monospace;
  color: #00ff00;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 255, 0, 0.2);
}

.list-item:last-child {
  border-bottom: none;
}

.bullet {
  color: #00ff00;
  animation: blink 1s infinite;
}

.value {
  margin-left: auto;
  color: #00e5ff;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}
</style>