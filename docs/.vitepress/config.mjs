import { defineConfig } from 'vitepress'

const capitulosNavItems = [
  { text: 'Capítulo 1', link: '/capitulos/capitulo-01' },
  { text: 'Capítulo 2', link: '/capitulos/capitulo-02' },
  { text: 'Capítulo 3', link: '/capitulos/capitulo-03' },
  { text: 'Capítulo 4', link: '/capitulos/capitulo-04' },
  { text: 'Capítulo 5', link: '/capitulos/capitulo-05' },
  { text: 'Capítulo 6', link: '/capitulos/capitulo-06' },
  { text: 'Capítulo 7', link: '/capitulos/capitulo-07' },
  { text: 'Capítulo 8', link: '/capitulos/capitulo-08' },
  { text: 'Capítulo 9', link: '/capitulos/capitulo-09' },
  { text: 'Capítulo 10', link: '/capitulos/capitulo-10' },
  { text: 'Capítulo 11', link: '/capitulos/capitulo-11' },
  { text: 'Capítulo 12', link: '/capitulos/capitulo-12' },
  { text: 'Capítulo 13', link: '/capitulos/capitulo-13' },
  { text: 'Capítulo 14', link: '/capitulos/capitulo-14' },
  { text: 'Capítulo 15', link: '/capitulos/capitulo-15' },
  { text: 'Capítulo 16', link: '/capitulos/capitulo-16' },
  { text: 'Capítulo 17', link: '/capitulos/capitulo-17' },
  { text: 'Capítulo 18', link: '/capitulos/capitulo-18' },
  { text: 'Capítulo 19', link: '/capitulos/capitulo-19' },
  { text: 'Capítulo 20', link: '/capitulos/capitulo-20' },
]

const capitulosSidebarItems = [
  { text: 'Capítulo 1: O Peso da Própria Pele', link: '/capitulos/capitulo-01' },
  { text: 'Capítulo 2', link: '/capitulos/capitulo-02' },
  { text: 'Capítulo 3', link: '/capitulos/capitulo-03' },
  { text: 'Capítulo 4: O Peso do Pó e do Passado', link: '/capitulos/capitulo-04' },
  { text: 'Capítulo 5: A Sala de Espera', link: '/capitulos/capitulo-05' },
  { text: 'Capítulo 6: O Conselho Diretor', link: '/capitulos/capitulo-06' },
  { text: 'Capítulo 7: O Cheiro de Antisséptico e Café Frio', link: '/capitulos/capitulo-07' },
  { text: 'Capítulo 8: O Peso de um Segundo', link: '/capitulos/capitulo-08' },
  { text: 'Capítulo 9: O Peso do Bisturi', link: '/capitulos/capitulo-09' },
  { text: 'Capítulo 10: O Sangue Debaixo das Unhas', link: '/capitulos/capitulo-10' },
  { text: 'Capítulo 11: O Peso do Estetoscópio', link: '/capitulos/capitulo-11' },
  { text: 'Capítulo 12: Ecos de uma Rescisão', link: '/capitulos/capitulo-12' },
  { text: 'Capítulo 13: O Ritmo do Caos', link: '/capitulos/capitulo-13' },
  { text: 'Capítulo 14: O Som da Água Fria', link: '/capitulos/capitulo-14' },
  { text: 'Capítulo 15: O Peso de um Fio de Sutura', link: '/capitulos/capitulo-15' },
  { text: 'Capítulo 16: O Reflexo Fraturado', link: '/capitulos/capitulo-16' },
  { text: 'Capítulo 17: O Primeiro Plantão Noturno', link: '/capitulos/capitulo-17' },
  { text: 'Capítulo 18: O Gosto Amargo do Café Preto', link: '/capitulos/capitulo-18' },
  { text: 'Capítulo 19: O Silêncio da Clínica', link: '/capitulos/capitulo-19' },
  { text: 'Capítulo 20: O Peso da Própria Voz', link: '/capitulos/capitulo-20' },
]

const analisesItems = [
  { text: 'Análise Capítulo 1', link: '/analises/capitulo-01-analise' },
  { text: 'Análise Capítulo 2', link: '/analises/capitulo-02-analise' },
  { text: 'Análise Capítulo 3', link: '/analises/capitulo-03-analise' },
  { text: 'Análise Capítulo 4', link: '/analises/capitulo-04-analise' },
  { text: 'Análise Capítulo 5', link: '/analises/capitulo-05-analise' },
  { text: 'Análise Capítulo 6', link: '/analises/capitulo-06-analise' },
  { text: 'Análise Capítulo 7', link: '/analises/capitulo-07-analise' },
  { text: 'Análise Capítulo 8', link: '/analises/capitulo-08-analise' },
  { text: 'Análise Capítulo 9', link: '/analises/capitulo-09-analise' },
  { text: 'Análise Capítulo 10', link: '/analises/capitulo-10-analise' },
  { text: 'Análise Capítulo 11', link: '/analises/capitulo-11-analise' },
  { text: 'Análise Capítulo 12', link: '/analises/capitulo-12-analise' },
  { text: 'Análise Capítulo 13', link: '/analises/capitulo-13-analise' },
  { text: 'Análise Capítulo 14', link: '/analises/capitulo-14-analise' },
  { text: 'Análise Capítulo 15', link: '/analises/capitulo-15-analise' },
  { text: 'Análise Capítulo 16', link: '/analises/capitulo-16-analise' },
  { text: 'Análise Capítulo 17', link: '/analises/capitulo-17-analise' },
  { text: 'Análise Capítulo 18', link: '/analises/capitulo-18-analise' },
  { text: 'Análise Capítulo 19', link: '/analises/capitulo-19-analise' },
  { text: 'Análise Capítulo 20', link: '/analises/capitulo-20-analise' },
]

export default defineConfig({
  title: "Recomeço de Bahar",
  description: "Uma história sobre resiliência, relacionamentos complexos e recomeços.",
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Bíblia da História', link: '/biblia' },
      {
        text: 'Capítulos',
        items: capitulosNavItems
      },
      {
        text: 'Análises',
        items: analisesItems
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
        items: capitulosSidebarItems
      },
      {
        text: 'Análises',
        items: analisesItems
      }
    ]
  }
})
