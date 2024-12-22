<!-- ConfigDialog.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import OnboardingGuide from './OnboardingGuide.vue'

const props = defineProps<{
  isOpen: boolean
  title: string
  icon: string
  description: string
  features: string[]
  downloadUrl: string,
  onboardingUrl: string
}>()

const showOnboarding = ref(false)
const currentSoftware = ref('')

const handleOnboarding = (software: string) => {
  currentSoftware.value = software.toLowerCase()
  showOnboarding.value = true
}

const emit = defineEmits(['close'])
</script>

<template>
  <div class="config-dialog" :class="{ active: isOpen }" @click.self="emit('close')">
    <div class="dialog-content">
      <button class="close-button" @click="emit('close')" type="button">×</button>
      
      <div class="dialog-header">
        <span class="tool-icon">{{ icon }}</span>
        <h3>{{ title }}</h3>
      </div>
      
      <div class="dialog-body">
        <p class="description">{{ description }}</p>
        
        <div class="features-section">
          <h4>Key Features</h4>
          <ul>
            <li v-for="feature in features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        
        <div class="download-section">
          <a 
            :href="downloadUrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="download-button"
          >
            Download Latest Version
          </a>
          <button 
            @click="handleOnboarding(title)" 
            class="onboarding-button"
          >
            Onboarding
          </button>
        </div>
      </div>
    </div>
    <OnboardingGuide
      :is-open="showOnboarding"
      :software="currentSoftware"
      @close="showOnboarding = false"
    />
  </div>
</template>

<style scoped>
.config-dialog {
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
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.config-dialog.active {
  opacity: 1;
  pointer-events: auto;
}

.dialog-content {
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

.dialog-header {
  text-align: center;
  margin-bottom: 2rem;
}

.tool-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.dialog-header h3 {
  margin: 0;
  color: var(--vp-c-brand);
  font-size: 1.75rem;
}

.description {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.features-section {
  margin-bottom: 2rem;
}

.features-section h4 {
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.features-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-section li {
  padding: 0.5rem 0;
  color: var(--vp-c-text-2);
  border-bottom: 1px solid var(--vp-c-border);
}

.features-section li:last-child {
  border-bottom: none;
}

.download-section {
  text-align: center;
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.download-button {
  display: inline-block;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.2s ease;
}

.download-button:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.onboarding-button {
  display: inline-block;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

.onboarding-button:hover {
  background: var(--vp-c-bg-soft);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 229, 255, 0.2);
}</style>