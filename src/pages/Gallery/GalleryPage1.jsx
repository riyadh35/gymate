import React from "react";
import { galleryImg } from "./GalleryFiles";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const GalleryPage1 = () => {
  const firstPageImages = galleryImg.filter((item) => item.id <= 8);
  return (
    <>
      <div
        className="grid grid-cols-3 gap-7 
      lps:grid-cols-2 mlsm:grid-cols-1"
      >
        {firstPageImages.map((image) => (
          <div key={image.id}>
            <img
              src={image.image}
              alt="gallery_img"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-32">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/gallery/page-1"
          className="text-white inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-[#ff0336] "
        >
          1
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/gallery/page-2"
          className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md "
        >
          2
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/gallery/page-2"
          className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md  "
        >
          <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
    </>
  );
};

export default GalleryPage1;
