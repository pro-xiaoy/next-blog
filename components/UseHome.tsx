import { useHeader } from 'hocks/useHeader'
import { useFooter } from 'hocks/useFooter'

const UseHome = (props) => {
  console.log('props++++', props)
  const { pathUrl } = props
  const { headpage } = useHeader({pathUrl})
  const { footpage } = useFooter({})
  return (
    <>
      <div className="container">
        {headpage}
        <main>
          <div className="container">
            <div className="post-warp">
              {props.children}
            </div>
          </div>
        </main>
        {footpage}
      </div>
    </>
  )
}

export default UseHome
