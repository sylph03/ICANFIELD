import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Autoplay } from "swiper/modules"
import { useState } from "react"
import Navbar from "@/sections/Navbar"

const textTitle = [
  'Tối ưu công năng sử dụng trong căn hộ ở Ecopark',
  'Ứng dụng vật liệu sinh học trong thiết kế nội thất',
  'Tìm hiểu về Bê tông khí chưng áp',
  'Tối ưu công năng sử dụng trong căn hộ ở Ecopark'
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-49">
      <div className="max-sm:hidden w-full h-[2.0625rem] shrink-0 bg-[linear-gradient(118deg,#2E1506_69.75%,#95502F_142.7%,#F5C178_182.76%)] px-[5rem]">
        <div className="flex justify-between items-center">
          {/* Header-left */}
          <div className="flex gap-[0.94rem] relative h-[2.0625rem]">
            <div className="absolute w-[9.875rem] h-[2.0625rem] shrink-0 bg-[linear-gradient(90deg,#FFF_0%,#FFF_52.5%,#FFF_100%)] opacity-[0.08]">
            </div>
            <button className="z-1 relative flex items-center justify-center gap-[0.625rem] w-[9.875rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <g clip-path="url(#clip0_4297_18817)">
                  <path d="M12.6227 7.53864C12.4636 7.53866 12.311 7.60188 12.1985 7.71439C12.086 7.8269 12.0228 7.97949 12.0227 8.13861V11.1781C12.0227 12.0593 11.4683 12.8586 10.6431 13.1667C10.4056 13.2551 10.1543 13.3003 9.90088 13.2999H3.82189C2.652 13.2999 1.70002 12.3479 1.70002 11.1781V5.09915C1.70002 3.92926 2.652 2.97728 3.82189 2.97728H6.86134C7.01876 2.97471 7.16887 2.91036 7.27928 2.79813C7.38969 2.68589 7.45157 2.53475 7.45157 2.37731C7.45157 2.21987 7.38969 2.06874 7.27928 1.9565C7.16887 1.84426 7.01876 1.77992 6.86134 1.77734H3.82189C1.99024 1.77726 0.5 3.2675 0.5 5.09915V11.1781C0.5 13.0097 1.99024 14.4999 3.82189 14.4999H9.9008C10.2974 14.5004 10.6909 14.4296 11.0625 14.291C12.3545 13.8085 13.2227 12.5577 13.2227 11.1781V8.13861C13.2227 7.97949 13.1594 7.8269 13.0469 7.71439C12.9344 7.60188 12.7818 7.53866 12.6227 7.53864Z" fill="white" />
                  <path d="M11.4274 0.5C9.73324 0.5 8.35517 1.87815 8.35517 3.57224C8.35517 5.26633 9.73332 6.64488 11.4274 6.64488C13.1215 6.64488 14.4999 5.26633 14.4999 3.57224C14.4999 1.87815 13.1215 0.5 11.4274 0.5ZM11.4274 5.44494C10.395 5.44494 9.55511 4.60473 9.55511 3.57232C9.55511 2.53991 10.3949 1.70002 11.4274 1.70002C12.4599 1.70002 13.2999 2.53983 13.2999 3.57232C13.2999 4.60481 12.4598 5.44494 11.4274 5.44494ZM5.21094 6.87227C5.21094 7.03139 5.27415 7.184 5.38666 7.29651C5.49918 7.40903 5.65178 7.47224 5.81091 7.47224H7.91092C8.06834 7.46966 8.21844 7.40532 8.32886 7.29308C8.43927 7.18085 8.50115 7.02971 8.50115 6.87227C8.50115 6.71483 8.43927 6.56369 8.32886 6.45146C8.21844 6.33922 8.06834 6.27488 7.91092 6.2723H5.81099C5.65186 6.2723 5.49924 6.33551 5.38672 6.44802C5.27419 6.56054 5.21096 6.71314 5.21094 6.87227ZM7.91092 8.80548H5.81099C5.65357 8.80805 5.50346 8.8724 5.39305 8.98463C5.28264 9.09687 5.22076 9.248 5.22076 9.40545C5.22076 9.56289 5.28264 9.71402 5.39305 9.82626C5.50346 9.93849 5.65357 10.0028 5.81099 10.0054H7.911C8.06842 10.0028 8.21852 9.93847 8.32892 9.82623C8.43933 9.71399 8.5012 9.56285 8.50119 9.40541C8.50118 9.24796 8.43929 9.09683 8.32887 8.98461C8.21845 8.87238 8.06834 8.80804 7.91092 8.80548Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_4297_18817">
                    <rect width="14" height="14" fill="white" transform="translate(0.5 0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[#F7F6F1] font-Inter text-[0.75rem] not-italic font-medium leading-[1.125rem]">TIN DOANH NGHIỆP</span>
            </button>
            <div className="flex h-[2.0625rem] justify-center items-center shrink-0">
              <Swiper
                className="h-[1.0625rem] w-full"
                direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                pagination={false}
                navigation={false}
                scrollbar={false}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
              >
                {textTitle.map((text, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex h-[1.0625rem] pr-[0.4375rem] pb-[0.0625rem] items-center justify-start">
                      <p className="text-white font-Inter text-[0.8125rem] not-italic font-normal leading-[0.975rem] hover:underline cursor-pointer text-center">
                        {text}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* Header-right */}
          <div className="flex w-[27.875rem] justify-between items-center">
            <button className="flex items-center gap-[0.625rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                <path d="M5.33333 6.50004H8M5.33333 9.16671H10.6667M5.33333 11.8334H10.6667M10.6663 1.83337V3.83337M5.33301 1.83337V3.83337M4.66667 2.83337H11.3333C12.8061 2.83337 14 4.02728 14 5.50004V12.5C14 13.9728 12.8061 15.1667 11.3333 15.1667H4.66667C3.19391 15.1667 2 13.9728 2 12.5V5.50004C2 4.02728 3.19391 2.83337 4.66667 2.83337Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-white font-Inter text-[0.75rem] not-italic font-medium leading-[1.125rem] tracking-[-0.0075rem]">
                SỰ KIỆN
              </p>
            </button>
            <button className="flex items-center gap-[0.625rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M2.66602 15.1667V9.83337M2.66602 9.83337V2.50004M2.66602 9.83337H5.33268M2.66602 2.50004V1.83337M2.66602 2.50004H10.666C11.4024 2.50004 11.9993 3.09699 11.9993 3.83337V5.16671M11.9993 5.16671H13.3327C14.0691 5.16671 14.666 5.76366 14.666 6.50004V11.8334C14.666 12.5698 14.0691 13.1667 13.3327 13.1667H6.66602C5.92964 13.1667 5.33268 12.5698 5.33268 11.8334V9.83337M11.9993 5.16671V8.50004C11.9993 9.23642 11.4024 9.83337 10.666 9.83337H5.33268" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-white font-Inter text-[0.75rem] not-italic font-medium leading-[1.125rem] tracking-[-0.0075rem]">
                TIN ĐỊNH CƯ
              </p>
            </button>
            <button className="flex items-center gap-[0.625rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <rect x="1.66797" y="2.5" width="13.3333" height="12" rx="2" stroke="white" />
                <path d="M1.66797 5.16663L5.83586 8.50094C7.29673 9.66964 9.37254 9.66963 10.8334 8.50094L15.0013 5.16663" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className="text-white font-Inter text-[0.75rem] not-italic font-medium leading-[1.125rem] tracking-[-0.0075rem]">
                LIÊN HỆ
              </p>
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex w-[4.3125rem] h-[1.5625rem] flex-col items-start gap-[0.5rem] shrink-0">
                <div className="flex py-[0.1875rem] items-center gap-[0.625rem] self-stretch rounded-[2rem]">
                  <div className="flex items-center gap-[0.375rem]">
                    <img src="/LanguageIcon.png" />
                    <span className="text-white font-Inter text-[0.75rem] not-italic font-medium leading-[1.125rem]">
                      VN
                    </span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <path d="M11 7L8 10L5 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex p-[0.5rem] flex-col items-center justify-center gap-[0.5rem] rounded-[0.25rem] bg-white min-w-fit" sideOffset={8}>
                <DropdownMenuItem className="flex items-center gap-[0.5rem]">
                  <img src="/LanguageIcon.png" />
                  <span className="text-[#5C5C5C] font-Inter text-[0.75rem] not-italic font-medium leading-[1.125rem]">
                    VN
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* mb */}
      <div className="bg-white hidden max-sm:flex px-[1rem] py-[0.75rem] justify-between items-center self-stretch text-white shadow-[0_4px_20px_0_rgba(0,0,0,0.19)]">
        <img className="w-[6.25244rem] h-[2.25rem]" src="/logo-real.png" />

        <div className="flex items-center gap-[1.5rem]">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-[0.375rem] rounded-[2rem]">
              <div className="flex items-center gap-[0.25rem]">
                <img src="/LanguageIcon.png" />
                <span className="text-[#2E2E2E] text-[0.75rem] font-Inter not-italic font-medium leading-[1.125rem]">
                  VN
                </span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M12 7.5L9 10.5L6 7.5" stroke="#5C321E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col items-center justify-center gap-[0.5rem] rounded-[0.25rem] bg-white min-w-fit" sideOffset={8}>
              <DropdownMenuItem className="flex items-center gap-[0.5rem]">
                <img src="/LanguageIcon.png" />
                <span className="text-[#5C5C5C] font-Inter text-[0.75rem] not-italic font-medium leading-[1.125rem]">
                  VN
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="flex w-[3.125rem] p-[0.75rem] flex-col justify-center items-end gap-[0.375rem] rounded-[0.375rem] bg-[rgba(0,0,0,0.10)]">
                <div className="h-[0.125rem] self-stretch rounded-[0.125rem] bg-[linear-gradient(97deg,#5C321E_-3.86%,#95502F_51.97%,#F5C178_117.18%)]"></div>
                <div className="w-[1.25rem] h-[0.125rem] self-stretch rounded-[0.125rem] bg-[linear-gradient(97deg,#5C321E_-3.86%,#95502F_51.97%,#F5C178_117.18%)]"></div>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <nav className="flex flex-col items-center gap-4 mt-10 text-lg font-medium">
                <a href="/" onClick={() => setOpen(false)}>Home</a>
                <a href="/" onClick={() => setOpen(false)}>BLog</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  )
}

export default Header