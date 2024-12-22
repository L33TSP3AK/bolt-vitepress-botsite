<!-- Feature.vue -->
<script setup lang="ts">
const props = defineProps<{
  title: string
  details: string
  icon: string
}>()
</script>

<template>
  <div class="feature-box">
    <div class="feature-icon" v-if="icon" v-html="icon"></div>
    <h2 class="feature-title">{{ title }}</h2>
    <p class="feature-details">{{ details }}</p>
  </div>
</template>

<style scoped>
.custom-emoji {
  width: 32px;
  height: 32px;
}

.explosion-container {
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto;
}

.explosion-1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.explosion-2 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0.8;
}

.feature-box {
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  transition: all 0.3s ease;
}
.feature-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px -10px rgba(0, 229, 255, 0.2);
  border-color: var(--vp-c-brand);
}
.feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
  min-height: 1rem;
}
.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(120deg, var(--vp-c-brand), var(--vp-c-brand-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.feature-details {
  margin: 0;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
</style>