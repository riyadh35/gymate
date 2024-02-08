import React from "react";
import { Outlet } from "react-router-dom";

const GalleryPage = () => {
  return (
    <section id="gallery">
      <div className="login-banner relative flex justify-center">
        <h2 className="text-white text-[30px] lps:text-[22px] font-bold absolute bottom-[25px]">
          Gallery
        </h2>
      </div>
      <div className="container page-padding py-[5rem]">
        <Outlet />
      </div>
    </section>
  );
};

export default GalleryPage;
