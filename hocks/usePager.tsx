import Link from "next/link";

export const usePager = (options) => {
  const { page, totalPage } = options
  const numbers = [];
  numbers.push(1)
  for (let i = page - 2; i <= page + 2; i++) {
    numbers.push(i);
  }
  numbers.push(totalPage)
  const pageNumbers = [...new Set(numbers)].sort().filter(n => n >= 1 && n <= totalPage)
    .reduce((result, n) => n - (result[result.length - 1] || 0) === 1 ?
      result.concat(n) : result.concat(-1, n), []);

  const pager = (
    <div className="wrapper">
      {pageNumbers.map(item => item === -1 ?
        <span key={item}>...</span>
        :
        <Link key={item} href={`/posts?page=${item}`}>
          <a>
            {item}
          </a>
        </Link>
      )}
      <span>
        第 {page} / {totalPage} 页
      </span>

      <style jsx>
        {`
          .wrapper {
            margin: 0 -8px;
          }
          .wrapper > a, .wrapper > span{
            margin: 0 8px;
          }
        `}
      </style>
    </div>
  )

  return {
    pager
  }
}