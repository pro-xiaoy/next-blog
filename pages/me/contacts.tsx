import marked from 'marked'
import UseHome from 'components/UseHome'


const Contacts = (props) => {
  const { pathUrl } = props
  return (
    <>
      <UseHome pathUrl={pathUrl}>
        <div>
          <h3 style={{ textAlign: 'center', fontSize: '30px' }}>联系方式</h3>
          <div>
            <form>
              <div className="form_item">
                <label className="form_item_label">邮箱:</label>
                <span><a href="javascript:;">33578091@qq.com</a> </span>
              </div>
              <div className="form_item">
                <label className="form_item_label">掘金:</label>
                <span><a href="https://juejin.cn/user/1574156380945341" target="_bank">pro-xiaoy</a></span>
              </div>
              <div className="form_item">
                <label className="form_item_label">github:</label>
                <span><a href="https://github.com/pro-xiaoy" target="_bank">pro-xiaoy</a></span>
              </div>
            </form>
          </div>
        </div>
        <style>{`
          .form_item {
            line-height: 2em;
            font-size: 18px;
          }
          .form_item_label {
            display: inline-block;
            min-width: 4em;
            text-align: right;
            padding-right: 10px;
          }
        `}</style>
      </UseHome>
    </>


  )
}
export default Contacts

export async function getServerSideProps(context) {
  return {
    props: {
      pathUrl: context.resolvedUrl,
    }
  }
}