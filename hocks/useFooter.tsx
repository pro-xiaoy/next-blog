export const useFooter = (options) => {
  const footpage = (
    <footer className="footer">
    <div className="copyright">
      <div className="simpleintro">
        <i className="iconfont icon-banquan"></i>
        <span>2013-2021</span>
        <i className="iconfont icon-love1"></i>
        <span>方阳阳</span>
      </div>
      <div>
        <span>Powered by Hugo & LeaveIt</span>
      </div>
    </div>
    <style jsx>{`
              
        .copyright {
          font-size: 14px;
        }

        .simpleintro {
          line-height: 1;
        }

        .simpleintro i {
          font-size: 14px;
        }

      
      `}</style>
  </footer>
  )

  return {
    footpage
  }
}