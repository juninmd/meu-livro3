import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Recomeço de Bahar",
  description: "Uma história sobre resiliência, relacionamentos complexos e recomeços.",
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Bíblia da História', link: '/biblia' },
      {
        text: 'Capítulos',
        items: [
          { text: 'Capítulo 1', link: '/capitulos/capitulo-01' },
          { text: 'Capítulo 2', link: '/capitulo-02' }
        ]
      },
      {
        text: 'Análises',
        items: [
          { text: 'Análise Capítulo 1', link: '/analises/capitulo-01-analise' },
          { text: 'Análise Capítulo 2', link: '/analises/capitulo-02-analise' }
        ]
      }
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
          { text: 'Capítulo 1: O Peso da Própria Pele', link: '/capitulos/capitulo-01' },
          { text: 'Capítulo 2', link: '/capitulo-02' }
        ]
      },
      {
        text: 'Análises',
        items: [
          { text: 'Análise Capítulo 1', link: '/analises/capitulo-01-analise' },
          { text: 'Análise Capítulo 2', link: '/analises/capitulo-02-analise' }
        ]
      }
    ]
  }
})
