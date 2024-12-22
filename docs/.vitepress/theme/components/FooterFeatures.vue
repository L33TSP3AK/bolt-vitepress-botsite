<!-- FooterFeatures.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import FeatureOverlay from './FeatureOverlay.vue'

const showFeatures = ref(false)
const activeFeature = ref(null)

const features = [
  {
    icon: '🎓',
    title: 'Mentoring Services',
    details: 'One-on-one expert mentoring and guidance for advanced techniques',
    longDescription: 'Our elite mentoring program pairs you with experienced professionals in the field. Get personalized guidance on advanced techniques, tool development, and operational security. Includes private training sessions, custom learning paths, and hands-on project assistance.'
  },
  {
    icon: '⚙️',
    title: 'Configuration Development',
    details: 'Professional configuration development with advanced features',
    longDescription: 'Expert configuration development service specializing in high-performance automation tools. We create sophisticated configs with features like multi-threading, advanced parsing, proxy management, and custom protocols. Includes optimization, testing, and ongoing support.'
  },
  {
    icon: '🌐',
    title: 'Web Development',
    details: 'Custom web development focused on security and performance',
    longDescription: 'Specialized web development service focusing on secure, high-performance applications. We build custom solutions with advanced security features, robust architecture, and optimized performance. Expertise in secure authentication, data encryption, and protected APIs.'
  },
  {
    icon: '🤖',
    title: 'Custom Bot Development',
    details: 'Professional automation tools and custom bot development',
    longDescription: 'Expert bot development service for advanced automation needs. We create sophisticated bots with features like distributed processing, advanced pattern matching, custom protocols, and intelligent error handling. Includes monitoring tools and maintenance.'
  }
]

const openFeature = (feature) => {
  activeFeature.value = feature
  showFeatures.value = true
}
</script>

<template>
  <div class="footer-features">
    <div class="features-button" @click="showFeatures = true">
      <span class="button-icon">⚡</span>
      Services
    </div>
    
    <div v-if="showFeatures" class="features-menu" @click.self="showFeatures = false">
      <div class="menu-content">
        <button class="close-button" @click="showFeatures = false" type="button">×</button>
        <h3>Available Services We Offer</h3>
        <div class="features-grid">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            class="feature-item"
            @click="openFeature(feature)"
          >
            <span class="feature-icon">{{ feature.icon }}</span>
            <div class="feature-info">
              <h4>{{ feature.title }}</h4>
              <p>{{ feature.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <FeatureOverlay
      :is-open="!!activeFeature"
      :feature="activeFeature"
      @close="activeFeature = null"
    />
  </div>
</template>

<style scoped>
.footer-features {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 100;
}

.features-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 229, 255, 0.2);
  transition: all 0.3s ease;
}

.features-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 229, 255, 0.3);
}

.button-icon {
  font-size: 1.25rem;
}

.features-menu {
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

.menu-content {
  background: var(--vp-c-bg-soft);
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid var(--vp-c-brand);
  margin: auto;
  transform: translateY(-2rem);
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

h3 {
  text-align: center;
  margin: 0 0 2rem 0;
  background: linear-gradient(120deg, var(--vp-c-brand), var(--vp-c-brand-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.features-grid {
  display: grid;
  gap: 1rem;
  max-height: 60vh;
  overflow-y: auto;
  padding: 1rem;
  margin: -1rem;
  grid-template-columns: 1fr;
}

.feature-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--vp-c-bg-alt);
  border-radius: 0.75rem;
  min-height: 80px;
  cursor: pointer;
  transition: all 0.2s ease;
  align-items: center;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.feature-item:hover {
  transform: translateX(4px);
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand);
}

.feature-icon {
  font-size: 2rem;
}

.feature-info {
  flex: 1;
}

.feature-info h4 {
  margin: 0 0 0.25rem 0;
  color: var(--vp-c-brand);
}

.feature-info p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}
</style>