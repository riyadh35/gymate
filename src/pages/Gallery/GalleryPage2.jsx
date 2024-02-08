import React from "react";
import { galleryImg } from "./GalleryFiles";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const GalleryPage2 = () => {
  const secondPageImages = galleryImg.filter((item) => item.id >= 9);
  return (
    <>
      <div className="grid grid-cols-3 lps:grid-cols-2 mlsm:grid-cols-1 gap-7">
        {secondPageImages.map((image) => (
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
          className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[48px] font-medium rounded-md bg-white"
        >
          <MdKeyboardDoubleArrowLeft />
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/gallery/page-1"
          className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[48px] font-medium rounded-md bg-white"
        >
          1
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/gallery/page-1"
          className="text-white inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[48px] font-medium rounded-md bg-[#ff0336]"
        >
          2
        </Link>
      </div>
    </>
  );
};

export default GalleryPage2;
