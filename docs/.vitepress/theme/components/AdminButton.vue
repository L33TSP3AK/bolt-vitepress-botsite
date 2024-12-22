<!-- AdminButton.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()
const showPinDialog = ref(false)
const pin = ref('')
const error = ref('')
const CORRECT_PIN = '1337' // In production this should be properly secured

function togglePinDialog() {
  showPinDialog.value = !showPinDialog.value
  pin.value = ''
  error.value = ''
}

function verifyPin() {
  if (pin.value === CORRECT_PIN) {
    router.go('/admin')
    showPinDialog.value = false
    pin.value = ''
    error.value = ''
  } else {
    error.value = 'Invalid PIN'
    pin.value = ''
  }
}
</script>

<template>
  <div class="admin-section">
    <button class="admin-button" @click="togglePinDialog">
      <span class="icon">🔐</span>
      Admin
    </button>

    <div v-if="showPinDialog" class="pin-dialog">
      <div class="dialog-content" @click.stop>
        <button class="close-button" @click="togglePinDialog">×</button>
        <h3>Enter Admin PIN</h3>
        <input
          v-model="pin"
          type="password"
          placeholder="Enter PIN"
          @keyup.enter="verifyPin"
        />
        <div v-if="error" class="error">{{ error }}</div>
        <button class="submit-button" @click="verifyPin">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.admin-section {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-border);
}

.admin-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.admin-button:hover {
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-brand);
}

.icon {
  font-size: 1.2rem;
}

.pin-dialog {
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
  z-index: 1000;
}

.dialog-content {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--vp-c-brand);
  width: 90%;
  max-width: 400px;
  position: relative;
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
  padding: 0;
  line-height: 1;
}

h3 {
  margin: 0 0 1.5rem 0;
  color: var(--vp-c-brand);
  text-align: center;
}

input {
  width: 100%;
  padding: 0.75rem;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.error {
  color: #ff0000;
  margin-bottom: 1rem;
  text-align: center;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background: var(--vp-c-brand-dark);
}
</style>