import React from "react";
import Navbar from "./Navbar";
import { MdArrowForwardIos } from "react-icons/md";
import { RiApps2Fill } from "react-icons/ri";
import { BsViewList } from "react-icons/bs";
import { BiSliderAlt } from "react-icons/bi";
import { Products } from "./Allproduct";
import { CiHeart } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { TbArrowsRightLeft } from "react-icons/tb";
import trophy from './Images/trophy 1.png'
import warantee from './Images/guarantee.png'
import shipping from './Images/shipping.png'
import support from './Images/customer-support.png'
import Footer from "./Footer";

const Shop = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="shop-bg w-full h-[316px] py-20">
          <div className=" w-[140px] mx-auto  ">
            <h1 className="text-[48px] leading-[72px] font-Poppins font-medium text-center text-[#000000]">
              Shop
            </h1>
            <div className="flex  justify-center gap-2 items-center ">
              <span className="text-[16px] leading-[24px] font-Poppins font-medium text-center text-[#000000]">
                Home
              </span>
              <MdArrowForwardIos />
              <span className="text-[16px] leading-[24px] font-Poppins font-light text-center text-[#000000]">
                Shop
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#F9F1E7] min-h-[100px] hidden md:block  md:py-6 md:px-0">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1   md:grid-cols-2 gap-8 px-2 md:px-8 ">
            <div className="flex justify-center  md:gap-12 gap-4 items-center  ">
              <span className="flex items-center gap-2 md:gap-4">
                <BiSliderAlt className="text-[20px] md:text-[25px]" />
                <label className="text-[#000000] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-Poppins">
                  Filter
                </label>
              </span>
              <RiApps2Fill className="text-[20px] md:text-[25px]" />
              <BsViewList className="text-[20px] md:text-[25px]" />
              <div className="flex pl-4 md:pl-8 items-center border-l-2 border-[#9F9F9F] w-full md:max-w-[240px] h-[20px] md:h-[37px] text-[#000000] text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] font-Poppins">
                Showing 1–16 of 32 results
              </div>
            </div>
            <div className="flex justify-center   gap-4 md:gap-9 ">
              <span className="grid grid-cols-2 items-center gap-2 md:gap-3 ">
                <label className="text-[#000000] text-[20px] leading-[30px] font-Poppins">
                  Show
                </label>
                <input
                  className="text-[#9F9F9F] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-Poppins w-[50px] md:w-[55px] h-[50px] md:h-[55px] bg-[#FFFFFF] text-center outline-none"
                  value="I6"
                />
              </span>
              <div className="grid grid-cols-2 items-center gap-2 xl:gap-5 max-w-[288px] ">
                <label className="text-[#000000] text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-Poppins font-normal">
                  Short by
                </label>
                <input
                  className="text-[#9F9F9F]  text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] font-Poppins px-3 w-[150px] xl:w-[188px] h-[50px] md:h-[55px] bg-[#FFFFFF] text-start outline-none"
                  value="Default"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-10 h-auto ">
          <div className="mx-auto max-w-[1236px] md:h-[1184px] h-auto ">
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
            <div className="mx-auto flex min-h-[90px] gap-5 max-w-[392px]">
              <button className="bg-[#B88E2F] text-[#fff] text-[16px] leading-[24px] font-Poppins font-semibold   w-[60px] h-[60px] rounded-md ">
                1
              </button>
              <button className="bg-[#F9F1E7] text-[#000000] text-[16px] leading-[24px] font-Poppins font-semibold  w-[60px] h-[60px] rounded-md ">
                2
              </button>
              <button className="bg-[#F9F1E7] text-[#000000] text-[16px] leading-[24px] font-Poppins font-semibold   w-[60px] h-[60px] rounded-md ">
                3
              </button>
              <button className="bg-[#F9F1E7] text-[#000000] text-[16px] leading-[24px] font-Poppins font-semibold  w-[98px] h-[60px] rounded-md">
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#FAF3EA]  min-h-[270px] px-3 md:px-0 py-10 md:py-0 flex justify-center items-center">
           <div className="max-w-[1440px] mx-auto  gap-8 flex-wrap flex justify-between items-center h-auto md:h-[70px] ">
              <div className="flex items-center gap-2">
               <img src={trophy} alt="" />
               <div className=" ">
                 <h6 className="text-[25px] leading-[37.5px] font-Poppins font-semibold text-[#242424] mb-0">High Quality</h6>
                 <p className="text-[20px] leading-[30px] font-Poppins font-medium text-[#898989] mb-0">crafted from top materials</p>
               </div>
              </div>
              <div className="flex items-center gap-2">
               <img src={warantee} alt="" />
               <div className=" ">
                 <h6 className="text-[25px] leading-[37.5px] font-Poppins font-semibold text-[#242424] mb-0">Warranty Protection</h6>
                 <p className="text-[20px] leading-[30px] font-Poppins font-medium text-[#898989] mb-0">Over 2 years</p>
               </div>
              </div>
              <div className="flex items-center gap-2">
               <img src={shipping} alt="" />
               <div className=" ">
                 <h6 className="text-[25px] leading-[37.5px] font-Poppins font-semibold text-[#242424] mb-0">Free Shipping</h6>
                 <p className="text-[20px] leading-[30px] font-Poppins font-medium text-[#898989] mb-0">Order over 150 $ </p>
               </div>
              </div>
              <div className="flex items-center gap-2">
               <img src={support} alt="" />
               <div className=" ">
                 <h6 className="text-[25px] leading-[37.5px] font-Poppins font-semibold text-[#242424] mb-0">24 / 7 Support</h6>
                 <p className="text-[20px] leading-[30px] font-Poppins font-medium text-[#898989] mb-0">Dedicated support</p>
               </div>
              </div>
           </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Shop;
