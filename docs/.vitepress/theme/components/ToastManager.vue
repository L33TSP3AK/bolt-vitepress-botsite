<!-- ToastManager.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import Toast from './Toast.vue'

interface ToastOptions {
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  id?: number
}

const toasts = ref<ToastOptions[]>([])

function showToast(options: ToastOptions) {
  const toast = {
    ...options,
    id: Date.now(),
    duration: options.duration || 3000
  }
  toasts.value.push(toast)
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== toast.id)
  }, toast.duration)
}

defineExpose({ showToast })
</script>

<template>
  <div class="toast-container">
    <Toast
      v-for="toast in toasts"
      :key="toast.id"
      v-bind="toast"
      :style="{ '--duration': `${toast.duration}ms` }"
    />
  </div>
</template>

<style scoped>
.toast-container {
  position: fixed;
  top: calc(var(--vp-nav-height) + 10px); /* 10px below menu bar */
  right: 2rem;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* Spacing between stacked toasts */
  z-index: 1000;
  pointer-events: none;
  max-height: calc(100vh - var(--vp-nav-height) - 20px);
  overflow-y: auto;
}
</style>