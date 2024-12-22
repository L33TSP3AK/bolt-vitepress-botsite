import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Doomsday Production',
  description: 'Advanced Black Hat Compilation & Automation Tools',
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/Getting_Started' },
      { text: 'Bootcamp', link: '/bootcamp/overview', collapsed: true },
      { text: 'Membership', link: '/content/Membership', collapsed: true }
    ],

    sidebar: [
      {
        text: '🎨 Bootcamp',
        collapsed: true, 
        items: [
          { text: 'Overview', link: '/bootcamp/overview' },
          { text: 'Tools Setup', link: '/bootcamp/tools' },
          { text: 'Carding', link: '/bootcamp/carding' },
          { text: 'Stealer Logs', link: '/bootcamp/stealer-logs' },
          { text: 'Config Collection', link: '/bootcamp/configs' },
          { text: 'Advanced', link: '/bootcamp/advanced' }
        ]
      },
      {
        text: '📝 Membership Info',
        collapsed: true,
        items: [
          { text: 'Membership', link: '/content/Membership' },
          { text: 'Membership Levels', link: '/content/Membership_Levels' },
          { text: 'Pricing', link: '/content/Pricing' },
          { text: 'Limitations', link: '/content/Limitations' }
        ]
      },
      {
        text: '🎯 Requests',
        collapsed: true,
        items: [
          { text: 'Toasts', link: '/interactive/toasts' },
          { text: 'URL Anatomy', link: '/interactive/url-anatomy' },
          { text: 'ULP Data', link: '/interactive/ulp-data' },
          { text: 'Accordions', link: '/interactive/accordions' }
        ]
      },
      {
        text: '🎭 Programs & Configs',
        collapsed: true,
        items: [
          { text: 'Bullet Softwares', link: '/programs/bullet-softwares' },
          { text: 'Browser Automation Studio', link: '/programs/browser-automation' },
          { text: 'BL Tools', link: '/programs/bl-tools' }
        ]
      },
      {
        text: '📚 Example Guides',
        collapsed: true,
        items: [
          {
            text: '🛒 Shopping',
            collapsed: true,
            items: [
              { text: 'Pop Market', link: '/guides/shopping/guide-1' },
              { text: 'Guide 2', link: '/guides/shopping/guide-2' },
              { text: 'Guide 3', link: '/guides/shopping/guide-3' }
            ]
          },
          {
            text: '💳 E Gift Cards',
            collapsed: true,
            items: [
              { text: 'HelloFresh', link: '/guides/gift-cards/guide-1' },
              { text: 'Fanatics', link: '/guides/gift-cards/guide-2' },
              { text: 'MegaBonanza', link: '/guides/gift-cards/guide-3' }
            ]
          }
        ]
      },
      {
        text: '🎭 Configs',
        collapsed: true,
        items: [
          { text: 'Grid System', link: '/layouts/grid' },
          { text: 'Flexbox', link: '/layouts/flexbox' },
          { text: 'Responsive Design', link: '/layouts/responsive' }
        ]
      }
    ],
  },
  footer: {
      message: 'Advanced Black Hat Compilation & Automation Tools',
      copyright: '© 2024 Doomsday Production. All rights reserved.'
  }
});