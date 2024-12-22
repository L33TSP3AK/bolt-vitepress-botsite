<!-- Layout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import FooterFeatures from './components/FooterFeatures.vue'
import AdminButton from './components/AdminButton.vue'
import { ref, onMounted } from 'vue'
import ToastManager from './components/ToastManager.vue'

const { Layout } = DefaultTheme
const toastManager = ref()

onMounted(() => {
  // Expose toast function globally for demo
  window.$vueApp = {
    showToast: (options) => {
      if (toastManager.value) {
        toastManager.value.showToast(options)
      }
    }
  }
})

function showToast(message: string, type: 'success' | 'error' | 'warning' | 'info') {
  if (toastManager.value) {
    toastManager.value.showToast({ message, type, duration: 3000 })
  }
}

defineExpose({ showToast })
</script>

<template>
  <Layout>
    <template #sidebar-nav-after>
      <AdminButton />
    </template>
    <template #layout-bottom>
      <FooterFeatures />
      <ToastManager ref="toastManager" />
    </template>
  </Layout>
</template>