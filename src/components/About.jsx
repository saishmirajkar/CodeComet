import React, { useEffect } from "react";
import pic from "../assets/pic1.jpg";
import { saveAs } from "file-saver";
import file from "../assets/cv.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  /**
   * Handles the download button click event and downloads the resume file.
   */
  

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 dark:bg-[#21073C]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          {/* About heading */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Profile picture */}
          <div className="flex justify-center items-center" data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
            <img
              src={pic}
              alt="mahdi laith"
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2"
              style={{ width: "20rem", height: "20rem" }}
            />
          </div>
          {/* About content */}
          <div className="flex flex-col justify-center">
            {/* Introduction */}
            <p className="text-xl font-bold pb-2 text-[#00FFCA]">
              Hello Client, it's a pleasure to meet you
            </p>
            {/* Description */}
            <p className="text-sm leading-7">
            At CodeComet, we have a clear mission: to bring traditional industries in India into the digital era. We understand that some sectors haven't fully embraced digital technology's potential. That's where we come in. We specialize in customizing digital solutions for these sectors, making them shine in the digital world and facilitating their growth.
            </p>
            <br></br>
            <p className="text-sm leading-7">
Our approach is simple: we work closely with each industry to understand its unique challenges and opportunities. With this knowledge, we create tailor-made digital tools that fit perfectly into their operations. Whether it's improving processes, enhancing customer experiences, or optimizing logistics, we ensure our solutions align with their goals.
</p>
            <br></br>
            <p className="text-sm leading-7">
But we don't stop at digitization. We're all about empowering businesses to excel in the digital landscape. We believe that technology should not only streamline operations but also drive success in today's competitive environment.
When you choose CodeComet, you're choosing a partner that helps you stand out digitally, seize new opportunities, and stay ahead in your industry. We're here to ensure that traditional sectors not only adapt but also thrive, thanks to purpose-built digital solutions.
            </p>
            {/* Download resume button */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;