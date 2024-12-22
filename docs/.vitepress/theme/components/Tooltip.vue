<!-- Tooltip.vue -->
<script setup lang="ts">
const props = defineProps<{
  text: string
  position?: 'top' | 'right' | 'bottom' | 'left'
  effect?: 'fade' | 'scale' | 'slide' | 'flip' | 'neon' | 'pulse' | 'bounce' | 'rotate'
}>()
</script>

<template>
  <span 
    class="tooltip" 
    :class="[
      position ? `tooltip-${position}` : 'tooltip-top',
      effect ? `tooltip-${effect}` : 'tooltip-fade'
    ]"
    :data-tooltip="text"
  >
    <slot></slot>
  </span>
</template>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  border: 1px solid var(--vp-c-brand);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

/* Positions */
.tooltip-top::after {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-0.5rem);
}

.tooltip-right::after {
  top: 50%;
  left: 100%;
  transform: translateY(-50%) translateX(0.5rem);
}

.tooltip-bottom::after {
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(0.5rem);
}

.tooltip-left::after {
  top: 50%;
  right: 100%;
  transform: translateY(-50%) translateX(-0.5rem);
}

/* Effects */
.tooltip-fade::after {
  transition: all 0.3s ease;
  visibility: hidden;
}

.tooltip-fade:hover::after {
  visibility: visible;
  opacity: 1;
}

.tooltip-scale::after {
  transform: scale(0.7);
  transition: all 0.3s ease;
}

.tooltip-scale:hover::after {
  transform: scale(1);
  opacity: 1;
}

.tooltip-slide::after {
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.tooltip-slide:hover::after {
  transform: translateY(0);
  opacity: 1;
}

.tooltip-flip::after {
  transform: perspective(400px) rotateX(-90deg);
  transform-origin: top;
  transition: all 0.3s ease;
}

.tooltip-flip:hover::after {
  transform: perspective(400px) rotateX(0);
  opacity: 1;
}

.tooltip-neon::after {
  box-shadow: 0 0 10px var(--vp-c-brand),
              0 0 20px var(--vp-c-brand),
              0 0 30px var(--vp-c-brand);
  transition: all 0.3s ease;
}

.tooltip-neon:hover::after {
  opacity: 1;
}

.tooltip-pulse:hover::after {
  animation: tooltipPulse 1s infinite;
  opacity: 1;
}

.tooltip-bounce:hover::after {
  animation: tooltipBounce 0.5s;
  opacity: 1;
}

.tooltip-rotate::after {
  transform: rotate(-10deg);
  transition: all 0.3s ease;
}

.tooltip-rotate:hover::after {
  transform: rotate(0);
  opacity: 1;
}

@keyframes tooltipPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes tooltipBounce {
  0% { transform: translateY(-10px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}
</style>