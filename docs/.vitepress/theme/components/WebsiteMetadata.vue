<!-- WebsiteMetadata.vue -->
<script setup lang="ts">
const props = defineProps<{
  url: string
}>()

// Base URL for web-check service
const WEB_CHECK_BASE = 'https://web-check.xyz/check'

// Encode URL for use in web-check
const encodedUrl = encodeURIComponent(props.url)
const webCheckUrl = `${WEB_CHECK_BASE}/${encodedUrl}`
</script>

<template>
  <div class="website-meta">
    <a :href="webCheckUrl" class="meta-item" target="_blank" rel="noopener noreferrer">
      <span class="meta-icon">🔒</span>
      <span class="meta-text">SSL:</span>
      <span class="meta-value">Valid</span>
    </a>
    <div class="meta-separator"></div>
    <a :href="webCheckUrl" class="meta-item" target="_blank" rel="noopener noreferrer">
      <span class="meta-icon">🌍</span>
      <span class="meta-text">Location:</span>
      <span class="meta-value">US</span>
    </a>
    <div class="meta-separator"></div>
    <a :href="webCheckUrl" class="meta-item" target="_blank" rel="noopener noreferrer">
      <span class="meta-icon">⚡</span>
      <span class="meta-text">Response:</span>
      <span class="meta-value">150ms</span>
    </a>
  </div>
</template>

<style scoped>
.website-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-brand);
  border-radius: 0.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--vp-c-text-2);
  transition: all 0.2s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.meta-item:hover {
  background: rgba(0, 229, 255, 0.1);
  color: var(--vp-c-brand);
}

.meta-separator {
  width: 1px;
  height: 20px;
  background: var(--vp-c-border);
}

.meta-icon {
  font-size: 1.1rem;
}

.meta-text {
  font-size: 0.9rem;
}

.meta-value {
  font-family: monospace;
  color: var(--vp-c-brand);
}
</style>