import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState, useRef, useEffect } from "react"
import Pagination from "@/components/pagination"
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import useIsMobile from "@/hook/useMobile"
import FeaturedNew from "./FeaturedNews"

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
gsap.registerPlugin(Draggable, InertiaPlugin)

const News = () => {
  const [activeTab, setActiveTab] = useState(0);

  const isMobile = useIsMobile()
  const containerTabRef = useRef(null)
  const contentTabRef = useRef(null)


  useEffect(() => {
    if (!containerTabRef.current || !contentTabRef.current || !isMobile) return

    const draggable = Draggable.create(contentTabRef.current, {
      type: 'x',
      bounds: containerTabRef.current,
      inertia: true,
      cursor: 'grab',
      activeCursor: 'grabbing',
    })

    return () => {
      draggable[0].kill()
    }
  }, [isMobile])

  const [page, setPage] = useState(1)
  const itemsPerPage = 9

  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = repeatedNews.slice(startIndex, endIndex)

  return (
    <div className="p-[5rem] max-sm:px-[1rem] max-sm:pt-[3rem] pb-[6.75rem] max-sm:pb-[3rem] flex flex-col items-start gap-[6.75rem] max-sm:gap-[1.5rem] shrink-0">
      {/* Featured News */}
      <FeaturedNew />

      {/* Other news */}
      <div className="w-full flex flex-col justify-center items-center gap-[2rem]">
        <div className="flex flex-col items-start gap-[1.5rem] max-sm:gap-[1rem] self-stretch">
          <h1 className="text-[#3F2214] font-Optima text-[3rem] max-sm:text-[1.5rem] not-italic font-semibold leading-[3.6rem] max-sm:leading-[1.95rem] tracking-[-0.06rem] max-sm:tracking-[-0.045rem]">
            Tin tức khác
          </h1>
          <div ref={containerTabRef} className="flex justify-between items-center max-sm:flex-col max-sm:gap-[0.75rem] self-stretch overflow-hidden">
            <div ref={contentTabRef} className="flex items-center gap-[1.9375rem]">
              {tabs.map((tab, index) => (
                <div key={index}
                  onClick={() => setActiveTab(index)}
                  className={`whitespace-nowrap cursor-pointer py-[0.5rem] border-b ${activeTab === index ? 'border-[#95502F] text-[#95502F]' : 'border-transparent text-[rgba(0,0,0,0.60)]'} font-Inter text-[1rem] not-italic font-medium leading-[1.5rem] tracking-[-0.02rem]`}>
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

                  <button className="relative max-sm:opacity-0 flex justify-end items-start self-stretch transition-all duration-500 ease-in-out">
                    <div initial="rest" whileHover="hover" className="flex p-[0.625rem] gap-[0.625rem] shrink-0 rounded-[0.9375rem] bg-white">
                      <span className="absolute top-1/2 -translate-y-1/2 right-[3rem] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 text-center whitespace-nowrap pl-[0.625rem] flex-grow flex-shrink-0 basis-0 text-[#3F2214] font-Inter text-[0.875rem] not-italic font-semibold leading-[1.3125rem]">
                        Xem thêm
                      </span>
                      <div className="w-6 group-hover:w-[7.5rem] flex justify-end items-center transition-all duration-500 ease-in-out">
                        <svg className="group-hover:rotate-45 transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M7.04928 16.9497L16.9488 7.05025M16.9488 7.05025H8.46349M16.9488 7.05025V15.5355" stroke="#3F2214" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </button>

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