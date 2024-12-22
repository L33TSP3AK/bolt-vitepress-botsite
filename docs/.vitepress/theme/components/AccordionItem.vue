<!-- AccordionItem.vue -->
<script setup lang="ts">
const props = defineProps<{
  type?: 'cyber' | 'neon' | 'hologram'
  title: string
  icon?: string
  status?: string,
  isOpen?: boolean
}>()
const emit = defineEmits(['click'])

</script>

<template>
  <details 
    class="accordion-item" 
    :class="type"
    :open="isOpen"
    @click="emit('click')"
  >
    <summary>
      <div class="summary-content">
        <div class="icon" v-if="icon">{{ icon }}</div>
        <div class="title">{{ title }}</div>
        <div class="status" v-if="status">{{ status }}</div>
      </div>
    </summary>
    <div class="accordion-content">
      <slot></slot>
    </div>
  </details>
</template>

<style scoped>
.accordion-item {
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
}

.accordion-item summary {
  cursor: pointer;
  user-select: none;
  padding: 1rem;
}

.summary-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.accordion-content {
  padding: 1rem;
}

/* Cyber Style */
.accordion-item.cyber {
  background: #000;
  border: 1px solid #00ff00;
}

.accordion-item.cyber summary {
  background: linear-gradient(90deg, rgba(0, 255, 0, 0.1), transparent);
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
}

.accordion-item.cyber .accordion-content {
  color: #00ff00;
  font-family: monospace;
}

/* Neon Style */
.accordion-item.neon {
  background: rgba(255, 0, 255, 0.1);
  border: 1px solid #ff00ff;
  transition: all 0.3s ease;
}

.accordion-item.neon:hover {
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
}

.accordion-item.neon summary {
  background: rgba(255, 0, 255, 0.2);
  color: #ff00ff;
  text-shadow: 0 0 5px #ff00ff;
}

/* Hologram Style */
.accordion-item.hologram {
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid #00e5ff;
  position: relative;
}

.accordion-item.hologram summary {
  background: linear-gradient(90deg, rgba(0, 229, 255, 0.2), transparent);
  color: #00e5ff;
}

.accordion-item.hologram .accordion-content {
  position: relative;
  color: #00e5ff;
  background: rgba(0, 229, 255, 0.05);
  border-radius: 0.5rem;
  overflow: hidden;
}

.accordion-item.hologram .accordion-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: hologram-grid 20s linear infinite;
  pointer-events: none;
  opacity: 0.5;
}

.accordion-item.hologram:hover {
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.2);
}

.accordion-item.hologram summary:hover {
  background: linear-gradient(90deg, rgba(0, 229, 255, 0.3), transparent);
}

@keyframes hologram-grid {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>