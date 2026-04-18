import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

// Helper to get files and their parsed info
const getFilesInfo = (dir, pattern, type = 'chapter') => {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const match = file.match(pattern)
      if (!match) return null

      const numStr = match[1]
      const num = parseInt(numStr, 10)
      const link = `/${dir.replace(/^docs\//, '')}/${file.replace('.md', '')}`

      let text = type === 'chapter' ? `Capítulo ${num}` : `Análise Capítulo ${num}`

      if (type === 'chapter') {
        try {
          const filePath = path.join(dir, file)
          const content = fs.readFileSync(filePath, 'utf-8')
          const titleMatch = content.match(/["']?Título["']?:\s*(.+)/)
          if (titleMatch) {
            let title = titleMatch[1].trim().replace(/^["']|["']$/g, '')
            if (!title.startsWith(`Capítulo ${num}:`) && title !== `Capítulo ${num}`) {
              text = `Capítulo ${num}: ${title}`
            } else {
              text = title
            }
          }
        } catch (e) {
          // Fallback to default text if file reading fails
        }
      }

      return { num, text, link, navText: type === 'chapter' ? `Capítulo ${num}` : `Análise Capítulo ${num}` }
    })
    .filter(Boolean)
    .sort((a, b) => a.num - b.num)
}

const chapterFiles = getFilesInfo('docs/capitulos', /capitulo-(\d+)\.md/, 'chapter')
const analysisFiles = getFilesInfo('docs/analises', /capitulo-(\d+)-analise\.md/, 'analysis')

const capitulosNavItems = chapterFiles.map(f => ({ text: f.navText, link: f.link }))
const capitulosSidebarItems = chapterFiles.map(f => ({ text: f.text, link: f.link }))
const analisesItems = analysisFiles.map(f => ({ text: f.text, link: f.link }))

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
