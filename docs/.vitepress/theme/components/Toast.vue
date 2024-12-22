<!-- Toast.vue -->
<script setup lang="ts">
const props = defineProps<{
  message: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
  id?: number
}>()
</script>

<template>
  <div class="toast" :class="type">
    <div class="toast-content">
      <span class="toast-icon">
        {{ type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️' }}
      </span>
      <span class="toast-message">{{ message }}</span>
    </div>
    <div class="progress-bar"></div>
  </div>
</template>

<style scoped>
.toast {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  width: 100%;
  position: relative;
  overflow: hidden;
  animation: slideIn 0.3s ease forwards;
}

.toast.success {
  border-color: #22c55e;
}

.toast.error {
  border-color: #ef4444;
}

.toast.warning {
  border-color: #f59e0b;
}

.toast.info {
  border-color: #0ea5e9;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toast-icon {
  font-size: 1.25rem;
}

.toast-message {
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  line-height: 1.4;
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: var(--vp-c-brand);
  animation: progress linear forwards;
  animation-duration: inherit;
}

.success .progress-bar { background: #22c55e; }
.error .progress-bar { background: #ef4444; }
.warning .progress-bar { background: #f59e0b; }
.info .progress-bar { background: #0ea5e9; }

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes progress {
  from { width: 100%; }
  to { width: 0%; }
}
</style>