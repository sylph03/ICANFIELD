const Banner = () => {
  return (
    <div className="w-full aspect-[100.1875/29.875] max-sm:aspect-[23/25] bg-[url(/bg-banner.png)] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.30)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(26deg,rgba(0,0,0,0.70)_-19.37%,rgba(0,0,0,0.00)_128.25%)]"></div>

      {/* Breadcrumb */}
      <div className="max-sm:hidden z-1 relative flex px-[5rem] py-[1.5rem] items-center gap-[0.5rem]">
        <p className="text-[rgba(255,255,255,0.80)] font-Inter text-[0.875rem] not-italic font-medium leading-[1.3125rem] tracking-[-0.0175rem]">
          Trang chủ
        </p>
        <div className="w-[0.3125rem] h-[0.3125rem] shrink-0 rounded-[6.25rem] opacity-[0.6] bg-white"></div>
        <p className="text-white font-Inter text-[0.875rem] not-italic font-medium leading-[1.3125rem] tracking-[-0.0175rem]">
          Tin tức
        </p>
      </div>
      {/* Banner content */}
      <div className="max-sm:px-[1rem] max-sm:pt-[3.94rem] z-1 relative px-[5rem] inline-flex pr-[1rem] flex-col items-start gap-[1rem]">
        <svg className="max-sm:hidden" xmlns="http://www.w3.org/2000/svg" width="947" height="6" viewBox="0 0 947 6" fill="none">
          <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H946.5V2.5H3V3.5Z" fill="url(#paint0_linear_1889_53326)" fill-opacity="0.3" />
          <defs>
            <linearGradient id="paint0_linear_1889_53326" x1="3" y1="3.5" x2="946.5" y2="3.5" gradientUnits="userSpaceOnUse">
              <stop offset="0.5" stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex max-sm:flex-col items-start gap-[5rem] max-sm:gap-[1rem] self-stretch">
          <div className="flex flex-col items-start gap-[0.25rem]">
            <p className="text-white font-Optima text-[5rem] max-sm:text-[2.375rem] not-italic font-medium leading-[6rem] max-sm:leading-[2.85rem] tracking-[-0.1rem] max-sm:tracking-[-0.0475rem]">
              SỰ KIỆN ICANFIELD
            </p>
            <p className="text-white font-Optima text-[3.25rem] max-sm:text-[1.75rem] not-italic font-medium leading-[3.9rem] max-sm:leading-[2.275rem] tracking-[-0.065rem] max-sm:tracking-[-0.035rem]">
              Dòng Chảy Tin Tức
            </p>
          </div>
          <svg className="hidden max-sm:block" xmlns="http://www.w3.org/2000/svg" width="346" height="6" viewBox="0 0 346 6" fill="none">
            <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H346V2.5H3V3.5Z" fill="url(#paint0_linear_1889_53338)" fill-opacity="0.3" />
            <defs>
              <linearGradient id="paint0_linear_1889_53338" x1="3" y1="3.5" x2="346" y2="3.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.5" stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex py-[0.75rem] justify-center items-center gap-[0.625rem]">
            <p className="w-[20.1875rem] text-[rgba(255,255,255,0.85)] font-Inter text-[1rem] max-sm:text-[0.75rem] not-italic font-semibold leading-[1.5rem] max-sm:leading-[1.125rem] uppercase">
              Khám phá những chia sẻ giá trị, kinh nghiệm thực tiễn và thông tin hữu ích với iCanfield.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner