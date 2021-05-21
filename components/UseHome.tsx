import { useHeader } from 'hocks/useHeader'
import { useFooter } from 'hocks/useFooter'

const UseHome = (props) => {
  const { pathUrl = '/' } = props
  const { headpage } = useHeader({ pathUrl })
  const { footpage } = useFooter({})
  return (
    <>
      <div className="wrapper">
        {headpage}
        <main className="main">
          <div className="container">
            <div className="post-warp">
              {props.children}
            </div>
          </div>
        </main>
        {footpage}
      </div>
      <style>{`
        .main {
          flex: 1 0 auto;
        }
        .main .container {
          padding-left: 1em;
           padding-right: 1em;
        }
      `}</style>
    </>
  )
}

export default UseHome
