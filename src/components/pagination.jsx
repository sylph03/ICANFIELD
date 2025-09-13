import React from 'react'


const Pagination = ({ totalItems, itemsPerPage = 9, currentPage, onPageChange }) => {

  // Tổng số trang
  const count = Math.ceil(totalItems / itemsPerPage)

  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 4

    if (count <= maxVisiblePages) {
      // Nếu tổng số trang ít thì show hết
      for (let i = 1; i <= count; i++) {
        pages.push(i)
      }
    } else if (currentPage === 1) {
      // Nếu đang ở trang 1
      pages.push(1, 2, 3, 4, '...')
    } else if (currentPage === 2) {
      // Nếu đang ở trang 2
      pages.push(1, 2, 3, 4, '...')
    } else if (currentPage >= count - 1) {
      // Nếu ở gần cuối (trang count hoặc count-1)
      pages.push('...', count - 3, count - 2, count - 1, count)
    } else {
      // Trường hợp ở giữa
      pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...')
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  // Render dynamic page numbers
  return (
    <>
      {/* Pagination Control */}
      <div className="inline-flex items-center gap-[1.5rem] max-sm:gap-[1rem]">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="flex py-[0.61831rem] px-[0.53588rem] justify-center items-center rounded-[1.23656rem] border-[0.8px] border-transparent hover:border-[#EBEBEB]">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M7.68254 9.4975L13.3438 3.27594C13.4597 3.14713 13.6078 3.08273 13.7882 3.08273C13.9685 3.08273 14.1166 3.14713 14.2326 3.27594C14.3614 3.41763 14.4258 3.58509 14.4258 3.7783C14.4258 3.97152 14.3614 4.13253 14.2326 4.26134L9.03505 9.99986L14.2326 15.7384C14.3614 15.8672 14.4258 16.0282 14.4258 16.2214C14.4258 16.4146 14.3614 16.5821 14.2326 16.7238C14.1166 16.8526 13.9685 16.917 13.7882 16.917C13.6078 16.917 13.4597 16.8526 13.3438 16.7238L7.68254 10.5022C7.55373 10.3605 7.48933 10.1931 7.48933 9.99986C7.48933 9.80664 7.55373 9.63919 7.68254 9.4975Z" fill="#3F2214" />
          </svg>
        </button>

        {/* Page numbers */}
        <div className="flex justify-between items-center gap-[0.67rem] self-stretch">
          {pageNumbers.map((pageNum, index) => (
            pageNum === '...' ? (
              <div key={index} className="flex items-center gap-[0.33331rem]">
                {/* Ellipsis dots */}
                <span className="text-[#3F2214] font-Lexend text-[0.875rem] max-sm:text-[0.7rem] not-italic font-semibold leading-[1.3125rem] max-sm:leading-[1.05rem]">...</span>
              </div>
            ) : (
              <button
                key={index}
                onClick={() => onPageChange(pageNum)}
                // flex w-[2.5rem] max-sm:w-[2rem] h-[2.5rem] max-sm:h-[2rem] p-[0.75rem] items-center justify-center rounded-[0.75rem] border max-sm:border-[0.8px] border-[#CFCECE] bg-[#3F2214]
                className={`flex w-[2.5rem] max-sm:w-[2rem] h-[2.5rem] max-sm:h-[2rem] p-[0.75rem] items-center justify-center rounded-[0.75rem] border max-sm:border-[0.8px] ${currentPage === pageNum ? 'bg-[#3F2214]' : 'bg-white'
                  }`}
              >
                <span className={`font-Inter text-[0.875rem] max-sm:text-[0.7rem] not-italic font-bold leading-[1.3125rem] max-sm:leading-[1.05rem] ${currentPage === pageNum ? 'text-white' : 'text-[#3F2214]'
                  }`}>
                  {pageNum}
                </span>
              </button>
            )
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= count}
          className="flex py-[0.61831rem] px-[0.53588rem] justify-center items-center rounded-[1.23656rem] border-[0.8px] border-transparent hover:border-[#EBEBEB]">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M13.6678 10.5467L7.93905 16.7061C7.82172 16.8337 7.6729 16.8964 7.49257 16.8945C7.31225 16.8925 7.16483 16.8265 7.05031 16.6964C6.92305 16.5533 6.86048 16.3852 6.86258 16.192C6.86469 15.9988 6.93085 15.8385 7.06106 15.7111L12.3208 10.0296L7.18621 4.23473C7.05881 4.10452 6.99617 3.94282 6.99827 3.74961C7.00038 3.55641 7.06661 3.38967 7.19696 3.24939C7.31428 3.12185 7.46311 3.05906 7.64343 3.06103C7.82376 3.063 7.97118 3.12901 8.0857 3.25908L13.6787 9.542C13.806 9.68509 13.8686 9.85324 13.8665 10.0464C13.8644 10.2396 13.7981 10.4064 13.6678 10.5467Z" fill="#3F2214" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default Pagination


{/* <button className="flex w-[2.5rem] max-sm:w-[2rem] h-[2.5rem] max-sm:h-[2rem] p-[0.75rem] items-center justify-center rounded-[0.75rem] border max-sm:border-[0.8px] border-[#CFCECE] bg-[#3F2214]">
              <span className="text-white font-Inter text-[0.875rem] max-sm:text-[0.7rem] not-italic font-bold leading-[1.3125rem] max-sm:leading-[1.05rem]">1</span>
            </button>
            <button className="flex w-[2.5rem] max-sm:w-[2rem] h-[2.5rem] max-sm:h-[2rem] p-[0.75rem] items-center justify-center rounded-[0.75rem] border-[0.8px] max-sm:border-[0.64px] border-[#CFCECE] bg-white">
              <span className="text-[#3F2214] font-Inter text-[0.875rem] max-sm:text-[0.7rem] not-italic font-bold leading-[1.3125rem] max-sm:leading-[1.05rem]">2</span>
            </button>
            <button className="flex w-[2.5rem] max-sm:w-[2rem] h-[2.5rem] max-sm:h-[2rem] p-[0.75rem] items-center justify-center rounded-[0.75rem] border-[0.8px] max-sm:border-[0.64px] border-[#CFCECE] bg-white">
              <span className="text-[#3F2214] font-Inter text-[0.875rem] max-sm:text-[0.7rem] not-italic font-bold leading-[1.3125rem] max-sm:leading-[1.05rem]">3</span>
            </button>
            <button className="flex w-[2.5rem] max-sm:w-[2rem] h-[2.5rem] max-sm:h-[2rem] p-[0.75rem] items-center justify-center rounded-[0.75rem] border-[0.8px] max-sm:border-[0.64px] border-[#CFCECE] bg-white">
              <span className="text-[#3F2214] font-Inter text-[0.875rem] max-sm:text-[0.7rem] not-italic font-bold leading-[1.3125rem] max-sm:leading-[1.05rem]">4</span>
            </button>
            <button className="flex w-[2.5rem] max-sm:w-[2rem] h-[2.5rem] max-sm:h-[2rem] p-[0.75rem] items-center justify-center rounded-[0.75rem] border-[0.8px] max-sm:border-[0.64px] border-[#CFCECE] bg-white">
              <span className="text-[#3F2214] font-Lexend text-[0.875rem] max-sm:text-[0.7rem] not-italic font-semibold leading-[1.3125rem] max-sm:leading-[1.05rem]">...</span>
            </button> */}