import React from "react";

const AboutPage = () => {
  return (
    <div className="py-10 bg-gradient-to-t from-gray-500">
      <p className=" font-bold text-blue-900 text-center">About Us</p>
      <h1 className="text-2xl text-emerald-950 font-bold text-center">
        WHY CHOOSE US?
      </h1>

      <div className="flex sm:flex-row flex-col justify-between items-center  space-x-3 sm:px-25 px-6 sm:text-left text-center ">
        <div className="flex-1  flex justify-center min-w-50">
          <img src="home.png" alt="no" />
        </div>
        <div className="flex-2 text-xl font-extrabold font-[poppins]  text-white px-2">
          At Bitza, we believe online shopping should be more than just buying
          products; it should be an experience. Our mission is to bring you
          quality, variety, and convenience all in one place. Whether you're
          searching for the latest trends, everyday essentials, or exclusive
          deals, Bitza is here to make your journey smooth, secure, and
          enjoyable.
          <div className="flex text-sm   space-x-3 pt-5">
            <div className="flex space-x-2  items-center justify-center px-2 bg-white rounded-full transition-all cursor-pointer hover:outline-2 hover:bg-transparent  outline-white">
              <div className="text-emerald-800 font-extrabold ps-2">
                24/7 Service
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-blue-800"
                >
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M12 2c.937 0 1.85.108 2.726.311a1 1 0 1 1-.452 1.948a10 10 0 0 0-1.499-.23l-.42-.023l.34.02a8.95 8.95 0 0 1 4.074 1.34l.273.178l.606-.606a1 1 0 0 1 1.498 1.32l-.083.094l-.495.495a9 9 0 1 1-7.097-2.831l.199-.01l-.06.001q-.776.031-1.516.174l-.368.078a1 1 0 0 1-.452-1.948C10.15 2.108 11.064 2 12 2m0 6a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <div className="flex space-x-2  items-center justify-center px-2 bg-white rounded-full transition-all cursor-pointer  hover:outline-2 hover:bg-transparent">
              <div className="text-emerald-800 font-extrabold">
                Free Delivery
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-black"
                >
                  <path
                    fill="currentColor"
                    d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35zM4 14v-1c0-1.1.9-2 2-2h2v3zm3 3c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1"
                  />
                  <path
                    fill="currentColor"
                    d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"
                  />
                </svg>
              </div>
            </div>

            <div className="flex space-x-2  items-center justify-center px-2 sm:p-2 bg-white rounded-full transition-all cursor-pointer  hover:outline-2 hover:bg-transparent">
              <div className="text-emerald-800 font-extrabold">
                Easy Payment
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="text-red-700"
              >
                <path
                  fill="currentColor"
                  d="M11.25 7.847c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm1.5 5.001v3.304c.936-.255 1.5-.974 1.5-1.652s-.564-1.397-1.5-1.652"
                />
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
