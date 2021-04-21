import fs, { promises as fsPromises } from 'fs'
import path from 'path'
import matter from 'gray-matter';

export const getPosts = async () => {
  const filepath = path.join(process.cwd(), 'markdown')
  const fileNames = await fsPromises.readdir(filepath)
  const postsList = fileNames.map(fileName => {
    const fullPath = path.join(filepath, fileName)
    const arttitle = fileName.replace(/\.md$/g, '')
    const text = fs.readFileSync(fullPath, 'utf-8')
    // console.log('txt', text)
    const { data: {title, date}, content } = matter(text)
    return {
      title, date, content, arttitle
    }
  })
  return postsList
}