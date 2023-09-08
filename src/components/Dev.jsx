import React, { useEffect } from "react";
import pic from "../assets/madhushree.png";
import pic1 from "../assets/saish.png";
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";
import file from "../assets/cv.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dev = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  /**
   * Handles the download button click event and downloads the resume file.
   */
  const handleDownload = () => {
    saveAs(file, "resume.pdf");
  };

  return (
    <div
      name="dev"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 dark:bg-[#21073C]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          {/* About heading */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
              Developers
            </p>
            <br></br>
            <br></br>
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
              Madhushree Kulkarni
            </p>
            {/* Description */}
            <p className="text-sm leading-7">
            
            </p>
            
            <p className="text-sm leading-7">
            Former Intern at Navgurukul 
</p>
            
            <p className="text-sm leading-7">
            Former Intern at Orange Health 
            </p>
            
            <p className="text-sm leading-7">
            Currently Working as Web Developer at Lilac Print 
            </p>
            
            {/* Download resume button */}

          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Profile picture */}
          <div className="flex justify-center items-center" data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
            <img
              src={pic1}
              alt="mahdi laith"
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2"
              style={{ width: "20rem", height: "20rem" }}
            />
          </div>
          {/* About content */}
          <div className="flex flex-col justify-center">
            {/* Introduction */}


            <p className="text-xl font-bold pb-2 text-[#00FFCA]">
              Saish Mirajkar
            </p>
            {/* Description */}
            <p className="text-sm leading-7">
            
            </p>
            
            <p className="text-sm leading-7">
            Former Co-Founder and UI/UX lead at college startup "legit"
</p>

<p className="text-sm leading-7">
            Founder of Media Production company "HOV"
</p>

            
            <p className="text-sm leading-7">
            Former Web-developer at SSFI
            </p>
            
            <p className="text-sm leading-7">
            Currently Working as Blockchain dev and Full stack dev (Freelancer)
            </p>
            
            {/* Download resume button */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev;