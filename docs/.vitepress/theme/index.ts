import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { enhanceAppWithClientScripts } from './clientScripts'
import Layout from './Layout.vue'
import Badge from './components/Badge.vue'
import Card from './components/Card.vue'
import Toast from './components/Toast.vue'
import ToastManager from './components/ToastManager.vue'
import Feature from './components/Feature.vue'
import WebsiteMetadata from './components/WebsiteMetadata.vue'
import ConfigDialog from './components/ConfigDialog.vue'
import FooterFeatures from './components/FooterFeatures.vue'
import OnboardingGuide from './components/OnboardingGuide.vue'
import Tooltip from './components/Tooltip.vue'
import Popup from './components/Popup.vue'
import AccordionItem from './components/AccordionItem.vue'
import CyberList from './components/CyberList.vue'
import PricingPopup from './components/PricingPopup.vue'
import PricingButton from './components/PricingButton.vue'
import BackToAdmin from './components/BackToAdmin.vue'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router }) {
    app.component('Badge', Badge)
    app.component('Card', Card)
    app.component('Toast', Toast)
    app.component('ToastManager', ToastManager)
    app.component('Feature', Feature)
    app.component('WebsiteMetadata', WebsiteMetadata)
    app.component('WebsiteMetadata', WebsiteMetadata)
    app.component('ConfigDialog', ConfigDialog)
    app.component('FooterFeatures', FooterFeatures)
    app.component('OnboardingGuide', OnboardingGuide)
    app.component('Tooltip', Tooltip)
    app.component('Popup', Popup)
    app.component('AccordionItem', AccordionItem)
    app.component('CyberList', CyberList)
    app.component('PricingPopup', PricingPopup)
    app.component('PricingButton', PricingButton)
    app.component('BackToAdmin', BackToAdmin)
    
    // Setup client-side scripts
    if (typeof window !== 'undefined') {
      enhanceAppWithClientScripts(router)
    }
  }
}