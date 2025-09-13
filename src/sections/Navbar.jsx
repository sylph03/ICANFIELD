const Navbar = () => {
  return (
    <div className="max-sm:hidden flex px-[5rem] py-[0.625rem] items-center gap-[6.25rem] self-stretch bg-white">
      <div className="flex h-[2.875rem] items-center gap-[2.5rem] flex-grow flex-shrink-0 basis-0">
        <button className="text-[#333] font-Inter text-[1rem] not-italic font-normal leading-[1.5rem] tracking-[-0.02rem]">
          Định cư Canada
        </button>
        <div className="flex items-center gap-[0.25rem]">
          <button className="text-[#333] font-Inter text-[1rem] not-italic font-normal leading-[1.5rem] tracking-[-0.02rem]">
            Định cư Mỹ
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g opacity="0.6">
              <path d="M12.6673 6L8.00065 10.6667L3.33398 6" stroke="#5C321E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>
        </div>
        <button className="text-[#333] font-Inter text-[1rem] not-italic font-normal leading-[1.5rem] tracking-[-0.02rem]">
          Quốc tịch Caribe
        </button>
        <button className="text-[#333] font-Inter text-[1rem] not-italic font-normal leading-[1.5rem] tracking-[-0.02rem]">
          Định cư Châu Âu
        </button>
      </div>
      <img className="cursor-pointer" src="/IC.png" />
      <div className="flex justify-end items-center gap-[2rem] flex-grow flex-shrink-0 basis-0">
        <div className="flex items-center gap-[0.25rem] self-stretch">
          <button className="text-[#333] font-Inter text-[1rem] not-italic font-normal leading-[1.5rem] tracking-[-0.02rem]">
            Các chương trình khác
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g opacity="0.6">
              <path d="M12.6673 6L8.00065 10.6667L3.33398 6" stroke="#5C321E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>
        </div>
        <button className="text-[#333] font-Inter text-[1rem] not-italic font-normal leading-[1.5rem] tracking-[-0.02rem]">
          Cẩm nang iCanfield
        </button>
        <button className="flex h-[2.875rem] py-[0.5rem] pr-[1.375rem] pl-[1.125rem] items-center gap-[0.5rem] rounded-[0.5rem] bg-[#2E1506]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 4L13.975 9.2817L19.6085 9.52786L15.1955 13.0383L16.7023 18.4721L12 15.36L7.29772 18.4721L8.80445 13.0383L4.39155 9.52786L10.025 9.2817L12 4Z" fill="url(#paint0_linear_4307_18846)" />
            <defs>
              <linearGradient id="paint0_linear_4307_18846" x1="-2.0177" y1="-6.22223" x2="21.3548" y2="-4.13787" gradientUnits="userSpaceOnUse">
                <stop offset="0.260551" stop-color="#95502F" />
                <stop offset="1" stop-color="#F5C178" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-white font-Inter text-[0.875rem] not-italic font-medium leading-[1.3125rem] tracking-[-0.0175rem]">
            Hỗ trợ khách hàng
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12.6673 6L8.00065 10.6667L3.33398 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar