import { mkdir } from 'fs'
import marked from 'marked'


const Resume = () => {
  const resumemd = `
  # 联系方式
  （HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）
  
  - 手机：135.... （如果是外地手机，可注明。如经常关机，要写上最优联系时间）
  - Email：goodman@gmail.com （虽然我觉得QQ邮箱无所谓，不过有些技术人员比较反感，建议用G，非要用的话，不要用数字邮箱名）
  - QQ/微信号：6...（提供一个通过网络可以联系到你的方式）
  
  
  ---      
  # 致谢
  感谢您花时间阅读我的简历，期待能有机会和您共事。
        
  # 开源项目和作品
  （这一段用于放置工作以外的、可证明你的能力的材料）
  
  ## 开源项目
  （对于程序员来讲，没有什么比Show me the code能有说服力了）
  
    - [STU](http://github.com/yourname/projectname)：项目的简要说明，Star和Fork数多的可以注明
    - [WXYZ](http://github.com/yourname/projectname)：项目的简要说明，Star和Fork数多的可以注明
  
  ## 技术文章
  （挑选你写作或翻译的技术文章，好的文章可以从侧面证实你的表达和沟通能力，也帮助招聘方更了解你）
  
  - [一个产品经理眼中的云计算：前生今世和未来](http://get.jobdeer.com/706.get)
  - [来自HeroKu的HTTP API 设计指南(翻译文章)](http://get.jobdeer.com/343.get) （ 好的翻译文章可以侧证你对英文技术文档的阅读能力）
  
  ## 演讲和讲义
  （放置你代表公司在一些技术会议上做过的演讲，以及你在公司分享时制作的讲义）
  
    - 2014架构师大会演讲：[如何通过Docker优化内部开发](http://ftqq.com)
    - 9月公司内部分享：[云计算的前生今世](http://ftqq.com)
      
      
  # 联系方式
  
  （HR会打印你的简历，用于在面试的时候联系，所以联系方式放到最上边会比较方便）
  
  - 手机：135.... （如果是外地手机，可注明。如经常关机，要写上最优联系时间）
  - Email：goodman@gmail.com （虽然我觉得QQ邮箱无所谓，不过有些技术人员比较反感，建议用G，非要用的话，不要用数字邮箱名）
  - QQ/微信号：6...（提供一个通过网络可以联系到你的方式）
  
  `

  return (
    <div className="markdown-body">
      <article dangerouslySetInnerHTML={{__html: marked(resumemd)}}></article>
    </div>
  )
}
export default Resume
