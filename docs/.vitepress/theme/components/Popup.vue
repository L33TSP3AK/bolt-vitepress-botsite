<!-- Popup.vue -->
<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
  type?: 'cyber' | 'glitch' | 'hologram'
}>()

const emit = defineEmits(['close'])
</script>

<template>
  <div class="popup" :class="[{ active: isOpen }, type]" @click.self="emit('close')">
    <div class="popup-content">
      <button class="close-btn" @click="emit('close')" type="button">×</button>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.popup {
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
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1000;
}

.popup.active {
  opacity: 1;
  pointer-events: auto;
}

.popup-content {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
  width: 90%;
  max-width: 500px;
  border: 1px solid var(--vp-c-brand);
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
}

/* Cyber Style */
.popup.cyber .popup-content {
  background: #000;
  border: 1px solid #00ff00;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
}

.popup.cyber .popup-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: grid-scroll 20s linear infinite;
  pointer-events: none;
}

/* Glitch Style */
.popup.glitch .popup-content {
  background: #1a1a1a;
  border: 2px solid #ff00ff;
  animation: glitch 0.3s infinite;
}

/* Hologram Style */
.popup.hologram .popup-content {
  background: rgba(0, 10, 20, 0.9);
  border: 1px solid #00e5ff;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
}

.popup.hologram .popup-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: hologram-grid 10s linear infinite;
  pointer-events: none;
}

@keyframes grid-scroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@keyframes hologram-grid {
  0% { transform: perspective(1000px) rotateX(0deg); }
  100% { transform: perspective(1000px) rotateX(360deg); }
}
</style>