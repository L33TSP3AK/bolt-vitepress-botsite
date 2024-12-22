<!-- OnboardingGuide.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  isOpen: boolean
  software: string
}>()

const emit = defineEmits(['close'])
const currentSlide = ref(0)

const guides = {
  openbullet: {
    title: 'OpenBullet Setup Guide',
    steps: [
      { title: 'Installation', content: 'Download and extract OpenBullet to a secure location' },
      { title: 'Configuration', content: 'Set up your proxies and general settings in Settings > Proxies' },
      { title: 'Wordlist Setup', content: 'Import your wordlists via Runner > Wordlist Manager' },
      { title: 'Config Import', content: 'Import configs via Config Manager > Import > From Clipboard/File' },
      { title: 'Runner Setup', content: 'Configure your runner settings in Runner > Runner Settings' }
    ]
  },
  silverbullet: {
    title: 'SilverBullet Setup Guide',
    steps: [
      { title: 'Initial Setup', content: 'Install SilverBullet and required dependencies' },
      { title: 'License Activation', content: 'Enter your license key in Settings > License' },
      { title: 'Proxy Setup', content: 'Configure proxy settings in Settings > Proxy Manager' },
      { title: 'Config Management', content: 'Import and manage configs via Config Manager' },
      { title: 'Advanced Settings', content: 'Fine-tune performance settings in Settings > Advanced' }
    ]
  },
  openbullet2: {
    title: 'OpenBullet 2 Setup Guide',
    steps: [
      { title: 'Installation', content: 'Install .NET Runtime and OpenBullet 2' },
      { title: 'Database Setup', content: 'Configure your preferred database in Settings' },
      { title: 'Security Setup', content: 'Set up admin password and security settings' },
      { title: 'Proxy Setup', content: 'Configure proxies in Settings > Proxies' },
      { title: 'Remote Setup', content: 'Optional: Configure remote access settings' }
    ]
  },
  cyberbullet: {
    title: 'CyberBullet Setup Guide',
    steps: [
      { title: 'Installation', content: 'Download and install CyberBullet from official source' },
      { title: 'Authentication', content: 'Enter your license details in Settings > License' },
      { title: 'Proxy Configuration', content: 'Set up proxy settings in Settings > Proxy' },
      { title: 'Config Import', content: 'Import configs via Config Manager' },
      { title: 'Performance Tuning', content: 'Adjust performance settings in Settings > Performance' }
    ]
  },
  bas: {
    title: 'Browser Automation Studio Setup',
    slides: [
      {
        title: 'Main Interface',
        image: '🖥️',
        content: 'The main BAS interface consists of the Visual Builder (center), Function List (left), and Properties Panel (right). The Visual Builder is where you create your automation scripts by dragging and dropping actions.',
        tips: [
          'Use Ctrl+Space to quickly search for functions',
          'Right-click for contextual options',
          'Double-click functions to add them to the builder'
        ]
      },
      {
        title: 'Function Categories',
        image: '📋',
        content: 'Functions are organized into categories like Browser Actions, Data Processing, and Network Operations. Each category contains specialized tools for different automation tasks.',
        tips: [
          'Browser category handles web interactions',
          'Data category manages information processing',
          'Network category controls connections and proxies'
        ]
      },
      {
        title: 'Browser Profiles',
        image: '🌐',
        content: 'Browser profiles allow you to maintain separate browser environments with different cookies, cache, and settings. Essential for managing multiple accounts or sessions.',
        tips: [
          'Create profiles via Profile Manager',
          'Configure proxy settings per profile',
          'Set custom user agents and fingerprints'
        ]
      },
      {
        title: 'Script Development',
        image: '📝',
        content: 'Create scripts using the visual interface or code editor. The visual builder offers drag-and-drop functionality while maintaining full scripting capabilities.',
        tips: [
          'Use templates for common tasks',
          'Test functions individually',
          'Enable debug mode for testing'
        ]
      },
      {
        title: 'Resource Management',
        image: '⚙️',
        content: 'Monitor and control system resource usage, including memory allocation, thread management, and proxy rotation settings.',
        tips: [
          'Set thread limits appropriately',
          'Monitor memory usage',
          'Configure timeout settings'
        ]
      },
      {
        title: 'Advanced Features',
        image: '🚀',
        content: 'Access advanced features like custom JavaScript injection, browser fingerprinting, and anti-detection mechanisms.',
        tips: [
          'Use built-in encryption tools',
          'Implement custom JS solutions',
          'Utilize anti-detection features'
        ]
      }
    ]
  }
}

const totalSlides = computed(() => guides[props.software]?.slides?.length || 0)

const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const closeGuide = () => {
  currentSlide.value = 0
  emit('close')
}
</script>

<template>
  <div class="onboarding-guide" :class="{ active: isOpen }" @click.self="emit('close')">
    <div class="guide-content">
      <button 
        class="close-button" 
        @click="closeGuide" 
        type="button"
        aria-label="Close guide"
      >×</button>
      
      <div class="guide-header">
        <h3>{{ guides[software]?.title }}</h3>
      </div>
      
      <div v-if="software === 'bas'" class="slides-container">
        <div class="slide">
          <div class="slide-icon">
            {{ guides[software].slides[currentSlide].image }}
          </div>
          <h4 class="slide-title">
            {{ guides[software].slides[currentSlide].title }}
          </h4>
          <p class="slide-content">
            {{ guides[software].slides[currentSlide].content }}
          </p>
          <div class="tips-container">
            <h5>Pro Tips:</h5>
            <ul>
              <li v-for="(tip, index) in guides[software].slides[currentSlide].tips" 
                  :key="index">{{ tip }}</li>
            </ul>
          </div>
        </div>
        
        <div class="slide-navigation">
          <button 
            class="nav-button" 
            type="button"
            :disabled="currentSlide === 0"
            @click="prevSlide"
          >
            ← Previous
          </button>
          <div class="slide-indicators">
            <span 
              v-for="index in totalSlides" 
              :key="`indicator-${index}`"
              class="indicator"
              :class="{ active: currentSlide === index - 1 }"
              @click="currentSlide = index - 1"
            >
            </span>
          </div>
          <button 
            class="nav-button" 
            type="button"
            :disabled="currentSlide === totalSlides - 1"
            @click="nextSlide"
          >
            Next →
          </button>
        </div>
      </div>
      
      <div v-else class="steps-container">
        <div v-for="(step, index) in guides[software]?.steps" 
             :key="`step-${index}`"
             class="step">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h4>{{ step.title }}</h4>
            <p>{{ step.content }}</p>
          </div>
        </div>
      </div>
      
      <div class="guide-footer">
        <button 
          class="support-button" 
          type="button"
          @click="closeGuide"
        >
          Got It!
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.onboarding-guide {
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

.onboarding-guide.active {
  opacity: 1;
  pointer-events: auto;
}

.guide-content {
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

.guide-header {
  text-align: center;
  margin-bottom: 2rem;
}

.guide-header h3 {
  color: var(--vp-c-brand);
  margin: 0;
  font-size: 1.5rem;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--vp-c-bg-alt);
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-border);
  transition: transform 0.2s ease;
}

.step:hover {
  transform: translateX(4px);
  border-color: var(--vp-c-brand);
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border-radius: 50%;
  font-weight: bold;
}

.step-content {
  flex: 1;
}

.step-content h4 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
}

.step-content p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.slides-container {
  padding: 1rem;
}

.slide {
  text-align: center;
  animation: fadeIn 0.3s ease;
}

.slide-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.slide-title {
  color: var(--vp-c-brand);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.slide-content {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.tips-container {
  background: var(--vp-c-bg-alt);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  text-align: left;
}

.tips-container h5 {
  color: var(--vp-c-brand);
  margin: 0 0 0.5rem 0;
}

.tips-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-container li {
  padding: 0.5rem 0;
  color: var(--vp-c-text-2);
  border-bottom: 1px solid var(--vp-c-border);
}

.tips-container li:last-child {
  border-bottom: none;
}

.slide-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
}

.nav-button {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-button:not(:disabled):hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.slide-indicators {
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--vp-c-text-2);
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.2s ease;
}

.indicator.active {
  background: var(--vp-c-brand);
  opacity: 1;
}

.guide-footer {
  text-align: center;
  margin-top: 2rem;
}

.support-button {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

.support-button:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>