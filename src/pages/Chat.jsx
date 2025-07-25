import React from "react";
import { NavbarE } from "./Event";
import { Search } from "lucide-react";

const Group = () => {
  return (
    <>
      <div className="flex justify-between gap-5 items-center mt-4 cursor-pointer border-b-[2px] pb-4 ">
        <div className="flex gap-3">
          <div className="w-[56px] h-[56px] bg-[#4D44B5] rounded-full"></div>
          <div className="flex flex-col gap-1">
            <p className="text-[#303972] font-semibold">Class History VII-A</p>
            <p className="text-[#A098AE] text-sm">
              Lorem ipsum dolor sit amet...
            </p>
          </div>
        </div>
        <div className="flex flex-col  items-end gap-2">
          <p className="text-[#FB7D5B] text-sm  ">12:45 PM</p>
          <p className="w-[24px] h-[24px] bg-[#FB7D5B] rounded-full text-white text-center">
            2
          </p>
        </div>
      </div>
    </>
  );
};
const Chat = ({ setSidebarOpen }) => {
  return (
    <>
      <div className="px-14">
        <NavbarE comp="Chat" setSidebarOpen={setSidebarOpen} />

        <div className="bg-white px-8 rounded-2xl py-4 flex md:flex-row max-sm:gap-10 max-sm:flex-col ">
          <div className="flex flex-col gap-5 border-r-[2px] px-5 w-[630px]">
            <h1 className="font-bold text-lg">Messages</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent max-sm:w-[40px] w-64"
              />
            </div>
            {/* group */}
            <div>
              <p className="text-[#A098AE] font-semibold">Groups</p>
              <Group />

              <div className="flex justify-between gap-5 items-center mt-4 cursor-pointer border-b-[2px] pb-4 ">
                <div className="flex gap-3">
                  <div className="w-[56px] h-[56px] bg-[#FB7D5B] rounded-full"></div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#303972] font-semibold">Class VII-A</p>
                    <p className="text-[#A098AE] text-sm">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  items-end gap-2">
                  <p className="text-[#FB7D5B] text-sm  ">12:45 PM</p>
                  <p className="w-[24px] h-[24px] bg-[#FB7D5B] rounded-full text-white text-center">
                    2
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-5 items-center mt-4 cursor-pointer border-b-[2px] pb-4 ">
                <div className="flex gap-3">
                  <div className="w-[56px] h-[56px] bg-[#FCC43E] rounded-full"></div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#303972] font-semibold">
                      All Student VII
                    </p>
                    <p className="text-[#A098AE] text-sm">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  items-end gap-2">
                  <p className="text-[#FB7D5B] text-sm  ">12:45 PM</p>
                </div>
              </div>
              <p className="text-[#A098AE] font-semibold mt-4">Chats</p>

              <div className="flex justify-between gap-5 items-center mt-4 cursor-pointer border-b-[2px] pb-4 ">
                <div className="flex gap-3">
                  <div className="w-[56px] h-[56px] bg-[#C1BBEB] rounded-full"></div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#303972] font-semibold">
                      Samantha William
                    </p>
                    <p className="text-[#A098AE] text-sm">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  items-end gap-2">
                  <p className="text-[#FB7D5B] text-sm  ">12:45 PM</p>
                  <p className="w-[24px] h-[24px] bg-[#FB7D5B] rounded-full text-white text-center">
                    2
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-5 items-center mt-4 cursor-pointer border-b-[2px] pb-4 ">
                <div className="flex gap-3">
                  <div className="w-[56px] h-[56px] bg-[#C1BBEB] rounded-full"></div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#303972] font-semibold">Tony Soap</p>
                    <p className="text-[#A098AE] text-sm">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  items-end gap-2">
                  <p className="text-[#FB7D5B] text-sm  ">12:45 PM</p>
                  <p className="w-[24px] h-[24px] bg-[#FB7D5B] rounded-full text-white text-center">
                    2
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-5 items-center mt-4 cursor-pointer border-b-[2px] pb-4 ">
                <div className="flex gap-3">
                  <div className="w-[56px] h-[56px] bg-[#C1BBEB] rounded-full"></div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#303972] font-semibold">Karen Hope</p>
                    <p className="text-[#A098AE] text-sm">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col  items-end gap-2">
                  <p className="text-[#FB7D5B] text-sm  ">12:45 PM</p>
                </div>
              </div>
              <div className="bg-[#4D44B5]/10 rounded-2xl py-2 mt-4 flex items-center justify-center">
                <button>View More</button>
              </div>
            </div>
          </div>
          <div className="w-full px-4 ">
            <div className="flex justify-between items-center   border-b-[2px] pb-4">
              <div className="flex items-center gap-4">
                <div className="w-[56px] h-[56px] bg-[#C1BBEB] rounded-full"></div>
                <div>
                  <p className="font-bold">Samantha WIlliam</p>
                  <div className="flex items-center gap-1">
                    <p className="w-[16px] h-[16px] bg-[#4CBC9A] rounded-full text-white text-center"></p>
                    <p className="text-[#A098AE]"> Online</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-5  items-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9997 8H3.99967C2.52691 8 1.33301 9.19391 1.33301 10.6667V21.3333C1.33301 22.8061 2.52691 24 3.99967 24H19.9997C21.4724 24 22.6663 22.8061 22.6663 21.3333V10.6667C22.6663 9.19391 21.4724 8 19.9997 8Z"
                    stroke="#A098AE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.666 9.33325V22.6666L22.666 15.9999L30.666 9.33325Z"
                    stroke="#A098AE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0012 9.35986C11.6543 9.35986 11.3109 9.42818 10.9904 9.56091C10.67 9.69365 10.3788 9.88819 10.1335 10.1335C9.88829 10.3787 9.69374 10.6699 9.56101 10.9903C9.42828 11.3108 9.35996 11.6542 9.35996 12.0011C9.35996 12.3479 9.42828 12.6914 9.56101 13.0118C9.69374 13.3323 9.88829 13.6234 10.1335 13.8687C10.3788 14.1139 10.67 14.3085 10.9904 14.4412C11.3109 14.5739 11.6543 14.6423 12.0012 14.6423C12.7017 14.6421 13.3734 14.3637 13.8686 13.8682C14.3638 13.3728 14.6419 12.701 14.6418 12.0005C14.6416 11.3 14.3632 10.6282 13.8677 10.133C13.3723 9.63782 12.7004 9.3597 12 9.35986H12.0012ZM3.60116 9.35986C3.25431 9.35986 2.91086 9.42818 2.59042 9.56091C2.26997 9.69365 1.97881 9.88819 1.73355 10.1335C1.48829 10.3787 1.29374 10.6699 1.16101 10.9903C1.02828 11.3108 0.959961 11.6542 0.959961 12.0011C0.959961 12.3479 1.02828 12.6914 1.16101 13.0118C1.29374 13.3323 1.48829 13.6234 1.73355 13.8687C1.97881 14.1139 2.26997 14.3085 2.59042 14.4412C2.91086 14.5739 3.25431 14.6423 3.60116 14.6423C4.30165 14.6421 4.97339 14.3637 5.4686 13.8682C5.9638 13.3728 6.24192 12.701 6.24176 12.0005C6.2416 11.3 5.96318 10.6282 5.46775 10.133C4.97231 9.63782 4.30045 9.3597 3.59996 9.35986H3.60116ZM20.4012 9.35986C20.0543 9.35986 19.7109 9.42818 19.3904 9.56091C19.07 9.69365 18.7788 9.88819 18.5336 10.1335C18.2883 10.3787 18.0937 10.6699 17.961 10.9903C17.8283 11.3108 17.76 11.6542 17.76 12.0011C17.76 12.3479 17.8283 12.6914 17.961 13.0118C18.0937 13.3323 18.2883 13.6234 18.5336 13.8687C18.7788 14.1139 19.07 14.3085 19.3904 14.4412C19.7109 14.5739 20.0543 14.6423 20.4012 14.6423C21.1017 14.6421 21.7734 14.3637 22.2686 13.8682C22.7638 13.3728 23.0419 12.701 23.0418 12.0005C23.0416 11.3 22.7632 10.6282 22.2677 10.133C21.7723 9.63782 21.1005 9.3597 20.4 9.35986H20.4012Z"
                    fill="#A098AE"
                  />
                </svg>
              </div>
            </div>

            {/* messages */}
            <div className="relative">
              <div className="w-[140px] h-[40px] bg-[#F5F5F5] text-black flex justify-center items-center rounded-2xl absolute top-3">
                <p>Hello Nabila!</p>
              </div>
              <div className="w-fit px-4 h-[40px] bg-[#F5F5F5] text-black flex justify-center items-center rounded-2xl absolute top-16">
                <p>Can i see your history lesson homework? !</p>
              </div>

              <div className="text-[#A098AE] text-sm absolute top-[121px] left-[12px]">
                12:45 PM
              </div>
              <div className="w-[140px] h-[40px] bg-[#4D44B5] text-white flex justify-center items-center rounded-2xl absolute top-[190px] right-1">
                <p>Hello Nabila!</p>
              </div>
              <div className="w-fit px-4 h-[40px] bg-[#4D44B5] text-white flex justify-center items-center rounded-2xl absolute top-[246px] right-1">
                <p>Can i see your history lesson homework? !</p>
              </div>

              <div className="text-[#A098AE] text-sm absolute top-[311px] right-[12px]">
                12:45 PM
              </div>

              <div className="border-t-[2px] bottom-2 top-[550px] absolute  py-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent  w-[500px]"
                  />
                  <div className="absolute right-[120px] bottom-2.5">
                    <svg
                      width="26"
                      height="29"
                      viewBox="0 0 26 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.24425 28.2002C5.95693 28.1974 4.69927 27.8294 3.62981 27.1425C2.56035 26.4555 1.72696 25.4804 1.23471 24.3401C0.74246 23.1997 0.613381 21.9452 0.863744 20.7346C1.11411 19.5241 1.73271 18.4117 2.64156 17.5377L13.6985 6.92515C14.0623 6.57633 14.4943 6.29963 14.9697 6.11085C15.4451 5.92206 15.9546 5.8249 16.4692 5.8249C16.9838 5.8249 17.4933 5.92206 17.9687 6.11085C18.4441 6.29963 18.8761 6.57633 19.2399 6.92515C19.6038 7.27398 19.8924 7.68809 20.0894 8.14385C20.2863 8.59961 20.3876 9.08809 20.3876 9.5814C20.3876 10.0747 20.2863 10.5632 20.0894 11.019C19.8924 11.4747 19.6038 11.8888 19.2399 12.2377L8.17001 22.8377C8.05312 22.9685 7.90928 23.0748 7.74751 23.1498C7.58575 23.2248 7.40955 23.267 7.22998 23.2737C7.05041 23.2803 6.87135 23.2513 6.70403 23.1885C6.53671 23.1256 6.38474 23.0303 6.25767 22.9085C6.1306 22.7866 6.03117 22.641 5.96562 22.4806C5.90007 22.3202 5.86981 22.1485 5.87675 21.9763C5.88368 21.8042 5.92766 21.6353 6.00592 21.4802C6.08419 21.3251 6.19505 21.1872 6.33154 21.0752L17.3884 10.4627C17.602 10.2235 17.7137 9.91593 17.701 9.60134C17.6883 9.28674 17.5523 8.98832 17.3201 8.7657C17.0878 8.54308 16.7766 8.41267 16.4484 8.40051C16.1203 8.38836 15.7994 8.49537 15.55 8.70015L4.48003 19.3002C3.74518 20.0046 3.33235 20.9601 3.33235 21.9564C3.33235 22.9527 3.74518 23.9082 4.48003 24.6127C5.21488 25.3171 6.21154 25.7129 7.25077 25.7129C8.29 25.7129 9.28667 25.3171 10.0215 24.6127L21.0784 14.0002C22.266 12.8214 22.9231 11.2426 22.9082 9.6039C22.8934 7.96517 22.2077 6.39759 20.999 5.23879C19.7902 4.07999 18.1551 3.42268 16.4457 3.40844C14.7364 3.3942 13.0896 4.02417 11.86 5.16265L5.40578 11.4127C5.16149 11.6455 4.83102 11.7761 4.48655 11.7761C4.14208 11.7761 3.81161 11.6455 3.56731 11.4127C3.4451 11.2965 3.3481 11.1582 3.2819 11.0059C3.21571 10.8536 3.18163 10.6902 3.18163 10.5252C3.18163 10.3601 3.21571 10.1968 3.2819 10.0444C3.3481 9.89211 3.4451 9.75386 3.56731 9.63765L10.0215 3.38765C11.7333 1.74663 14.0549 0.824707 16.4757 0.824707C18.8965 0.824707 21.2182 1.74663 22.9299 3.38765C24.6417 5.02868 25.6033 7.25439 25.6033 9.57515C25.6033 11.8959 24.6417 14.1216 22.9299 15.7627L11.86 26.3752C11.2534 26.9552 10.5336 27.4149 9.74158 27.7281C8.94958 28.0412 8.10097 28.2016 7.24425 28.2002Z"
                        fill="#A098AE"
                      />
                    </svg>
                  </div>

                  <div className="absolute md:right-[-20px]  right-[-35px] cursor-pointer bottom-0">
                    <svg
                      width="137"
                      height="50"
                      viewBox="0 0 137 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.628906"
                        width="135.603"
                        height="60"
                        rx="30"
                        fill="#4D44B5"
                      />
                      <path
                        d="M30.5107 36.626C29.6347 36.626 28.8427 36.476 28.1347 36.176C27.4387 35.876 26.8867 35.444 26.4787 34.88C26.0707 34.316 25.8607 33.65 25.8487 32.882H28.5487C28.5847 33.398 28.7647 33.806 29.0887 34.106C29.4247 34.406 29.8807 34.556 30.4567 34.556C31.0447 34.556 31.5067 34.418 31.8427 34.142C32.1787 33.854 32.3467 33.482 32.3467 33.026C32.3467 32.654 32.2327 32.348 32.0047 32.108C31.7767 31.868 31.4887 31.682 31.1407 31.55C30.8047 31.406 30.3367 31.25 29.7367 31.082C28.9207 30.842 28.2547 30.608 27.7387 30.38C27.2347 30.14 26.7967 29.786 26.4247 29.318C26.0647 28.838 25.8847 28.202 25.8847 27.41C25.8847 26.666 26.0707 26.018 26.4427 25.466C26.8147 24.914 27.3367 24.494 28.0087 24.206C28.6807 23.906 29.4487 23.756 30.3127 23.756C31.6087 23.756 32.6587 24.074 33.4627 24.71C34.2787 25.334 34.7287 26.21 34.8127 27.338H32.0407C32.0167 26.906 31.8307 26.552 31.4827 26.276C31.1467 25.988 30.6967 25.844 30.1327 25.844C29.6407 25.844 29.2447 25.97 28.9447 26.222C28.6567 26.474 28.5127 26.84 28.5127 27.32C28.5127 27.656 28.6207 27.938 28.8367 28.166C29.0647 28.382 29.3407 28.562 29.6647 28.706C30.0007 28.838 30.4687 28.994 31.0687 29.174C31.8847 29.414 32.5507 29.654 33.0667 29.894C33.5827 30.134 34.0267 30.494 34.3987 30.974C34.7707 31.454 34.9567 32.084 34.9567 32.864C34.9567 33.536 34.7827 34.16 34.4347 34.736C34.0867 35.312 33.5767 35.774 32.9047 36.122C32.2327 36.458 31.4347 36.626 30.5107 36.626ZM46.4114 31.298C46.4114 31.658 46.3874 31.982 46.3394 32.27H39.0494C39.1094 32.99 39.3614 33.554 39.8054 33.962C40.2494 34.37 40.7954 34.574 41.4434 34.574C42.3794 34.574 43.0454 34.172 43.4414 33.368H46.1594C45.8714 34.328 45.3194 35.12 44.5034 35.744C43.6874 36.356 42.6854 36.662 41.4974 36.662C40.5374 36.662 39.6734 36.452 38.9054 36.032C38.1494 35.6 37.5554 34.994 37.1234 34.214C36.7034 33.434 36.4934 32.534 36.4934 31.514C36.4934 30.482 36.7034 29.576 37.1234 28.796C37.5434 28.016 38.1314 27.416 38.8874 26.996C39.6434 26.576 40.5134 26.366 41.4974 26.366C42.4454 26.366 43.2914 26.57 44.0354 26.978C44.7914 27.386 45.3734 27.968 45.7814 28.724C46.2014 29.468 46.4114 30.326 46.4114 31.298ZM43.8014 30.578C43.7894 29.93 43.5554 29.414 43.0994 29.03C42.6434 28.634 42.0854 28.436 41.4254 28.436C40.8014 28.436 40.2734 28.628 39.8414 29.012C39.4214 29.384 39.1634 29.906 39.0674 30.578H43.8014ZM53.7768 26.384C54.9648 26.384 55.9248 26.762 56.6568 27.518C57.3888 28.262 57.7548 29.306 57.7548 30.65V36.5H55.2348V30.992C55.2348 30.2 55.0368 29.594 54.6408 29.174C54.2448 28.742 53.7048 28.526 53.0208 28.526C52.3248 28.526 51.7728 28.742 51.3648 29.174C50.9688 29.594 50.7708 30.2 50.7708 30.992V36.5H48.2508V26.528H50.7708V27.77C51.1068 27.338 51.5328 27.002 52.0488 26.762C52.5768 26.51 53.1528 26.384 53.7768 26.384ZM59.5032 31.478C59.5032 30.47 59.7012 29.576 60.0972 28.796C60.5052 28.016 61.0572 27.416 61.7532 26.996C62.4492 26.576 63.2232 26.366 64.0752 26.366C64.7232 26.366 65.3412 26.51 65.9292 26.798C66.5172 27.074 66.9852 27.446 67.3332 27.914V23.18H69.8892V36.5H67.3332V35.024C67.0212 35.516 66.5832 35.912 66.0192 36.212C65.4552 36.512 64.8012 36.662 64.0572 36.662C63.2172 36.662 62.4492 36.446 61.7532 36.014C61.0572 35.582 60.5052 34.976 60.0972 34.196C59.7012 33.404 59.5032 32.498 59.5032 31.478ZM67.3512 31.514C67.3512 30.902 67.2312 30.38 66.9912 29.948C66.7512 29.504 66.4272 29.168 66.0192 28.94C65.6112 28.7 65.1732 28.58 64.7052 28.58C64.2372 28.58 63.8052 28.694 63.4092 28.922C63.0132 29.15 62.6892 29.486 62.4372 29.93C62.1972 30.362 62.0772 30.878 62.0772 31.478C62.0772 32.078 62.1972 32.606 62.4372 33.062C62.6892 33.506 63.0132 33.848 63.4092 34.088C63.8172 34.328 64.2492 34.448 64.7052 34.448C65.1732 34.448 65.6112 34.334 66.0192 34.106C66.4272 33.866 66.7512 33.53 66.9912 33.098C67.2312 32.654 67.3512 32.126 67.3512 31.514Z"
                        fill="white"
                      />
                      <path
                        d="M83.5244 19.3438L83.9614 21.2188L85.9004 29.9998L83.9604 38.7808L83.5234 40.6558L85.3044 39.9378L107.304 30.9378L109.586 29.9998L107.305 29.0618L85.3054 20.0617L83.5244 19.3438ZM86.3054 22.6558L101.836 28.9998H87.7114L86.3054 22.6558ZM87.7114 30.9998H101.836L86.3054 37.3438L87.7114 30.9998Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
