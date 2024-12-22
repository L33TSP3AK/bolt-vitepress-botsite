<!-- PriceCard.vue -->
<script setup lang="ts">
const props = defineProps<{
  tier: string
  icon: string
  prices: {
    monthly: number
    quarterly: number
    biannual: number
  }
}>()

const formatPrice = (price: number) => `$${price.toFixed(2)}`
</script>

<template>
  <div class="price-card">
    <div class="price-header">
      <span class="tier-icon">{{ icon }}</span>
      <h3>{{ tier }}</h3>
    </div>
    
    <div class="price-options">
      <div class="price-option">
        <span class="duration">1 Month</span>
        <span class="price">{{ formatPrice(prices.monthly) }}</span>
        <button class="buy-button">Buy Now</button>
      </div>
      
      <div class="price-option popular">
        <span class="duration">3 Months</span>
        <span class="price">{{ formatPrice(prices.quarterly) }}</span>
        <span class="savings">Save 10%</span>
        <button class="buy-button">Buy Now</button>
      </div>
      
      <div class="price-option">
        <span class="duration">6 Months</span>
        <span class="price">{{ formatPrice(prices.biannual) }}</span>
        <span class="savings">Save 20%</span>
        <button class="buy-button">Buy Now</button>
      </div>
    </div>
    
    <div class="payment-methods">
      <h4>We Accept</h4>
      <div class="crypto-icons">
        <span title="Bitcoin">₿</span>
        <span title="Litecoin">Ł</span>
        <span title="Ethereum">Ξ</span>
        <span title="USDT">₮</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.price-card {
  background: var(--vp-c-bg-soft);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-border);
  transition: all 0.3s ease;
}

.price-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 8px 16px rgba(0, 229, 255, 0.1);
}

.price-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.tier-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.price-header h3 {
  margin: 0;
  color: var(--vp-c-brand);
  font-size: 1.5rem;
}

.price-options {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.price-option {
  background: var(--vp-c-bg-alt);
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;
  position: relative;
  border: 1px solid var(--vp-c-border);
}

.price-option.popular {
  border-color: var(--vp-c-brand);
  background: linear-gradient(45deg, var(--vp-c-bg-alt), var(--vp-c-bg-soft));
}

.duration {
  display: block;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.price {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.savings {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
}

.buy-button {
  background: var(--vp-c-brand);
  color: var(--vp-c-bg);
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s ease;
}

.buy-button:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.payment-methods {
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-border);
}

.payment-methods h4 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.crypto-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.25rem;
}

.crypto-icons span {
  color: var(--vp-c-brand);
  cursor: help;
}
</style>