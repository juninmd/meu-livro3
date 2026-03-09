import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/meu-livro3/',
  title: "Recomeço de Bahar",
  description: "Uma história sobre resiliência, relacionamentos e um novo começo na medicina.",
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Bíblia da História', link: '/biblia' },
      { text: 'Capítulos', link: '/capitulo-01' }
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
          { text: 'Capítulo 1', link: '/capitulo-01' },
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
