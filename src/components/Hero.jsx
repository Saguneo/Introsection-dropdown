export default function Hero() {
  return (
    <div className="md:w-[1145px] md:mx-auto md:px-3">
      <div className="grid grid-flow-row md:grid-cols-2">
        <div className="md:order-2">
          <img
            className="md:hidden"
            src="/images/image-hero-mobile.png"
            alt=""
          />
          <img
            className="hidden md:block md:w-[480px] md:ml-auto"
            src="/images/image-hero-desktop.png"
            alt=""
          />
        </div>
        <div>
          <div className="">
            <h1 className=" text-almost-black text-center text-4xl mt-[47.75px] font-bold md:text-start md:text-7xl md:pt-16">
              <span className="md:block">Make </span>remote work
            </h1>
            <p className="text-center px-4 mt-[16px] md:mt-[48px] md:text-start md:px-0 md:text-lg md:w-[445px]">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <div className="text-center mt-[24px] mb-[48px] md:text-start md:text-lg md:mt-[51px]">
              <button className="bg-almost-black text-white rounded-xl">
                <a href="">Learn More</a>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between px-[16px] shrink-0 md:px-0 md:pr-20 md:mt-[116px]">
            <img
              className="w-[89px] md:w-[113px]"
              src="/images/client-databiz.svg"
              alt=""
            />
            <img
              className="w-[52px] md:w-[73px]"
              src="/images/client-audiophile.svg"
              alt=""
            />
            <img
              className="w-[64px] md:w-[89px]"
              src="/images/client-meet.svg"
              alt=""
            />
            <img
              className="w-[59px] md:w-[82px]"
              src="/images/client-maker.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// export default function Hero() {
//   return (
//     <div className="flex justify-center md:max-w-[1000px] md:min-w-[900px] mx-auto">
//       <div className="grid grid-flow-row text-center md:grid-cols-2">
//         <div className="md:order-2">
//           {/* Mobile image is loaded by default */}
//           <img
//             className="w-full md:hidden"
//             src="/images/image-hero-mobile.png"
//             alt=""
//           />
//           {/* Desktop image is loaded only on screens larger than medium breakpoint */}
//           <img
//             className="hidden md:block"
//             src="/images/image-hero-desktop.png"
//             alt=""
//           />
//         </div>
//         <div className="flex flex-col px-3 md:text-start md:justify-end ">
//           <div className="md:pb-10 ">
//             <h1 className="text-4xl font-bold mb-5 md:text-6xl">
//               Make remote work
//             </h1>
//             <p className="md:text-lg md:pb-5 md:pr-16">
//               Get your team in sync, no matter your location. Streamline
//               processes, create team rituals, and watch productivity soar.
//             </p>
//             <div className="py-10 md:py-16">
//               <button className="bg-black text-white rounded-xl py-2 md:text-xl md:py-3">
//                 <a href="">Learn More</a>
//               </button>
//             </div>
//           </div>
//           <div className="flex items-center justify-between flex-wrap gap-5 pt-5 md:flex-nowrap">
//             <img className="w-[80px]" src="/images/client-databiz.svg" alt="" />
//             <img className="" src="/images/client-audiophile.svg" alt="" />
//             <img className="" src="/images/client-meet.svg" alt="" />
//             <img className="" src="/images/client-maker.svg" alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
