import fs, { promises as fsPromises } from 'fs'
import path from 'path'
import matter from 'gray-matter';
const filepath = path.join(process.cwd(), 'markdown')

export const getPosts = async () => {
  const fileNames = await fsPromises.readdir(filepath)
  const postsList = fileNames.map(fileName => {
    const fullPath = path.join(filepath, fileName)
    const arttitle = fileName.replace(/\.md$/g, '')
    const text = fs.readFileSync(fullPath, 'utf-8')
    const { data: {title, date}, content } = matter(text)
    return {
      title, date, content, arttitle
    }
  })
  return postsList
}

export const getPost = async (titleName: String) => {
  const fullPath = path.join(filepath, `${titleName}.md`)
  const text = fs.readFileSync(fullPath, 'utf-8')

  const { data: {title, date}, content } = matter(text)
  return {
    title, date, content
  }
}