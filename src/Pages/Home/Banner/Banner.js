import { Carousel } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto ">
      <div className=" my-4 h-full sm:h-64 xl:h-80 2xl:h-full container mx-auto w-full">
              <Carousel slideInterval={5000}>
                  <div>
                  <img
          
          src="https://www.hdcarwallpapers.com/walls/2012_lamborghini_aventador_j_4-wide.jpg"
          alt="..."
        />     
              <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
Hover me
</button>
                 </div>
                
             
             

          <img
            className=""
            src="https://i.pinimg.com/originals/35/42/c9/3542c9d2ebd9749a11d35601f632e33b.jpg"
            alt="..."
          />
          <img
            className=""
            src="https://images.pexels.com/photos/757185/pexels-photo-757185.jpeg?auto=compress&cs=tinysrgb&w=3000"
            alt="..."
          />
          <img
            src="https://data.1freewallpapers.com/download/lamborghini-aventador-j.jpg"
            alt="..."
          />
          <img src="https://wallpaperaccess.com/full/229246.jpg" alt="..." />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
