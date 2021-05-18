import { mkdir } from 'fs'
import marked from 'marked'


const Resume = () => {
  const resumemd = `
# 我的经历
> [方阳阳](/) 写于2021/03/06

2017年毕业于滁州学院, 先后在上海证卷交易所、东方头条担任前端工程师。 现在在南京旻投电力科学院担任高级前端。
---      
# 技术栈
* Web 前端开发技术（CSS、JavaScript、TypeScript、Vue、React 等）
* Web 后端开发技术（Node.js 等）
* 正在学习 Ruby on Rails
      
# 工具箱
* 编辑器喜欢用 vim、WebStorm、Vscode , Vscode插件生态很活跃。
* 在 iTerm2 / Cmder 里运行命令行
* 使用PS + Sketch 切图
* 使用utools快到打开工具
  `

  return (
    <>
      <main>
        <div className="container">
          <div className="post-warp">
            <div className="markdown-body">
              <article dangerouslySetInnerHTML={{ __html: marked(resumemd) }}></article>
            </div>
          </div>
        </div>
      </main>
    </>


  )
}
export default Resume
