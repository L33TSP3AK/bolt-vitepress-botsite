<!-- FeatureOverlay.vue -->
<script setup lang="ts">
import Comments from './Comments.vue'

const props = defineProps<{
  isOpen: boolean
  feature: any
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <div class="feature-overlay" :class="{ active: isOpen }" @click.self="emit('close')">
    <div class="overlay-content" v-if="feature">
      <button class="close-button" @click="emit('close')" type="button">×</button>
      
      <div class="feature-header">
        <span class="feature-icon">{{ feature.icon }}</span>
        <h3>{{ feature.title }}</h3>
      </div>
      
      <div class="feature-body">
        <p class="description">{{ feature.longDescription }}</p>
        
        <div class="action-buttons">
          <a 
            href="https://t.me/DoomsdayxProductions" 
            target="_blank" 
            rel="noopener noreferrer"
            class="action-button primary"
          >
            Request Service
          </a>
          <button class="action-button secondary" @click="emit('close')">
            Learn More
          </button>
        </div>
      </div>
      
      <Comments :serviceId="feature.title" />
    </div>
  </div>
</template>

<style scoped>
.feature-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.feature-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

.overlay-content {
  background: var(--vp-c-bg-soft);
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  position: relative;
  border: 1px solid var(--vp-c-brand);
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
}

.close-button:hover {
  color: var(--vp-c-text-1);
}

.feature-header {
  text-align: center;
  margin-bottom: 2rem;
}

.feature-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

h3 {
  margin: 0;
  background: linear-gradient(120deg, var(--vp-c-brand), var(--vp-c-brand-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.action-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  text-align: center;
}

.action-button.primary {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
}

.action-button.primary:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.action-button.secondary {
  background: none;
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.action-button.secondary:hover {
  background: var(--vp-c-bg-alt);
  transform: translateY(-2px);
}
</style>