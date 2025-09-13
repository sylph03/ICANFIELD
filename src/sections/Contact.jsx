import { useForm } from "react-hook-form"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

  const imgRef = useRef(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    alert("Form submitted!")
    reset()
  };

  useEffect(() => {
    if (!imgRef.current) return

    gsap.fromTo(
      imgRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      }
    )
  }, [])

  useEffect(() => {
    gsap.fromTo(
      '.fade-in-contact',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.fade-in-contact',
          start: "top 80%",
        },
      }
    )
  }, [])

  return (
    <>
      <div className="relative w-full h-[69.75rem] max-sm:h-[42.875rem] overflow-hidden">
        {/* Towel */}
        <img className="max-sm:hidden absolute w-full h-[68.68763rem] top-[-13.06rem]" src="/bg-connect-towel.png" />
        {/* Plant */}
        <img className="absolute h-[5.79794rem] max-sm:h-[1.65031rem] top-[7.75rem] max-sm:top-[23.06rem] left-[27.06rem] max-sm:left-[6.75rem]" src="/bg-connect-plant.png" />
        <img className="opacity-0 absolute h-[5.79794rem] max-sm:h-[1.65031rem] top-[0.5rem] max-sm:top-[23.06rem] left-[30.06rem] max-sm:left-[6.75rem]" src="/bg-connect-plant.png" />
        {/* Bird */}
        <img className="max-sm:hidden absolute h-[12.56263rem] top-[28.06rem] left-[36.88rem]" src="/bg-connect-bird.png" />
        <img className="opacity-0 max-sm:hidden absolute h-[12.56263rem] top-[20.06rem] left-[37.88rem]" src="/bg-connect-bird.png" />
        {/* People */}
        <img className="z-5 absolute w-[50.0625rem] max-sm:w-[15.32369rem] h-[31.90794rem] max-sm:h-[14.20763rem] bottom-[3.34rem] max-sm:bottom-[0.34rem] right-[-3.34rem] max-sm:right-[-0.75rem]" src="/bg-connect-people.png" />
        {/* Combo */}
        <img ref={imgRef} className="max-sm:hidden z-1 absolute w-[64.45769rem] max-sm:w-[26.36831rem] h-[71.75rem] max-sm:h-[20.49275rem] top-[-5.81rem] max-sm:top-[20.72rem] left-[2rem] max-sm:left-0" src="/bg-connect-combo.png" />
        <img className="hidden max-sm:block z-1 absolute w-[64.45769rem] max-sm:w-[26.36831rem] h-[71.75rem] max-sm:h-[24.49275rem] top-[-5.81rem] max-sm:top-[20.72rem] left-[2rem] max-sm:left-0" src="/bg-connect-combo-mb.png" />
        {/* Tree */}
        <img className="z-2 absolute w-full h-[80.12813rem] max-sm:h-[24.75819rem] top-[22.75rem] max-sm:top-[28.72rem] right-0 left-0" src="/bg-connect-tree.png" />

        {/* Form */}
        <div className="z-10 absolute top-[3.38rem] max-sm:top-0 right-[5rem] max-sm:right-0 flex w-[36.5rem] max-sm:w-full max-sm:px-[1rem] flex-col items-start gap-[2rem]">
          <h3 className="text-[#5C321E] font-Optima text-[2rem] max-sm:text-[1.5rem] not-italic font-medium max-sm:font-semibold leading-[2.4rem] max-sm:leading-[1.8rem] tracking-[-0.04rem] max-sm:[-0.03rem]">
            Hãy kết nối với chúng tôi
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start gap-[1.5rem] self-stretch"
          >
            {/* Họ và tên */}
            <div className="w-full flex flex-col">
              <input
                className="w-full py-[0.75rem] pr-[0.5rem] pl-[1rem] rounded-[0.5rem] border border-[rgba(0,0,0,0.10)] focus:outline-0 placeholder:text-[#A1A1A1] placeholder:font-Inter placeholder:text-[1rem] placeholder:font-normal placeholder:leading-[1.5rem] placeholder:tracking-[-0.02rem]"
                placeholder="Họ và tên*"
                {...register("fullName", {
                  required: "Trường này không được để trống.",
                  pattern: {
                    value: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂÂÊÔƠưăâêôơ\s]+$/,
                    message: "Họ và tên chỉ được chứa chữ cái và khoảng trắng"
                  },
                  minLength: {
                    value: 2,
                    message: "Họ và tên phải có ít nhất 2 ký tự"
                  }
                })}
              />
              {errors.fullName && (
                <span className="text-[#EA3434] font-Inter text-[0.75rem] font-normal not-italic leading-[1.125rem] tracking-[-0.0075rem] mt-[0.38rem]">{errors.fullName.message}</span>
              )}
            </div>
            <div className="w-full grid grid-cols-2 gap-[1rem]">
              {/* Email */}
              <div className="flex flex-col">
                <input
                  className="w-full py-[0.75rem] pr-[0.5rem] pl-[1rem] rounded-[0.5rem] border border-[rgba(0,0,0,0.10)] focus:outline-0 placeholder:text-[#A1A1A1] placeholder:font-Inter placeholder:text-[1rem] placeholder:font-normal placeholder:leading-[1.5rem] placeholder:tracking-[-0.02rem]"
                  placeholder="Email*"
                  {...register("email", {
                    required: "Trường này không được để trống.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email không hợp lệ",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-[#EA3434] font-Inter text-[0.75rem] font-normal not-italic leading-[1.125rem] tracking-[-0.0075rem] mt-[0.38rem]">{errors.email.message}</span>
                )}
              </div>
              {/* Số điện thoại */}
              <div className="flex flex-col">
                <input
                  className="w-full py-[0.75rem] pr-[0.5rem] pl-[1rem] rounded-[0.5rem] border border-[rgba(0,0,0,0.10)] focus:outline-0 placeholder:text-[#A1A1A1] placeholder:font-Inter placeholder:text-[1rem] placeholder:font-normal placeholder:leading-[1.5rem] placeholder:tracking-[-0.02rem]"
                  placeholder="Số điện thoại*"
                  type="tel"
                  {...register("phone", {
                    required: "Trường này không được để trống.",
                    pattern: {
                      value: /^[0-9]{9,11}$/,
                      message: "Số điện thoại không hợp lệ",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-[#EA3434] font-Inter text-[0.75rem] font-normal not-italic leading-[1.125rem] tracking-[-0.0075rem] mt-[0.38rem]">{errors.phone.message}</span>
                )}
              </div>
            </div>
            {/* Lời nhắn */}
            <input
              className="w-full py-[0.75rem] pr-[0.5rem] pl-[1rem] rounded-[0.5rem] border border-[rgba(0,0,0,0.10)] focus:outline-0 placeholder:text-[#A1A1A1] placeholder:font-Inter placeholder:text-[1rem] placeholder:font-normal placeholder:leading-[1.5rem] placeholder:tracking-[-0.02rem]"
              placeholder="Lời nhắn của bạn"
              {...register("message")}
            />
            <button
              type="submit"
              className="cursor-pointer flex h-[3rem] py-[0.5rem] pr-[0.75rem] pl-[1.5rem] items-center gap-[0.5rem] rounded-[0.5rem] bg-[linear-gradient(97deg,#5C321E_-3.86%,#95502F_51.97%,#F5C178_117.18%)]"
            >
              <span className="text-white font-Inter text-[0.875rem] not-italic font-medium leading-[1.3125rem] tracking-[0.0175rem]">Gửi thông tin</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="w-full h-[48.125rem] max-sm:h-[26rem] relative z-3 flex pl-[9.81rem] max-sm:px-[1rem] items-start gap-[15.3125rem] shrink-0">
        {/* Ribbon */}
        <img className="z-4 absolute w-full top-[-43.69rem] max-sm:top-[-9.2rem] right-0 left-0" src="/bg-connect-ribbon.png" />
        <img className="z-3 absolute w-full top-[-76.69rem] max-sm:top-[-16.4rem] right-0 left-0" src="/bg-connect-ribbonwhite.png" />
        <div className="z-1 absolute bottom-[-7.5rem] max-sm:bottom-[-0.9375rem] right-[-10.35rem] max-sm:right-[0.01438rem] font-biz text-[77.00825rem] max-sm:text-[16.90163rem] not-italic font-normal leading-[88.5595rem] max-sm:leading-[19.43681rem] tracking-[-3.08031rem] max-sm:tracking-[-0.67606rem] opacity-[0.12] bg-[linear-gradient(1deg,#AD765B_79.54%,rgba(71,48,37,0.00)94.66%)] bg-clip-text text-transparent rotate-180">"</div>

        <div className="absolute bottom-[9.31rem] max-sm:bottom-[2.5rem] z-5 flex max-sm:flex-col items-start gap-[15.3125rem] max-sm:gap-[2.5rem] shrink-0">
          <img className="fade-in-contact max-sm:w-[18.4375rem] max-sm:h-[4.875rem] max-sm:pl-[2.5rem]" src="/connect-logo.png" />
          <div className="fade-in-contact w-[37.8125rem] max-sm:w-full flex flex-col">
            <span className="text-[#5C321E] font-Optima text-[2rem] max-sm:text-[1.25rem] not-italic font-semibold leading-[2.6rem] max-sm:leading-[1.625rem] tracking-[-0.08rem] max-sm:tracking[-0.05rem]">
              Cuộc sống là một hành trình, và mỗi bước đi đúng đắn hôm nay sẽ mở ra cánh cửa cho một tương lai tươi sáng và tràn đầy hy vọng.
            </span>
            <br />
            <span className="text-[#767676] font-Optima text-[1.5rem] max-sm:text-[1rem] not-italic font-medium leading-[2.6rem] tracking-[-0.06rem] max-sm:tracking-[-0.04rem]">
              Khuyết danh
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact