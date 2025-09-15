const Footer = () => {
  return (
    <div className="w-full shrink-0 rounded-[0.0625rem] bg-[#3F2214] pt-[6rem] max-sm:pt-[2.5rem] flex flex-col items-center">
      <div className="flex w-[45.29138rem] max-sm:w-full flex-col items-center gap-[1.5rem] max-sm:gap-[1rem] mb-[3.25rem] max-sm:mb-[2.5rem]">
        <p className="self-stretch text-[#F7F6F1] text-center font-Optima text-[2.5rem] max-sm:text-[1.25rem] not-italic font-semibold leading-[3rem] max-sm:leading-[1.625rem] tracking-[-0.05rem] max-sm:tracking-[-0.025rem] whitespace-pre-line">
          Hãy để iCanfield dẫn lối<br />
          hành trình quốc tế hóa của bạn!
        </p>
        <button className="flex h-[3rem] py-[0.5rem] pr-[0.75rem] pl-[1.5rem] items-center gap-[0.5rem] rounded-[0.5rem] border border-[rgba(255,255,255,0.85)]">
          <span className="text-white font-Inter text-[0.875rem] not-italic font-medium leading-[1.3125rem] tracking-[-0.0175rem]">
            Hỗ trợ khách hàng
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M7.83203 12H17.832M17.832 12L13.832 8M17.832 12L13.832 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div className="w-full px-[5rem] max-sm:px-0 shrink-0">
        <div className="px-[6rem] max-sm:px-[1rem] pb-[3.88rem] max-sm:pb-[2.5rem] flex flex-col gap-[2rem] rounded-t-[2rem] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px]">
          <div className="flex justify-between items-center max-sm:flex-col max-sm:pt-[2.5rem]">
            <img className="pt-[4rem] max-sm:pt-0 max-sm:w-[8.18975rem] max-sm:h-[9.625rem]" src="/footer-logo.png" />

            <div className="flex w-[59.5rem] max-sm:w-full max-sm:flex-col max-sm:gap-[2.5rem] justify-between items-start mt-[6rem] max-sm:mt-[2rem]">

              <div className="flex w-[17.25rem] max-sm:w-full flex-col items-start gap-[2rem] max-sm:gap-[1rem] shrink-0">
                <h5 className="text-white tex font-Inter text-[1rem] not-italic font-medium max-sm:font-bold leading-[1.5rem]">THÔNG TIN LIÊN HỆ</h5>
                <ul className="flex flex-col items-start gap-[1.25rem] self-stretch">
                  <li className="flex items-start gap-[1rem] self-stretch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M18.7461 16.25H17.4961V9.02646C17.4959 8.85233 17.4595 8.68014 17.389 8.52089C17.3186 8.36164 17.2157 8.21883 17.087 8.10155L10.8365 2.41912C10.6069 2.20888 10.3069 2.09227 9.99558 2.09229C9.68429 2.0923 9.38429 2.20893 9.15473 2.4192L2.90518 8.10155C2.77645 8.21881 2.67359 8.36163 2.60315 8.52088C2.53271 8.68013 2.49625 8.85231 2.49609 9.02644V16.25H1.24609C1.08033 16.25 0.921362 16.3158 0.804152 16.433C0.686942 16.5503 0.621094 16.7092 0.621094 16.875C0.621094 17.0407 0.686942 17.1997 0.804152 17.3169C0.921362 17.4341 1.08033 17.5 1.24609 17.5H18.7461C18.9119 17.5 19.0708 17.4341 19.188 17.3169C19.3052 17.1997 19.3711 17.0407 19.3711 16.875C19.3711 16.7092 19.3052 16.5503 19.188 16.433C19.0708 16.3158 18.9119 16.25 18.7461 16.25H18.7461ZM11.8706 16.2493H11.2456V16.25H8.74564V16.2493H8.12064V12.4993C8.12064 12.3336 8.18649 12.1746 8.3037 12.0574C8.42091 11.9402 8.57988 11.8743 8.74564 11.8743H11.2456C11.4114 11.8743 11.5704 11.9402 11.6876 12.0574C11.8048 12.1746 11.8706 12.3336 11.8706 12.4993V16.2493Z" fill="white" />
                    </svg>
                    <p className="text-white font-Inter text-[1rem] max-sm:text-[0.875rem] not-italic font-normal leading-[1.5rem] max-sm:leading-[1.3125rem] max-sm:tracking-[-0.00875rem] flex-grow flex-shrink-0 basis-0">
                      Tầng 12, Tòa nhà President Place 93 Nguyễn Du, Phường Sài Gòn, TP.HCM
                    </p>
                  </li>
                  <li className="flex items-start gap-[1rem] self-stretch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M18.1242 4.3601C18.124 4.34855 18.1234 4.33701 18.1225 4.32549C18.1218 4.31608 18.1208 4.30674 18.1197 4.29747C18.1184 4.28667 18.1167 4.27593 18.1148 4.26519C18.1131 4.25551 18.1112 4.24589 18.1091 4.23637C18.1067 4.22619 18.1041 4.2161 18.1012 4.20603C18.0985 4.1964 18.0957 4.18686 18.0926 4.17743C18.0893 4.16759 18.0857 4.1579 18.0819 4.14822C18.0783 4.13895 18.0746 4.12977 18.0706 4.12075C18.0663 4.11121 18.0617 4.10185 18.057 4.0925C18.0525 4.08363 18.0479 4.07486 18.043 4.06624C18.0379 4.05733 18.0325 4.04858 18.027 4.03986C18.0214 4.03107 18.0156 4.02244 18.0096 4.01396C18.0039 4.00597 17.998 3.99813 17.9919 3.99034C17.9851 3.98159 17.978 3.97308 17.9707 3.96471C17.9673 3.96076 17.9643 3.95656 17.9607 3.95268C17.9577 3.9494 17.9544 3.94661 17.9513 3.94341C17.9438 3.93551 17.936 3.92794 17.928 3.92044C17.9207 3.9135 17.9133 3.90662 17.9057 3.90007C17.8981 3.89367 17.8904 3.8876 17.8826 3.88153C17.874 3.87489 17.8655 3.86832 17.8567 3.86219C17.8491 3.85687 17.8412 3.85193 17.8333 3.84695C17.824 3.84108 17.8147 3.83522 17.8052 3.82988C17.7969 3.82523 17.7884 3.82101 17.7798 3.81674C17.7704 3.81203 17.7611 3.80728 17.7515 3.80307C17.7421 3.79895 17.7325 3.79536 17.723 3.7917C17.7138 3.78819 17.7046 3.78463 17.6953 3.78157C17.6852 3.77824 17.6749 3.77545 17.6646 3.77263C17.6553 3.77011 17.6461 3.76757 17.6368 3.76549C17.6265 3.76319 17.616 3.76138 17.6056 3.75958C17.5957 3.7579 17.5858 3.75626 17.5758 3.75506C17.566 3.75386 17.556 3.75306 17.546 3.75233C17.5351 3.75153 17.5241 3.7509 17.5132 3.75067C17.5088 3.75057 17.5045 3.75 17.5 3.75H2.5C2.4958 3.75 2.49176 3.75055 2.48756 3.75063C2.47604 3.75086 2.46452 3.75151 2.45304 3.75236C2.44354 3.75309 2.43412 3.75383 2.42477 3.75496C2.41428 3.75622 2.40387 3.75793 2.39342 3.75975C2.38346 3.76147 2.3735 3.76316 2.36374 3.76535C2.3539 3.76755 2.34421 3.77022 2.33444 3.77289C2.3246 3.7756 2.31476 3.77825 2.30511 3.78141C2.29534 3.78462 2.28573 3.78834 2.27608 3.79204C2.26696 3.79555 2.2578 3.79898 2.24888 3.80289C2.23892 3.80726 2.22919 3.81218 2.21942 3.8171C2.21122 3.82122 2.20302 3.82525 2.19505 3.82971C2.18528 3.83518 2.17575 3.84119 2.16621 3.84724C2.15858 3.85208 2.15088 3.85689 2.14348 3.86206C2.13451 3.86828 2.12585 3.87495 2.11719 3.8817C2.10949 3.88767 2.10186 3.89366 2.09446 3.89999C2.08675 3.90657 2.07931 3.9135 2.07184 3.92054C2.06394 3.92798 2.0562 3.93553 2.04868 3.94337C2.04563 3.94659 2.04228 3.9494 2.03926 3.95268C2.03571 3.95657 2.03274 3.96076 2.0293 3.96471C2.02202 3.97308 2.01492 3.98159 2.00805 3.99034C2.00199 3.99812 1.99608 4.00597 1.99043 4.01395C1.9844 4.02244 1.97864 4.03106 1.97304 4.03986C1.9675 4.04857 1.96213 4.05733 1.95701 4.06624C1.95213 4.07486 1.94752 4.08363 1.94301 4.0925C1.93828 4.10185 1.93367 4.11121 1.9294 4.12075C1.92539 4.12977 1.92169 4.13894 1.9181 4.14821C1.91433 4.1579 1.91067 4.16759 1.90739 4.17743C1.90426 4.18685 1.90147 4.19639 1.89876 4.20603C1.89594 4.2161 1.89327 4.22619 1.89094 4.23637C1.88881 4.24589 1.88694 4.2555 1.88522 4.26519C1.88331 4.27593 1.88164 4.28667 1.8803 4.29746C1.87915 4.30675 1.87823 4.31609 1.87752 4.32548C1.8766 4.33702 1.87602 4.34856 1.87576 4.3601C1.87565 4.3651 1.875 4.36996 1.875 4.375V15C1.87538 15.3314 2.0072 15.6491 2.24154 15.8835C2.47587 16.1178 2.7936 16.2496 3.125 16.25H16.875C17.2064 16.2496 17.5241 16.1178 17.7585 15.8835C17.9928 15.6491 18.1246 15.3314 18.125 15V4.375C18.125 4.36996 18.1244 4.3651 18.1242 4.3601ZM3.125 5.7958L7.71141 10L3.125 14.2042V5.7958ZM4.10683 15L8.6364 10.8479L9.57764 11.7107C9.69292 11.8164 9.84362 11.875 10 11.875C10.1564 11.875 10.3071 11.8164 10.4224 11.7107L11.3636 10.8479L15.8932 15H4.10683ZM12.2886 10L16.8751 5.79569L16.8757 14.2048L12.2886 10Z" fill="white" />
                    </svg>
                    <p className="text-white font-Inter text-[1rem] max-sm:text-[0.875rem] not-italic font-normal leading-[1.5rem] max-sm:leading-[1.3125rem] max-sm:tracking-[-0.00875rem] flex-grow flex-shrink-0 basis-0">
                      vietnam@icanfield.com
                    </p>
                  </li>
                  <li className="flex items-start gap-[1rem] self-stretch">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M17.3415 12.3768L13.6823 10.8086C13.4913 10.7264 13.2827 10.6933 13.0756 10.7123C12.8684 10.7313 12.6694 10.8019 12.4965 10.9176L10.54 12.2217C9.34426 11.6402 8.37646 10.6766 7.78961 9.48347L7.78976 9.48332L9.08935 7.49754C9.20248 7.32515 9.27111 7.1274 9.28911 6.922C9.30711 6.71659 9.27392 6.50992 9.1925 6.32048L7.62283 2.65814C7.51598 2.40954 7.33148 2.20224 7.09696 2.06728C6.86243 1.93231 6.5905 1.87695 6.32187 1.90947C5.2663 2.04519 4.29623 2.56056 3.5929 3.35929C2.88957 4.15803 2.50108 5.18549 2.5 6.24976C2.5 12.4531 7.54669 17.4998 13.75 17.4998C14.8143 17.4987 15.8417 17.1102 16.6405 16.4068C17.4392 15.7035 17.9546 14.7334 18.0903 13.6778C18.1227 13.4092 18.0673 13.1373 17.9323 12.9028C17.7974 12.6683 17.5901 12.4837 17.3415 12.3768Z" fill="white" />
                      <path d="M12.2944 3.72892C13.2479 3.98531 14.1173 4.48776 14.8155 5.18594C15.5137 5.88413 16.0161 6.75353 16.2725 7.70704C16.3156 7.86686 16.4203 8.00307 16.5637 8.08577C16.7071 8.16848 16.8774 8.19093 17.0373 8.14819C17.1972 8.10545 17.3336 8.00102 17.4167 7.85782C17.4997 7.71461 17.5225 7.54432 17.4801 7.38432C17.1667 6.21872 16.5524 5.15594 15.699 4.30246C14.8455 3.44898 13.7827 2.83476 12.6171 2.52134C12.4571 2.47894 12.2868 2.50175 12.1436 2.58476C12.0004 2.66777 11.896 2.80419 11.8532 2.96411C11.8105 3.12402 11.8329 3.29436 11.9156 3.43774C11.9983 3.58112 12.1346 3.68584 12.2944 3.72892L12.2944 3.72892Z" fill="white" />
                      <path d="M11.6459 6.14396C12.1756 6.2864 12.6586 6.56553 13.0464 6.95338C13.4343 7.34123 13.7134 7.8242 13.8559 8.35389C13.8989 8.51371 14.0037 8.64992 14.147 8.73262C14.2904 8.81533 14.4608 8.83778 14.6207 8.79504C14.7806 8.7523 14.917 8.64787 15 8.50467C15.083 8.36146 15.1058 8.19117 15.0634 8.03117C14.864 7.28938 14.4731 6.61302 13.93 6.06987C13.3868 5.52671 12.7104 5.13583 11.9687 4.93638C11.8087 4.89398 11.6384 4.91679 11.4952 4.9998C11.352 5.0828 11.2475 5.21923 11.2048 5.37915C11.162 5.53906 11.1845 5.7094 11.2672 5.85278C11.3499 5.99616 11.4861 6.10088 11.6459 6.14396L11.6459 6.14396Z" fill="white" />
                    </svg>
                    <p className="text-white font-Inter text-[1rem] max-sm:text-[0.875rem] not-italic font-normal leading-[1.5rem] max-sm:leading-[1.3125rem] max-sm:tracking-[-0.00875rem] flex-grow flex-shrink-0 basis-0">
                      0766 50 66 55
                    </p>
                  </li>
                </ul>
              </div>

              <div className="max-sm:hidden max-sm:w-full flex flex-col items-start gap-[2rem] max-sm:gap-[1.5rem]">
                <p className="text-white font-Inter text-[1rem] not-italic font-medium leading-[1.5rem ]">
                  LIÊN KẾT NHANH
                </p>
                <ul className="flex flex-col items-start gap-[1rem] self-stretch">
                  <li className="text-white font-Inter text-[1rem] not-italic font-medium leading-[1.5rem] flex-grow flex-shrink-0 basis-0">
                    Về Chúng Tôi
                  </li>
                  <li className="text-white font-Inter text-[1rem] not-italic font-medium leading-[1.5rem] flex-grow flex-shrink-0 basis-0">
                    Định Cư Canada
                  </li>
                  <li className="text-white font-Inter text-[1rem] not-italic font-medium leading-[1.5rem] flex-grow flex-shrink-0 basis-0">
                    Định Cư Mỹ
                  </li>
                  <li className="text-white font-Inter text-[1rem] not-italic font-medium leading-[1.5rem] flex-grow flex-shrink-0 basis-0">
                    Định Cư Châu Âu
                  </li>
                  <li className="text-white font-Inter text-[1rem] not-italic font-medium leading-[1.5rem] flex-grow flex-shrink-0 basis-0">
                    Định cư nhập tịch Caribe
                  </li>
                </ul>
              </div>

              {/* mb */}
              <div className="max-sm:w-full hidden max-sm:flex flex-col items-start gap-[2rem] max-sm:gap-[1.5rem]">
                <p className="text-white font-Inter text-[1rem] not-italic font-medium leading-[1.5rem ]">
                  MENU
                </p>
                <ul className="grid grid-cols-2 gap-y-[0.75rem] self-stretch">
                  <li className="text-white font-Inter text-[0.875rem] not-italic font-normal leading-[1.3125rem ] flex-grow flex-shrink-0 basis-0">
                    Về Chúng Tôi
                  </li>
                  <li className="text-white font-Inter text-[0.875rem] not-italic font-normal leading-[1.3125rem ] flex-grow flex-shrink-0 basis-0">
                    Tư vấn định cư
                  </li>
                  <li className="text-white font-Inter text-[0.875rem] not-italic font-normal leading-[1.3125rem ] flex-grow flex-shrink-0 basis-0">
                    Tư vấn đầu tư
                  </li>
                  <li className="text-white font-Inter text-[0.875rem] not-italic font-normal leading-[1.3125rem ] flex-grow flex-shrink-0 basis-0">
                    Tư vấn  du học
                  </li>
                </ul>
              </div>

              <div className="max-sm:w-full flex w-[21.3125rem] flex-col items-start gap-[2rem] max-sm:gap-[1.5rem] shrink-0">
                <p className="self-stretch text-white font-Inter text-[1.25rem] max-sm:text-[1rem] not-italic font-medium max-sm:font-semibold leading-[1.66625rem] max-sm:leading-[1.5rem] max-sm:tracking-[-0.01rem]">
                  Kết nối ngay hôm nay, đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn!
                </p>
                <div className="flex flex-col items-start gap-[1rem] self-stretch">
                  <p className="self-stretch text-white font-Inter text-[0.875rem] not-italic font-semibold leading-[1.3125rem]">
                    Đăng ký để nhận tư vấn
                  </p>
                  <div className="flex py-[0.75rem] pr-[0.5rem] pl-[1rem] items-center jus gap-[0.5rem] self-stretch rounded-[0.5rem] bg-white">
                    <input className="w-full focus:outline-0 placeholder:text-[#A1A1A1] placeholder:font-Inter placeholder:text-[1rem] placeholder:font-normal placeholder:leading-[1.5rem] placeholder:tracking-[-0.02rem]" placeholder="Email của bạn" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#A1A1A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-sm:flex-col-reverse max-sm:gap-[1rem] p-[1.5rem] max-sm:p-[1.5rem] pl-[2rem] max-sm:pt-[1rem] justify-between items-center rounded-[1rem] bg-[rgba(112,115,124,0.08)] backdrop-blur-[25px]">
            <p className="text-white font-Inter text-[0.875rem] not-italic font-bold leading-[1.3125rem]">
              © 2024 iCanfield. Designed by OKHUB
            </p>
            <div className="flex items-center gap-[0.75rem]">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.8368 5.33431H13.5035C12.8898 5.33431 12.3924 5.83178 12.3924 6.44542V9.77875H16.8368C16.9631 9.77595 17.083 9.83475 17.1581 9.93642C17.2332 10.0381 17.2544 10.1699 17.2146 10.2899L16.3924 12.7343C16.3166 12.9586 16.1069 13.1103 15.8701 13.1121H12.3924V21.4454C12.3924 21.7522 12.1436 22.001 11.8368 22.001H9.05903C8.75221 22.001 8.50347 21.7522 8.50347 21.4454V13.1121H6.83681C6.52998 13.1121 6.28125 12.8633 6.28125 12.5565V10.3343C6.28125 10.0275 6.52998 9.77875 6.83681 9.77875H8.50347V6.44542C8.50347 3.99082 10.4934 2.00098 12.9479 2.00098H16.8368C17.1436 2.00098 17.3924 2.24971 17.3924 2.55653V4.77875C17.3924 5.08558 17.1436 5.33431 16.8368 5.33431Z" fill="white" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4444 2H7.55556C4.48731 2 2 4.48731 2 7.55556V16.4444C2 19.5127 4.48731 22 7.55556 22H16.4444C19.5127 22 22 19.5127 22 16.4444V7.55556C22 4.48731 19.5127 2 16.4444 2ZM20.0556 16.4444C20.0494 18.4362 18.4362 20.0494 16.4444 20.0556H7.55556C5.56372 20.0494 3.95054 18.4362 3.94444 16.4444V7.55556C3.95054 5.56372 5.56372 3.95054 7.55556 3.94444H16.4444C18.4362 3.95054 20.0494 5.56372 20.0556 7.55556V16.4444ZM17.2778 7.83333C17.8914 7.83333 18.3889 7.33587 18.3889 6.72222C18.3889 6.10858 17.8914 5.61111 17.2778 5.61111C16.6641 5.61111 16.1667 6.10858 16.1667 6.72222C16.1667 7.33587 16.6641 7.83333 17.2778 7.83333ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17.003 10.673 16.4771 9.39952 15.5388 8.4612C14.6004 7.52288 13.327 6.99704 12 7ZM8.94444 12C8.94444 13.6876 10.3124 15.0556 12 15.0556C13.6876 15.0556 15.0556 13.6876 15.0556 12C15.0556 10.3124 13.6876 8.94444 12 8.94444C10.3124 8.94444 8.94444 10.3124 8.94444 12Z" fill="white" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22222 2H19.7778C21.0051 2 22 2.99492 22 4.22222V19.7778C22 21.0051 21.0051 22 19.7778 22H4.22222C2.99492 22 2 21.0051 2 19.7778V4.22222C2 2.99492 2.99492 2 4.22222 2ZM7.55556 18.6667C7.86238 18.6667 8.11111 18.4179 8.11111 18.1111V10.3333C8.11111 10.0266 7.86238 9.77778 7.55556 9.77778H5.88889C5.58207 9.77778 5.33333 10.0266 5.33333 10.3333V18.1111C5.33333 18.4179 5.58207 18.6667 5.88889 18.6667H7.55556ZM6.72222 8.66667C5.80174 8.66667 5.05556 7.92048 5.05556 7C5.05556 6.07952 5.80174 5.33333 6.72222 5.33333C7.6427 5.33333 8.38889 6.07952 8.38889 7C8.38889 7.92048 7.6427 8.66667 6.72222 8.66667ZM18.1111 18.6667C18.4179 18.6667 18.6667 18.4179 18.6667 18.1111V13C18.7028 11.2342 17.3973 9.72724 15.6444 9.51111C14.4189 9.39917 13.2314 9.97156 12.5556 11V10.3333C12.5556 10.0266 12.3068 9.77778 12 9.77778H10.3333C10.0266 9.77778 9.77778 10.0266 9.77778 10.3333V18.1111C9.77778 18.4179 10.0266 18.6667 10.3333 18.6667H12C12.3068 18.6667 12.5556 18.4179 12.5556 18.1111V13.9444C12.5556 13.024 13.3018 12.2778 14.2222 12.2778C15.1427 12.2778 15.8889 13.024 15.8889 13.9444V18.1111C15.8889 18.4179 16.1377 18.6667 16.4444 18.6667H18.1111Z" fill="white" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.14062 0C1.93149 0 0.140625 1.79086 0.140625 4V14C0.140625 16.2091 1.93148 18 4.14062 18H17.8605C20.0696 18 21.8605 16.2091 21.8605 14V4C21.8605 1.79086 20.0696 0 17.8605 0H4.14062ZM14.2117 8.10557L9.4478 5.72361C8.7829 5.39116 8.00059 5.87465 8.00059 6.61803V11.382C8.00059 12.1253 8.7829 12.6088 9.4478 12.2764L14.2117 9.89443C14.9488 9.5259 14.9488 8.4741 14.2117 8.10557Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer