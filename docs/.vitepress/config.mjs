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
          { text: 'Capítulo 2', link: '/capitulos/capitulo-02' },
          { text: 'Capítulo 3', link: '/capitulos/capitulo-03' },
          { text: 'Capítulo 4', link: '/capitulos/capitulo-04' },
          { text: 'Capítulo 5', link: '/capitulos/capitulo-05' },
          { text: 'Capítulo 6', link: '/capitulos/capitulo-06' },
          { text: 'Capítulo 7', link: '/capitulos/capitulo-07' }
        ]
      },
      {
        text: 'Análises',
        items: [
          { text: 'Análise Capítulo 1', link: '/analises/capitulo-01-analise' },
          { text: 'Análise Capítulo 2', link: '/analises/capitulo-02-analise' },
          { text: 'Análise Capítulo 3', link: '/analises/capitulo-03-analise' },
          { text: 'Análise Capítulo 4', link: '/analises/capitulo-04-analise' },
          { text: 'Análise Capítulo 5', link: '/analises/capitulo-05-analise' },
          { text: 'Análise Capítulo 6', link: '/analises/capitulo-06-analise' },
          { text: 'Análise Capítulo 7', link: '/analises/capitulo-07-analise' }
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
          { text: 'Capítulo 2', link: '/capitulos/capitulo-02' },
          { text: 'Capítulo 3', link: '/capitulos/capitulo-03' },
          { text: 'Capítulo 4: O Peso do Pó e do Passado', link: '/capitulos/capitulo-04' },
          { text: 'Capítulo 5: A Sala de Espera', link: '/capitulos/capitulo-05' },
          { text: 'Capítulo 6: O Conselho Diretor', link: '/capitulos/capitulo-06' },
          { text: 'Capítulo 7: O Cheiro de Antisséptico e Café Frio', link: '/capitulos/capitulo-07' }
        ]
      },
      {
        text: 'Análises',
        items: [
          { text: 'Análise Capítulo 1', link: '/analises/capitulo-01-analise' },
          { text: 'Análise Capítulo 2', link: '/analises/capitulo-02-analise' },
          { text: 'Análise Capítulo 3', link: '/analises/capitulo-03-analise' },
          { text: 'Análise Capítulo 4', link: '/analises/capitulo-04-analise' },
          { text: 'Análise Capítulo 5', link: '/analises/capitulo-05-analise' },
          { text: 'Análise Capítulo 6', link: '/analises/capitulo-06-analise' },
          { text: 'Análise Capítulo 7', link: '/analises/capitulo-07-analise' }
        ]
      }
    ]
  }
})
