import { Router } from 'vitepress'
import { initNeuralNetwork } from './neural'

export function enhanceAppWithClientScripts(router: Router) {
  // Setup route change handlers
  router.onAfterRouteChanged = () => {
    // Wait for DOM to be ready
    requestAnimationFrame(() => {
      const neuralCanvas = document.getElementById('neuralCanvas')
      if (neuralCanvas) {
        initNeuralNetwork()
      }
    })
  }

  // Initial setup for first page load
  if (document.readyState === 'complete') {
    router.onAfterRouteChanged()
  } else {
    window.addEventListener('load', router.onAfterRouteChanged)
  }
}