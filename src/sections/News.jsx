import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState, useRef, useEffect } from "react"
import Pagination from "@/components/pagination"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"

const featuredNews = [
  {
    id: 1,
    img: '/bg-featurednews.png',
    text: 'Khám phá các quốc gia có chính sách định cư tay nghề tốt nhất, cơ hội phát triển sự nghiệp.'
  },
  {
    id: 2,
    img: '/bg-featurednews-1.jpg',
    text: 'Khám phá các quốc gia có chính sách định cư tay nghề tốt nhất, cơ hội phát triển sự nghiệp.'
  },
  {
    id: 3,
    img: '/bg-featurednews.png',
    text: 'Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024'
  }
]

const tabs = [
  'Sự kiện',
  'Tin định cư',
  'Tin du học',
  'Câu chuyện thành công',
];

const otherNews = [
  {
    categories: 'TIN TỨC DU HỌC',
    image: '/other-news-item1.png',
    title: 'Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024',
    date: '23/10/2024'
  },
  {
    categories: 'TIN TỨC DU HỌC',
    image: '/other-news-item2.png',
    title: 'Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024',
    date: '23/10/2024'
  },
  {
    categories: 'TIN TỨC DU HỌC',
    image: '/other-news-item3.png',
    title: 'Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024',
    date: '23/10/2024'
  },
  {
    categories: 'TIN TỨC DU HỌC',
    image: '/other-news-item4.png',
    title: 'Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024',
    date: '23/10/2024'
  },
  {
    categories: 'TIN TỨC DU HỌC',
    image: '/other-news-item5.png',
    title: 'Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024',
    date: '23/10/2024'
  },
]

const repeatedNews = Array.from({ length: 10 }).flatMap(() => otherNews);

const News = () => {
  const [newsActive, setNewsActive] = useState(0)
  const [activeTab, setActiveTab] = useState(0);
  const [itemHeight, setItemHeight] = useState(0)
  const itemRef = useRef(null)

  const [page, setPage] = useState(1)
  const itemsPerPage = 9

  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = repeatedNews.slice(startIndex, endIndex)

  useEffect(() => {
    if (itemRef.current) {
      const height = itemRef.current.offsetHeight
      setItemHeight(height)
    }
  }, [])

  function prev() {
    if (newsActive <= 0) return
    setNewsActive(prev => prev - 1)
  }

  function next() {
    if (newsActive >= featuredNews.length - 1) return
    setNewsActive(prev => prev + 1)
  }

  return (
    <div className="p-[5rem] max-sm:px-[1rem] max-sm:pt-[3rem] pb-[6.75rem] max-sm:pb-[3rem] flex flex-col items-start gap-[6.75rem] max-sm:gap-[1.5rem] shrink-0">
      {/* Featured News */}
      <div className="flex flex-col items-start gap-[1.5rem] self-stretch">
        <h1 className="text-[#3F2214] text-[3rem] max-sm:text-[1.5rem] font-Optima not-italic font-semibold leading-[3.6rem] max-sm:leading-[1.95rem] tracking-[-0.06rem] max-sm:[-0.045rem]">
          Tin nổi bật
        </h1>
        <div className="relative w-full aspect-[89.66263/34.63219] max-sm:aspect-[21.4375/34.625] rounded-[1.25rem] bg-cover bg-no-repeat bg-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={featuredNews[newsActive].img}
              src={featuredNews[newsActive].img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full rounded-[1.25rem] object-center object-cover"
            />
          </AnimatePresence>
          <div className="max-sm:hidden absolute inset-0 rounded-[1.25rem] bg-[linear-gradient(90deg,rgba(63,34,20,0.00)_59.16%,rgba(65,33,18,0.28)_70.87%,rgba(66,32,16,0.55)84.12%,#200D05_102.35%)]"></div>
          <div className="absolute inset-0 rounded-[1.25rem] bg-[linear-gradient(183deg,rgba(63,34,20,0.00)10.25%,#000_119.74%)]"></div>

          <div className="absolute bottom-[1.5rem] max-sm:bottom-[1.25rem] left-[4.54rem] max-sm:left-[1.5rem] flex w-[57.10388rem] flex-col items-start gap-[1.34494rem] max-sm:gap-[1rem] shrink-0">
            <div className="flex items-center gap-[1.34494rem]">
              <div className="flex px-[0.6725rem] items-center rounded-[0.33625rem] bg-white text-[#5C321E] font-Inter text-[0.78456rem] max-sm:text-[0.625rem] not-italic font-medium leading-[1.37181rem] tracking-[-0.02019rem]">
                Sự kiện nổi bật
              </div>
              <div className="flex items-center gap-[0.22419rem] shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                  <path d="M3.05273 5.60921H12.6167M3.05273 5.60921V10.8695C3.05273 11.5391 3.05273 11.8737 3.18304 12.1294C3.29765 12.3544 3.48041 12.5374 3.70536 12.652C3.96084 12.7822 4.29545 12.7822 4.96369 12.7822H10.7058C11.374 12.7822 11.7082 12.7822 11.9636 12.652C12.1886 12.5374 12.372 12.3544 12.4866 12.1294C12.6167 11.8739 12.6167 11.5398 12.6167 10.8716V5.60921M3.05273 5.60921V5.13112C3.05273 4.46158 3.05273 4.12656 3.18304 3.87083C3.29765 3.64588 3.48041 3.46312 3.70536 3.34851C3.96109 3.21821 4.29611 3.21821 4.96565 3.21821H5.44374M12.6167 5.60921V5.12916C12.6167 4.46093 12.6167 4.12631 12.4866 3.87083C12.372 3.64588 12.1886 3.46312 11.9636 3.34851C11.7079 3.21821 11.3736 3.21821 10.7041 3.21821H10.2257M10.2257 2.02271V3.21821M10.2257 3.21821H5.44374M5.44374 2.02271V3.21821" stroke="white" stroke-width="1.07595" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="text-white font-Inter text-[0.78456rem] max-sm:text-[0.75rem] not-italic font-normal leading-[0.89663rem]">
                  14.10.2024
                </span>
              </div>
            </div>
            <p className="w-[40.9375rem] max-sm:w-[17.4375rem] text-white font-Optima text-[2.24156rem] max-sm:text-[1.125rem] not-italic font-medium leading-[2.68988rem] max-sm:leading-[1.35rem] tracking-[-0.05606rem] ">
              Khám phá các quốc gia có chính sách định cư tay nghề tốt nhất, cơ hội phát triển sự nghiệp.
            </p>
            <button className="flex h-[3rem] max-sm:h-auto py-[0.5rem] max-sm:py-0 pl-[1.5rem] max-sm:pl-0 pr-[0.75rem] max-sm:pr-[0.375rem] items-center gap-[0.5rem] shrink-0 rounded-[0.5rem] border max-sm:border-0 border-[rgba(255,255,255,0.25)]">
              <span className="text-white font-Inter text-[0.875rem] not-italic font-medium leading-[1.3125rem] tracking-[-0.0175rem]">
                Chi tiết bài viết
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M7.625 12.0381H17.625M17.625 12.0381L13.625 8.03809M17.625 12.0381L13.625 16.0381" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>

          {/* <div className='max-sm:hidden w-[18.3rem] h-[20rem] absolute top-[5.62rem] right-[5.22rem] flex flex-col items-start justify-center gap-[3rem]'>
            {featuredNews.map((item, index) => (
              <div key={index} className='flex flex-col items-start w-[17.26006rem] gap-[0.22419rem]'>
                <p className={`${newsActive === index ? 'text-white' : 'text-[rgba(255,255,255,0.34)]'} text-[0.78456rem] font-Lexend not-italic font-semibold leading-[1.01994rem] tracking-[0.05606rem] uppercase`}>
                  {String(item.id).padStart(2, '0')}
                </p>
                <p className={`${newsActive === index ? 'opacity-100' : 'opacity-[0.34]'} text-white text-[0.96869rem] font-Inter not-italic font-medium leading-[1.28469rem]`}>
                  {item.text}
                </p>
              </div>
            ))} */}
          <div className='max-sm:hidden w-[18.3rem] h-[21rem] absolute top-1/2 -translate-y-1/2 right-[5.22rem] flex flex-col items-start justify-center gap-[3rem] overflow-hidden'>
            <div
              className='flex flex-col items-start gap-[3rem] transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateY(calc(50% - ${(newsActive * (itemHeight + 48)) + (itemHeight / 2)}px))`
              }}
            >
              {featuredNews.map((item, index) => (
                <div
                  key={index}
                  ref={index === 0 ? itemRef : null}
                  onClick={() => newsActive !== index && setNewsActive(index)}
                  className='flex flex-col items-start w-[17.26006rem] gap-[0.22419rem] cursor-pointer transition-opacity duration-200'
                >
                  <p className={`${newsActive === index ? 'text-white' : 'text-[rgba(255,255,255,0.34)]'} text-[0.78456rem] font-Lexend not-italic font-semibold leading-[1.01994rem] tracking-[0.05606rem] uppercase`}>
                    {String(item.id).padStart(2, '0')}
                  </p>
                  <p className={`${newsActive === index ? 'opacity-100' : 'opacity-[0.34]'} text-white text-[0.96869rem] font-Inter not-italic font-medium leading-[1.28469rem]`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='max-sm:hidden absolute top-1/2 -translate-y-1/2 right-[1.48rem] flex w-[3rem] h-[12.0625rem] flex-col justify-between items-center shrink-0'>
            <button onClick={prev} className='flex w-[2.75rem] h-[2.75rem] py-[0.59581rem] px-[0.6875rem] justify-center items-center shrink-0 rounded-[1.375rem] bg-[rgba(220,220,220,0.00)]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                <path d="M11.5586 8.44098L18.4766 14.7359C18.6198 14.8648 18.6914 15.0295 18.6914 15.23C18.6914 15.4306 18.6198 15.5953 18.4766 15.7242C18.319 15.8674 18.1328 15.939 17.918 15.939C17.7031 15.939 17.5241 15.8674 17.3809 15.7242L11 9.94489L4.61914 15.7242C4.47591 15.8674 4.29687 15.939 4.08203 15.939C3.86719 15.939 3.68099 15.8674 3.52344 15.7242C3.38021 15.5953 3.30859 15.4306 3.30859 15.23C3.30859 15.0295 3.38021 14.8648 3.52344 14.7359L10.4414 8.44098C10.599 8.29775 10.7852 8.22614 11 8.22614C11.2148 8.22614 11.401 8.29775 11.5586 8.44098Z" fill="white" fill-opacity="0.7" />
              </svg>
            </button>

            {featuredNews.map((_, index) => {
              return newsActive === index ? (
                <svg key={index} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g opacity="0.9">
                    <circle cx="6.61133" cy="6.01941" r="5.6" stroke="white" stroke-width="0.8" />
                    <circle cx="6.61133" cy="6.01941" r="3.6" fill="white" stroke="white" stroke-width="0.8" />
                  </g>
                </svg>
              ) : (
                <svg onClick={() => setNewsActive(index)} key={index} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <g opacity="0.4">
                    <circle cx="6.61133" cy="5.01941" r="3.73333" stroke="white" stroke-width="0.533333" />
                  </g>
                </svg>
              )
            })}

            <button onClick={next} className='flex w-[2.75rem] h-[2.75rem] py-[0.59581rem] px-[0.6875rem] justify-center items-center shrink-0 rounded-[1.375rem] bg-[rgba(220,220,220,0.00)]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                <path d="M10.4414 14.559L3.52344 8.2641C3.38021 8.13519 3.30859 7.97048 3.30859 7.76996C3.30859 7.56944 3.38021 7.40473 3.52344 7.27582C3.68099 7.13259 3.86719 7.06098 4.08203 7.06098C4.29688 7.06098 4.47591 7.13259 4.61914 7.27582L11 13.0551L17.3809 7.27582C17.5241 7.13259 17.7031 7.06097 17.918 7.06097C18.1328 7.06097 18.319 7.13259 18.4766 7.27582C18.6198 7.40472 18.6914 7.56944 18.6914 7.76996C18.6914 7.97048 18.6198 8.13519 18.4766 8.2641L11.5586 14.559C11.401 14.7023 11.2148 14.7739 11 14.7739C10.7852 14.7739 10.599 14.7023 10.4414 14.559Z" fill="white" fill-opacity="0.7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Other news */}
      <div className="w-full flex flex-col justify-center items-center gap-[2rem]">
        <div className="flex flex-col items-start gap-[1.5rem] max-sm:gap-[1rem] self-stretch">
          <h1 className="text-[#3F2214] font-Optima text-[3rem] max-sm:text-[1.5rem] not-italic font-semibold leading-[3.6rem] max-sm:leading-[1.95rem] tracking-[-0.06rem] max-sm:tracking-[-0.045rem]">
            Tin tức khác
          </h1>
          <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-[0.75rem] self-stretch">
            <div className="flex items-center gap-[1.9375rem]">
              {tabs.map((tab, index) => (
                <div key={index}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer py-[0.5rem] border-b ${activeTab === index ? 'border-[#95502F] text-[#95502F]' : 'border-transparent text-[rgba(0,0,0,0.60)]'} font-Inter text-[1rem] not-italic font-medium leading-[1.5rem] tracking-[-0.02rem]`}>
                  {tab}
                </div>
              ))}
            </div>

            <div className="flex max-sm:flex-row-reverse items-center gap-[1rem]">
              <DropdownMenu>
                <DropdownMenuTrigger className="max-sm:w-full flex w-[16.9375rem] py-[0.75rem] pr-[0.5rem] pl-[1rem] items-center gap-[0.5rem] rounded-[0.5rem] bg-[#F3F3F3]">
                  <div className="flex items-center flex-grow flex-shrink-0 basis-0">
                    <span className="text-[#333] font-Inter text-[1rem] max-sm:text-[0.75rem] not-italic font-medium max-sm:font-bold leading-[1.5rem] max-sm:leading-[1.125rem] tracking-[-0.02rem] max-sm:tracking-[-0.015rem]">Lọc theo:&nbsp;</span>
                    <span className="text-[#333] font-Inter text-[1rem] max-sm:text-[0.75rem] not-italic font-norma leading-[1.5rem] max-sm:leading-[1.125rem] tracking-[-0.02rem] max-sm:tracking-[-0.015rem]">Tất cả</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 10L12 14L8 10" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-sm:w-full w-[16.9375rem] flex p-[0.5rem] flex-col items-start self-stretch rounded-[0.5rem] bg-white shadow-[0_4px_10px_0_rgba(0, 0, 0, 0.20)]">
                  <DropdownMenuItem className="flex px-[1rem] py-[0.75rem ] items-center gap-[0.5rem] self-stretch border-b border-b-[rgba(0,0,0,0.10)] bg-white">
                    <p className="font-Inter text-[1rem] not-italic font-normal leading-[1.5rem] tracking-[-0.02rem]">Input</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex px-[1rem] py-[0.75rem ] items-center gap-[0.5rem] self-stretch border-b border-b-[rgba(0,0,0,0.10)] bg-white">
                    <p className="font-Inter text-[1rem] not-italic font-normal leading-[1.5rem] tracking-[-0.02rem]">Input</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex px-[1rem] py-[0.75rem ] items-center gap-[0.5rem] self-stretch border-b border-b-[rgba(0,0,0,0.10)] bg-white">
                    <p className="font-Inter text-[1rem] not-italic font-normal leading-[1.5rem] tracking-[-0.02rem]">Input</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex px-[1rem] py-[0.75rem ] items-center gap-[0.5rem] self-stretch border-b border-b-[rgba(0,0,0,0.10)] bg-white">
                    <p className="font-Inter text-[1rem] not-italic font-normal leading-[1.5rem] tracking-[-0.02rem]">Input</p>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="max-sm:w-full flex w-[16.9375rem] py-[0.75rem] pr-[0.5rem] pl-[1rem] items-center gap-[0.5rem] rounded-[0.5rem] bg-[#F3F3F3]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#A1A1A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input className="w-full h-full focus:outline-none placeholder:text-[#A1A1A1] placeholder:font-Inter placeholder:text-[0.875rem] max-sm:placeholder:text-[0.75rem] placeholder:not-italic placeholder:font-medium placeholder:leading-[1.3125rem] max-sm:placeholder:leading-[1.125rem] placeholder:tracking-[-0.0175rem] max-sm:placeholder:tracking-[-0.015rem]" placeholder="Tìm kiếm trong Blog" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[1.38rem] items-center">
          {/* List news */}
          <div className="w-full grid grid-cols-3 max-sm:grid-cols-1 gap-y-[4.5rem] max-sm:gap-y-[1.5rem] gap-x-[1.88rem]">
            {currentData.map((item, index) => (
              <div key={index} className="group w-full aspect-[23/26] rounded-[1rem] relative overflow-hidden">
                <img className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110 rounded-[1rem]" src={item.image} />
                <div className="relative z-1 w-full h-full rounded-[1rem] flex p-[2rem] max-sm:p-[1.5rem] flex-col justify-between items-start flex-grow flex-shrink-0 basis-0 self-stretch bg-[linear-gradient(180deg,rgba(0,0,0,0.00)22.87%,rgba(0,0,0,0.57)63.62%,rgba(0,0,0,0.84)89.8%)]">

                  <div className="max-sm:opacity-0 flex justify-end items-start self-stretch">
                    <div initial="rest" whileHover="hover" className="flex p-[0.625rem] gap-[0.625rem] shrink-0 rounded-[0.9375rem] bg-white">
                      <span className="hidden group-hover:flex transition-all duration-500 pl-[0.625rem] flex-grow flex-shrink-0 basis-0 text-[#3F2214] font-Inter text-[0.875rem] not-italic font-semibold leading-[1.3125rem]">
                        Xem thêm
                      </span>
                      <svg className="group-hover:rotate-45 transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.04928 16.9497L16.9488 7.05025M16.9488 7.05025H8.46349M16.9488 7.05025V15.5355" stroke="#3F2214" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex w-[24.75rem] max-sm:w-auto flex-col items-start gap-[0.6875rem] max-sm:gap-[0.75rem]">
                    <div className="px-[0.75rem] max-sm:px-[0.628rem] py-[0.375rem] max-sm:py-[0.314rem] rounded-[0.375rem] max-sm:rounded-[0.314rem] bg-[rgba(248,244,241,0.48)] backdrop-blur-[15px] max-sm:backdrop-blur-[12px] text-white font-Inter text-[0.75rem] max-sm:text-[0.625rem] not-italic font-bold leading-[1.125rem] max-sm:leading-[0.9375rem] uppercase">
                      {item.categories}
                    </div>
                    <div className="w-[23.24119rem] max-sm:w-[18.4375rem] self-stretch shrink-0 text-white font-Optima text-[1.25rem] max-sm:text-[0.875rem] not-italic max-sm:font-semibold leading-[1.875rem] max-sm:leading-[1.3125rem] tracking-[-0.025rem]">
                      {item.title}
                    </div>
                    <div className="flex items-center justify-start gap-[0.38175rem] self-stretch">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M2.71484 5.7856H13.5731M2.71484 5.7856V11.7578C2.71484 12.5179 2.71484 12.8978 2.86278 13.1882C2.99291 13.4435 3.20039 13.6514 3.45578 13.7815C3.74584 13.9293 4.12574 13.9293 4.8844 13.9293H11.4036C12.1622 13.9293 12.5416 13.9293 12.8316 13.7815C13.087 13.6514 13.2952 13.4435 13.4253 13.1882C13.5731 12.8981 13.5731 12.5187 13.5731 11.7601V5.7856M2.71484 5.7856V5.24282C2.71484 4.48267 2.71484 4.10231 2.86278 3.81197C2.99291 3.55658 3.20039 3.34909 3.45578 3.21897C3.74612 3.07103 4.12648 3.07103 4.88663 3.07103H5.42941M13.5731 5.7856V5.24059C13.5731 4.48192 13.5731 4.10203 13.4253 3.81197C13.2952 3.55658 13.087 3.34909 12.8316 3.21897C12.5413 3.07103 12.1618 3.07103 11.4016 3.07103H10.8586M10.8586 1.71375V3.07103M10.8586 3.07103H5.42941M5.42941 1.71375V3.07103" stroke="#C0C0C0" stroke-width="1.52695" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className="text-[#C0C0C0] text-right font-Inter text-[0.875rem] max-sm:[0.75rem] not-italic font-normal leading-[1.3125rem] max-sm:leading-[1.125rem] tracking-[-0.00875rem] max-sm:tracking-normal">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <Pagination
            totalItems={repeatedNews.length}
            itemsPerPage={itemsPerPage}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  )
}

export default News