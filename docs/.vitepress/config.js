export default {
  title: 'Recomeço de Bahar (Helena)',
  description: 'Um drama contemporâneo sobre resiliência, família e a busca por um novo sentido.',
  base: '/meu-livro3/',
  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'A Bíblia', link: '/biblia' },
      { text: 'Capítulo 1', link: '/capitulo-01' }
    ],
    sidebar: [
      {
        text: 'Documentos',
        items: [
          { text: 'A Bíblia', link: '/biblia' }
        ]
      },
      {
        text: 'Capítulos',
        items: [
          { text: 'Capítulo 1', link: '/capitulo-01' }
        ]
      },
      {
        text: 'Análises',
        items: [
          { text: 'Análise Cap. 1', link: '/analises/capitulo-01-analise' }
        ]
      }
    ]
  }
}
