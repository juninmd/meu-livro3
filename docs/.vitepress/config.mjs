import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Recomeço de Bahar",
  description: "Uma história sobre resiliência, relacionamentos complexos e recomeços.",
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Bíblia da História', link: '/biblia' },
      { text: 'Capítulos', link: '/capitulos/capitulo-01' },
      { text: 'Análises', link: '/analises/analise-01' }
    ],
    sidebar: [
      {
        text: 'Lore',
        items: [
          { text: 'Bíblia da História', link: '/biblia' }
        ]
      },
      {
        text: 'Capítulos',
        items: [
          { text: 'Capítulo 1: O Peso da Própria Pele', link: '/capitulos/capitulo-01' }
        ]
      },
      {
        text: 'Análises',
        items: [
          { text: 'Análise 01', link: '/analises/analise-01' }
        ]
      }
    ]
  }
})
