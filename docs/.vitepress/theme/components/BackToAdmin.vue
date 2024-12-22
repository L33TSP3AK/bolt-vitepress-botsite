<!-- BackToAdmin.vue -->
<script setup lang="ts">
import { useRouter } from 'vitepress'

const router = useRouter()

function goToAdmin() {
  router.go('/admin')
}
</script>

<template>
  <button class="back-button" @click="goToAdmin">
    <span class="icon">⬅️</span>
    Back to Admin
  </button>
</template>

<style scoped>
.back-button {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 229, 255, 0.2);
  transition: all 0.3s ease;
  z-index: 100;
}

.back-button:hover {
  transform: translate(-50%, -2px);
  box-shadow: 0 6px 16px rgba(0, 229, 255, 0.3);
  background: var(--vp-c-brand-dark);
}

.icon {
  font-size: 1.2rem;
}
</style>