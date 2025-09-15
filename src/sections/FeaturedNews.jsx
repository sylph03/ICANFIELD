import { useState, useRef, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"

const featuredNews = [
  {
    id: 1,
    img: '/bg-featurednews-1.jpg',
    text: 'Khám phá các quốc gia có chính sách định cư tay nghề tốt nhất, cơ hội phát triển sự nghiệp.',
    categories: 'TIN TỨC DU HỌC',
    date: '21/10/2024'
  },
  {
    id: 2,
    img: '/bg-featurednews.png',
    text: 'Khám phá các quốc gia có chính sách định cư tay nghề tốt nhất, cơ hội phát triển sự nghiệp.',
    categories: 'TIN TỨC DU HỌC',
    date: '22/10/2024'
  },
  {
    id: 3,
    img: '/bg-featurednews-1.jpg',
    text: 'Cập nhật chính sách du học Úc dành cho sinh viên quốc tế năm 2024',
    categories: 'TIN TỨC DU HỌC',
    date: '23/10/2024'
  }
]

const FeaturedNew = () => {
  const [newsActive, setNewsActive] = useState(0)
  const [itemHeight, setItemHeight] = useState(0)
  const itemRef = useRef(null)
  const swiperRef = useRef(null)


  useEffect(() => {
    if (itemRef.current) {
      const height = itemRef.current.offsetHeight
      setItemHeight(height)
    }
  }, [])

  useEffect(() => {
    if (newsActive >= featuredNews.length - 1) return
    const intervalId = setInterval(() => {
      const nextIndex = Math.min(newsActive + 1, featuredNews.length - 1)
      setNewsActive(nextIndex)
      if (swiperRef.current) {
        swiperRef.current.slideTo(nextIndex)
      }
    }, 10000)

    return () => clearInterval(intervalId)
  }, [newsActive])

  function prev() {
    if (newsActive <= 0) return
    const targetIndex = newsActive - 1
    setNewsActive(targetIndex)
    if (swiperRef.current) {
      swiperRef.current.slideTo(targetIndex)
    }
  }

  function next() {
    if (newsActive >= featuredNews.length - 1) return
    const targetIndex = newsActive + 1
    setNewsActive(targetIndex)
    if (swiperRef.current) {
      swiperRef.current.slideTo(targetIndex)
    }
  }

  return (
    <div className="flex flex-col items-start gap-[1.5rem] self-stretch">
      <h1 className="text-[#3F2214] text-[3rem] max-sm:text-[1.5rem] font-Optima not-italic font-semibold leading-[3.6rem] max-sm:leading-[1.95rem] tracking-[-0.06rem] max-sm:[-0.045rem]">
        Tin nổi bật
      </h1>
      {/* pc */}
      <div className="max-sm:hidden relative w-full aspect-[89.66263/34.63219] max-sm:aspect-[21.4375/34.625] rounded-[1.25rem] rounded-b-[1rem] bg-cover bg-no-repeat bg-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={featuredNews[newsActive].img}
            src={featuredNews[newsActive].img}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full rounded-[1.25rem] rounded-b-[1rem] object-center object-cover"
          />
        </AnimatePresence>
        <div className="max-sm:hidden absolute inset-0 rounded-[1.25rem] bg-[linear-gradient(90deg,rgba(63,34,20,0.00)_59.16%,rgba(65,33,18,0.28)_70.87%,rgba(66,32,16,0.55)84.12%,#200D05_102.35%)]"></div>
        <div className="absolute inset-0 rounded-[1.25rem] bg-[linear-gradient(183deg,rgba(63,34,20,0.00)10.25%,#000_119.74%)]"></div>
        <motion.div
          key={newsActive}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute w-full h-[0.8125rem] bottom-0 right-0 left-0 rounded-b-[1rem] bg-[linear-gradient(98deg,#B56641_41.26%,#F5C178_97.06%)]">
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="absolute bottom-[1.5rem] max-sm:bottom-[1.25rem] left-[4.54rem] max-sm:left-[1.5rem] flex w-[57.10388rem] flex-col items-start gap-[1.34494rem] max-sm:gap-[1rem] shrink-0">
          <div className="flex items-center gap-[1.34494rem]">
            <div className="flex px-[0.6725rem] items-center rounded-[0.33625rem] bg-white text-[#5C321E] font-Inter text-[0.78456rem] max-sm:text-[0.625rem] not-italic font-medium leading-[1.37181rem] tracking-[-0.02019rem]">
              {featuredNews[newsActive].categories}
            </div>
            <div className="flex items-center gap-[0.22419rem] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path d="M3.05273 5.60921H12.6167M3.05273 5.60921V10.8695C3.05273 11.5391 3.05273 11.8737 3.18304 12.1294C3.29765 12.3544 3.48041 12.5374 3.70536 12.652C3.96084 12.7822 4.29545 12.7822 4.96369 12.7822H10.7058C11.374 12.7822 11.7082 12.7822 11.9636 12.652C12.1886 12.5374 12.372 12.3544 12.4866 12.1294C12.6167 11.8739 12.6167 11.5398 12.6167 10.8716V5.60921M3.05273 5.60921V5.13112C3.05273 4.46158 3.05273 4.12656 3.18304 3.87083C3.29765 3.64588 3.48041 3.46312 3.70536 3.34851C3.96109 3.21821 4.29611 3.21821 4.96565 3.21821H5.44374M12.6167 5.60921V5.12916C12.6167 4.46093 12.6167 4.12631 12.4866 3.87083C12.372 3.64588 12.1886 3.46312 11.9636 3.34851C11.7079 3.21821 11.3736 3.21821 10.7041 3.21821H10.2257M10.2257 2.02271V3.21821M10.2257 3.21821H5.44374M5.44374 2.02271V3.21821" stroke="white" stroke-width="1.07595" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className="text-white font-Inter text-[0.78456rem] max-sm:text-[0.75rem] not-italic font-normal leading-[0.89663rem]">
                {featuredNews[newsActive].date}
              </span>
            </div>
          </div>
          <p className="w-[40.9375rem] max-sm:w-[17.4375rem] text-white font-Optima text-[2.24156rem] max-sm:text-[1.125rem] not-italic font-medium leading-[2.68988rem] max-sm:leading-[1.35rem] tracking-[-0.05606rem] ">
            {featuredNews[newsActive].text}
          </p>
          <button className="flex h-[3rem] max-sm:h-auto py-[0.5rem] max-sm:py-0 pl-[1.5rem] max-sm:pl-0 pr-[0.75rem] max-sm:pr-[0.375rem] items-center gap-[0.5rem] shrink-0 rounded-[0.5rem] border max-sm:border-0 border-[rgba(255,255,255,0.25)]">
            <span className="text-white font-Inter text-[0.875rem] not-italic font-medium leading-[1.3125rem] tracking-[-0.0175rem]">
              Chi tiết bài viết
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M7.625 12.0381H17.625M17.625 12.0381L13.625 8.03809M17.625 12.0381L13.625 16.0381" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </motion.div>

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
                onClick={() => { if (newsActive !== index) { setNewsActive(index); swiperRef.current?.slideTo(index) } }}
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
              <svg onClick={() => { setNewsActive(index); swiperRef.current?.slideTo(index) }} key={index} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
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

      {/* mb */}
      <div className="hidden max-sm:flex flex-nowrap relative w-full aspect-[89.66263/34.63219] max-sm:aspect-[21.4375/34.625] rounded-[1.25rem] bg-cover bg-no-repeat bg-center">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          loop={false}
          onSlideChange={(swiper) => setNewsActive(swiper.activeIndex)}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          className="rounded-[1.25rem]"
        >
          {featuredNews.map((news, index) => (
            <SwiperSlide key={index}>
              <img src={news.img} className="absolute inset-0 w-full h-full rounded-[1.25rem] object-center object-cover" />
              <div className="max-sm:hidden absolute inset-0 rounded-[1.25rem] bg-[linear-gradient(90deg,rgba(63,34,20,0.00)_59.16%,rgba(65,33,18,0.28)_70.87%,rgba(66,32,16,0.55)84.12%,#200D05_102.35%)]"></div>
              <div className="absolute inset-0 rounded-[1.25rem] bg-[linear-gradient(183deg,rgba(63,34,20,0.00)10.25%,#000_119.74%)]"></div>
              <motion.div
                key={newsActive}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute w-full h-[0.44rem] bottom-0 right-0 left-0 rounded-b-[1rem] bg-[linear-gradient(98deg,#B56641_41.26%,#F5C178_97.06%)]">
              </motion.div>

              <div className="absolute bottom-[1.5rem] max-sm:bottom-[1.25rem] left-[4.54rem] max-sm:left-[1.5rem] flex w-[57.10388rem] flex-col items-start gap-[1.34494rem] max-sm:gap-[1rem] shrink-0">
                <div className="flex items-center gap-[1.34494rem]">
                  <div className="flex px-[0.6725rem] items-center rounded-[0.33625rem] bg-white text-[#5C321E] font-Inter text-[0.78456rem] max-sm:text-[0.625rem] not-italic font-medium leading-[1.37181rem] tracking-[-0.02019rem]">
                    {news.categories}
                  </div>
                  <div className="flex items-center gap-[0.22419rem] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                      <path d="M3.05273 5.60921H12.6167M3.05273 5.60921V10.8695C3.05273 11.5391 3.05273 11.8737 3.18304 12.1294C3.29765 12.3544 3.48041 12.5374 3.70536 12.652C3.96084 12.7822 4.29545 12.7822 4.96369 12.7822H10.7058C11.374 12.7822 11.7082 12.7822 11.9636 12.652C12.1886 12.5374 12.372 12.3544 12.4866 12.1294C12.6167 11.8739 12.6167 11.5398 12.6167 10.8716V5.60921M3.05273 5.60921V5.13112C3.05273 4.46158 3.05273 4.12656 3.18304 3.87083C3.29765 3.64588 3.48041 3.46312 3.70536 3.34851C3.96109 3.21821 4.29611 3.21821 4.96565 3.21821H5.44374M12.6167 5.60921V5.12916C12.6167 4.46093 12.6167 4.12631 12.4866 3.87083C12.372 3.64588 12.1886 3.46312 11.9636 3.34851C11.7079 3.21821 11.3736 3.21821 10.7041 3.21821H10.2257M10.2257 2.02271V3.21821M10.2257 3.21821H5.44374M5.44374 2.02271V3.21821" stroke="white" stroke-width="1.07595" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="text-white font-Inter text-[0.78456rem] max-sm:text-[0.75rem] not-italic font-normal leading-[0.89663rem]">
                      {news.date}
                    </span>
                  </div>
                </div>
                <p className="w-[40.9375rem] max-sm:w-[17.4375rem] text-white font-Optima text-[2.24156rem] max-sm:text-[1.125rem] not-italic font-medium leading-[2.68988rem] max-sm:leading-[1.35rem] tracking-[-0.05606rem] ">
                  {news.text}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* pagination mb */}
      <div className="hidden max-sm:flex w-full mb-[1.5rem] justify-center items-center">
        {featuredNews.map((_, index) => {
          return newsActive === index ? (
            <svg xmlns="http://www.w3.org/2000/svg" key={index} width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g opacity="0.9">
                <circle cx="6.85937" cy="6.20703" r="5.6" transform="rotate(90 6.85937 6.20703)" stroke="#5C321E" stroke-width="0.8" />
                <circle cx="6.85938" cy="6.20703" r="3.6" transform="rotate(90 6.85938 6.20703)" fill="#5C321E" stroke="#5C321E" stroke-width="0.8" />
              </g>
            </svg>
          ) : (
            <svg onClick={() => swiperRef.current?.slideTo(index)} key={index} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g opacity="0.4">
                <circle cx="6.85938" cy="6.20703" r="3.73333" transform="rotate(90 6.85938 6.20703)" stroke="#5C321E" stroke-width="0.533333" />
              </g>
            </svg>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedNew