import Image from "next/image";
import AbhijayaImage from "@/app/assests/abhijaya.jpeg";
import github from "@/app/assets/github1-removebg-preview.png";
import linkedin from "@/app/assets/llllllllll.png";


import { HoverEffect } from "./card-hover-effect";

function Thirddiv() {
    return (
        <div className="max-w-5xl mx-auto px-8 p-4">
            {/* Main heading */}
            <h1 className="text-4xl font-bold text-center mb-8">
                Meet our team
            </h1>
            
            
            {/* Description or additional heading if necessary */}
            <p className="text-lg text-center mb-4 ">
                Our philosophy is simple- hire a team of diverse, passionate people and foster  a culture that empowers you to do you best work
            </p>
            
            {/* HoverEffect component */}
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        
      title: "Abhijaya pal",
      design:"Development team",
      description:
        "As a CSB student from IIITD, I work on the development and UI teams, contributing to project building and design implementation. My focus is on creating user-centered experiences while developing efficient, functional applications.",
      link: "https://github.com/Abhijayapal",
      dp:<Image src={AbhijayaImage} alt="Abhijaya Pal" width={100} height={100} className="rounded-full" />,
      github:<Image src={github} alt="github" width={38} height={72} className="rounded-full "/>,
      linkedin:<Image src={linkedin} alt="linkedin" width={25} height={50} className="rounded-full"/>,
      insta: <Image src={linkedin} alt="linkedin" width={25} height={50} className="rounded-full"/>
      
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

export default Thirddiv
