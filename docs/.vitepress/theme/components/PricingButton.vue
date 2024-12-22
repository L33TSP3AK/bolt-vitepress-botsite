<!-- PricingButton.vue -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  tier: string
  icon: string
}>()

const prices = {
  Basic: {
    monthly: 29.99,
    quarterly: 80.97,
    biannual: 143.95
  },
  Premium: {
    monthly: 49.99,
    quarterly: 134.97,
    biannual: 239.95
  },
  VIP: {
    monthly: 99.99,
    quarterly: 269.97,
    biannual: 479.95
  },
  Diamond: {
    monthly: 199.99,
    quarterly: 539.97,
    biannual: 959.95
  }
}

const isOpen = ref(false)
const currentPrices = computed(() => prices[props.tier] || {})
</script>

<template>
  <div class="pricing-button-container">
    <button class="pricing-button" @click="isOpen = true">
      <span class="button-icon">💰</span>
      View Pricing
    </button>
    
    <div class="pricing-popup" :class="{ active: isOpen }" @click.self="isOpen = false">
      <div class="popup-content">
        <button class="close-button" @click="isOpen = false">×</button>
        
        <div class="popup-header">
          <span class="tier-icon">{{ icon }}</span>
          <h3>{{ tier }} Membership</h3>
        </div>
        
        <div class="price-options">
          <div class="price-option">
            <span class="duration">1 Month</span>
            <span class="price">${{ currentPrices.monthly }}</span>
            <button class="buy-option">Select</button>
          </div>
          
          <div class="price-option popular">
            <div class="popular-badge">Best Value</div>
            <span class="duration">3 Months</span>
            <span class="price">${{ currentPrices.quarterly }}</span>
            <span class="savings">Save 10%</span>
            <button class="buy-option">Select</button>
          </div>
          
          <div class="price-option">
            <span class="duration">6 Months</span>
            <span class="price">${{ currentPrices.biannual }}</span>
            <span class="savings">Save 20%</span>
            <button class="buy-option">Select</button>
          </div>
        </div>
        
        <div class="payment-methods">
          <h4>Accepted Payment Methods</h4>
          <div class="crypto-icons">
            <span title="Bitcoin">₿</span>
            <span title="Litecoin">Ł</span>
            <span title="Ethereum">Ξ</span>
            <span title="USDT">₮</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing-button-container {
  margin-top: 1rem;
}

.pricing-button {
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
  width: 100%;
  justify-content: center;
  transition: all 0.3s ease;
}

.pricing-button:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 229, 255, 0.2);
}

.button-icon {
  font-size: 1.25rem;
}

.pricing-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 180%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.pricing-popup.active {
  opacity: 50;
  pointer-events: auto;
}

.popup-content {
  background: var(--vp-c-bg-soft);
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  position: relative;
  z-index: 10000;
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

.popup-header {
  text-align: center;
  margin-bottom: 2rem;
}

.tier-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

h3 {
  margin: 0;
  color: var(--vp-c-brand);
}

.price-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.price-option {
  background: var(--vp-c-bg-alt);
  padding: 1.5rem;
  border-radius: 0.75rem;
  text-align: center;
  position: relative;
  border: 1px solid var(--vp-c-border);
}

.price-option.popular {
  border-color: var(--vp-c-brand);
  transform: translateY(-0.5rem);
}

.popular-badge {
  position: absolute;
  top: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
}

.duration {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.price {
  display: block;
  font-size: 1.75rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.savings {
  display: block;
  color: var(--vp-c-brand);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.buy-option {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
  width: 100%;
}

.buy-option:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.payment-methods {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-border);
}

.payment-methods h4 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
}

.crypto-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.5rem;
}

.crypto-icons span {
  color: var(--vp-c-brand);
  cursor: help;
}

@media (max-width: 768px) {
  .price-options {
    grid-template-columns: 1fr;
  }
  
  .price-option.popular {
    transform: none;
  }
}
</style>