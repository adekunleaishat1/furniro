import React, { useState } from "react";
import Navbar from "./Navbar";
import dinning from "./Images/Mask Group.png";
import living from "./Images/Image-living room.png";
import bedroom from "./Images/Mask Group (1).png";
import { Products } from "./Allproduct";
import compare from "./Images/compare-svgrepo-com 1.png";
import { CiHeart } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import product1 from "./Images/Image.png";
import product2 from "./Images/Products.png";
import setup from "./Images/Share.png";
import Footer from "./Footer";
import { TbArrowsRightLeft } from "react-icons/tb";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import carouselimg from "./Images/Rectangle 25.png";
import imgcollage1 from "./Images/Rectangle 36.png";
import imgcollage2 from "./Images/Rectangle 38.png";
import imgcollage3 from "./Images/Rectangle 40.png";
import imgcollage4 from "./Images/Rectangle 43.png";
import imgcollage5 from "./Images/Rectangle 45.png";
import imgcollage6 from "./Images/Rectangle 37.png";
import imgcollage7 from "./Images/Rectangle 39.png";
import imgcollage8 from "./Images/Rectangle 41.png";
import imgcollage9 from "./Images/Rectangle 44.png";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: carouselimg, title: "Inner Peace", description: "01 — Bed Room" },
    { image: dinning, title: "Serenity", description: "02 — Living Room" },
    { image: carouselimg, title: "Inner Peace", description: "01 — Bed Room" },
    { image: carouselimg, title: "Inner Peace", description: "01 — Bed Room" },
  ];
  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="border">
        <Navbar />
        <div className="bg_newarrival  min-h-[716.83px] relative  mx-auto ">
          <div className="w-full flex justify-center md:justify-around items-center  top-[200px]  absolute px-3 md:px-24 ">
            <div className="w-[434px]"></div>
            <div className="max-w-[643px] h-auto md:h-[443px]  bg-[#FFF3E3] rounded-md px-8 py-12">
              <div className="max-w-[561px] h-auto md:h-[344px] ">
                <h1 className="text-[16px] text-[#000000] leading-[24px] font-Poppins font-semibold tracking-[3px]">
                  New Arrival
                </h1>
                <h2 className="text-[30px] md:text-[52px] text-[#B88E2F] leading-[65px] font-Poppins font-bold mb-3 ">
                  Discover Our <br /> New Collection
                </h2>
                <p className="text-[16px] md:text-[18px] text-[#000000] leading-[24px] font-Poppins font-medium  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
                <button className="bg-[#B88E2F] px-[72px] py-[10px] md:py-[25px] font-Poppins text-[#FFFFFF] font-bold text-[16px] leading-[24px] mt-[25px]">
                  BUY Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-10 h-full ">
        <div className="mx-auto max-w-[1183px] md:h-[685px] h-auto px-6 lg:px-0">
          <h1 className="text-[32px] text-[#333333] font-Poppins leading-[48px] font-bold text-center ">
            Browse The Range
          </h1>
          <p className="text-[20px] text-[#666666] font-Poppins leading-[30px] font-medium  text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex  flex-wrap justify-center  md:justify-between items-center mt-6">
            <div className="">
              <img className="w-[381px] h-[480px]" src={dinning} alt="" />
              <h1 className="text-[24px] text-[#333333] font-Poppins leading-[36px] font-semibold text-center mt-3">
                Dining
              </h1>
            </div>
            <div className="">
              <img className="w-[381px] h-[480px]" src={living} alt="" />
              <h1 className="text-[24px] text-[#333333] font-Poppins leading-[36px] font-semibold text-center mt-3">
                Living
              </h1>
            </div>
            <div className="">
              <img className="w-[381px] h-[480px]" src={bedroom} alt="" />
              <h1 className="text-[24px] text-[#333333] font-Poppins leading-[36px] font-semibold text-center mt-3">
                Bedroom
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-10 h-auto ">
        <div className="mx-auto max-w-[1236px] md:h-[1184px] h-auto ">
          <h1 className="text-[40px] text-[#3A3A3A] font-Poppins leading-[48px] font-bold text-center">
            Our Products
          </h1>
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 mt-5 mb-[20px]">
              {Products.slice(0, 8).map((prod, index) => {
                const discount = prod.productDiscount
                  ? parseFloat(prod.productDiscount)
                  : 0;

                const originalPrice = parseFloat(prod.productPrice);

                const discountedPrice =
                  originalPrice - originalPrice * (discount / 100);

                const formatPrice = (price) =>
                  new Intl.NumberFormat("id-ID").format(price);

                return (
                  <div key={index} className="mb-4 relative group w-[275px]">
                    <div className="w-full h-full bg-[#3a3a3ad2] flex cont-prod absolute top-0 left-0   transition-opacity duration-500 ease-in-out z-10  justify-center items-center  ">
                      <div>
                        <button className="text-[#B88E2F] text-[16px] leading-[24px] font-Poppins font-semibold border-1 mx-auto block bg-[#FFFFFF] w-[202px] h-[48px] ">
                          Add to cart
                        </button>
                        <div className="w-[252px] h-[24px] flex justify-around  mt-3 ">
                          <span className="text-[12px] leading-[24px] font-Poppins text-[#FFFFFF] font-semibold flex items-center gap-1">
                            <IoShareSocial className="text-[#FFFFFF] text-[20px]" />{" "}
                            Share
                          </span>
                          <span className="text-[12px] leading-[24px] font-Poppins text-[#FFFFFF] font-semibold flex items-center gap-1">
                            <TbArrowsRightLeft className="text-[#FFFFFF] text-[20px]" />
                            Compare
                          </span>
                          <span className="text-[12px] leading-[24px] font-Poppins text-[#FFFFFF] font-semibold flex items-center gap-1">
                            <CiHeart className="text-[#FFFFFF] text-[20px]" />{" "}
                            Like
                          </span>
                        </div>
                      </div>
                    </div>
                    <img
                      src={prod.productImage}
                      alt={prod.productName}
                      className="w-full h-[301px]"
                    />
                    <div className=" px-3 py-2 bg-[#F4F5F7] h-[145px]">
                      <h2 className="text-[20px] text-[#333333] font-Poppins leading-[36px] font-semibold">
                        {prod.productName}
                      </h2>
                      <p className="text-[16px] text-[#666666] font-Poppins leading-[24px] mt-2">
                        {prod.productDescription}
                      </p>
                      {prod.productBrand === "New" && (
                        <h1 className="absolute top-[24px]  left-[213px] flex justify-center items-center bg-[#2EC1AC] text-[#FFFFFF] text-[16px] leading-[24px] font-Poppins font-bold w-[48px] h-[48px] rounded-full">
                          New
                        </h1>
                      )}
                      {prod.productDiscount == 0 ? (
                        ""
                      ) : (
                        <h1 className="absolute top-[24px] left-[213px] flex justify-center items-center text-[#FFFFFF] font-Poppins text-[16px] leading-[24px] w-[48px] h-[48px] rounded-full bg-[#E97171]">
                          -{prod.productDiscount}%
                        </h1>
                      )}
                      <div className="flex  items-center mt-2 space-x-4">
                        {prod.productDiscount ? (
                          <>
                            <h6 className="text-[16px] text-[#3A3A3A] font-Poppins leading-[30px] font-semibold">
                              Rp {formatPrice(discountedPrice)}
                            </h6>
                            <h6 className="text-[16px] text-[#B0B0B0] font-Poppins leading-[24px] font-normal line-through">
                              Rp {formatPrice(originalPrice)}
                            </h6>
                          </>
                        ) : (
                          <h6 className="text-[16px] text-[#3A3A3A] font-Poppins leading-[30px] font-semibold">
                            Rp {formatPrice(originalPrice)}
                          </h6>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="text-[#B88E2F] text-[16px] leading-[24px] font-Poppins font-semibold border-1 mx-auto block border-[#B88E2F] w-[245px] h-[48px] ">
            Show More
          </button>
        </div>
      </div>
      <div className="w-full bg-[#FCF8F3] py-8">
        <div className="w-full mx-auto pl-3  md:px-0">
          <div className="grid grid-cols-1  md:grid-cols-3 items-center gap-8 mx-auto min-h-[670px]">
            <div className="col-span-1 pl-0 md:pl-[90px]">
              <h1 className="text-[40px] text-[#3A3A3A] font-Poppins leading-[48px] font-bold  mt-3">
                50+ Beautiful rooms inspiration
              </h1>
              <p className="text-[16px] text-[#616161] font-Poppins leading-[24px] font-semibold  mt-3">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <button className="bg-[#B88E2F] text-[#FFFF] text-[16px] leading-[24px] font-Poppins font-semibold border-1 mx-auto  w-[176px] h-[48px] ">
                Explore More
              </button>
            </div>
            <div className="col-span-2 relative flex items-center gap-4">
              <img className="" src={product1} alt="" />
              <div className="h-[582px]  relative  w-[1000px]  overflow-hidden">
                <div
                  className="flex transition-transform ease-out duration-300 mr-[70px]"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="min-w-full h-[486px]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-[95%] h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute w-[48px] h-[48px] top-1/2 left-0 transform -translate-y-1/2 p-2 bg-[#fff] rounded-full shadow-lg"
                >
                  <MdOutlineArrowBackIosNew className="text-[#B88E2F] mx-auto" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute w-[48px] h-[48px] top-1/2 right-[10%] transform -translate-y-1/2 p-2 bg-[#fff] rounded-full shadow-lg"
                >
                  <MdOutlineArrowForwardIos className="text-[#B88E2F] mx-auto" />
                </button>
                <div className="absolute bottom-4 left-2 items-center flex gap-2">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`cursor-pointer  w-[12px] h-[12px] rounded-full ${
                        currentIndex === index
                          ? "w-[27px] h-[27px] border-1 border-[#B88E2F] rounded-full curso"
                          : "bg-[#D8D8D8]"
                      }`}
                    />
                  ))}
                </div>
              </div>
              2
            </div>
          </div>
        </div>
      </div>
      

      <div className="w-full bg-[#FFF] py-20 relative">
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2  w-[356px]">
          <h5 className="text-[20px] text-[#616161] font-Poppins leading-[30px] font-semibold  mt-3 text-center">Share your setup with</h5>
         <h1  className="text-[40px] text-[#3A3A3A] font-Poppins leading-[48px] font-bold  mt-3 text-center">#FuniroFurniture</h1>
        </div>
        <div className="grid grid-cols-4 grid-cols-5 items-center mx-auto  gap-3 w-full overflow-hidden">
          <div className=" col-span-2 shrink">
            <div className="flex justify-start gap-3 items-end">
            <img className="h-[382px] w-[274px] shrink  object-cover " src={imgcollage1} alt="" />
            <img className="w-[500px] h-[312px] shrink object-cover " src={imgcollage2} alt="" />
            </div>
            <div className="flex justify-center gap-3 mt-2">
            <img className="w-[381px] h-[323px] shrink" src={imgcollage6} alt="" />
            <img className="w-[344px] h-[242px] shrink" src={imgcollage7} alt="" />
            </div>
          </div>
          <div className="hidden  md:col-span-1 shrink">
             <img className="w-[300px] h-[392px] shrink" src={imgcollage3} alt="" />
          </div>
          
           <div className="col-span-2 shrink">
            <div className="flex justify-center gap-3 items-end">
            <img className="w-[290px] shrink" src={imgcollage4} alt="" />
            <img className="w-[425px] shrink" src={imgcollage5} alt="" />
            </div>
            <div className="flex justify-start gap-3 mt-2 ">
            <img className="w-[178px] shrink" src={imgcollage8} alt="" />
            <img className="w-[258px] shrink" src={imgcollage9} alt="" />
            </div>
           </div>
        </div>
        
      </div>
      <div className="border-t-2 border-[#D9D9D9]"></div>
      <Footer />
    </>
  );
};

export default Home;
