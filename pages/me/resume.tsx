import marked from 'marked'
import UseHome from 'components/UseHome'


const Resume = (props) => {
  const { pathUrl } = props

  const resumemd = `
# 我的经历
> [方阳阳](/)  写于2021/03/06

#### 2017年毕业于滁州学院, 先后在上海证卷交易所、东方头条担任前端工程师。 现在在南京旻投电力科学院担任高级前端。

---

# 技术栈
* Web 前端开发技术（CSS、JavaScript、TypeScript、Vue、React 等）
* Web 后端开发技术（Node.js）
* 服务器 nginx docker
* 正在学习 Ruby on Rails
      
# 工具箱
* 编辑器喜欢用 vim、WebStorm、Vscode , Vscode插件生态很活跃。
* 在 iTerm2 / Cmder 里运行命令行
* 使用PS + Sketch 切图
* 使用utools快到打开工具
  `

  return (
    <>
      <UseHome pathUrl={pathUrl}>
        <main>
          <div className="container">
            <div className="post-warp">
              <div className="markdown-body">
                <article dangerouslySetInnerHTML={{ __html: marked(resumemd) }}></article>
              </div>
            </div>
          </div>
        </main>
      </UseHome>
    </>


  )
}
export default Resume

export async function getServerSideProps(context) {
  return {
    props: {
      pathUrl: context.resolvedUrl,
    }
  }
}