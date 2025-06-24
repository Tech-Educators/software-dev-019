//TODO: add local and external images to this page
import Image from "next/image";
//import image from the public folder
import rollercoaster from "@/../public/images/rollercoaster.jpg";

export default function HomePage() {
  return (
    <>
      <h1>This is the home page</h1>
      <Image
        src={rollercoaster}
        alt="yellow rollercoaster in motion"
        width={500}
        height={350}
        placeholder="blur"
      />
      {/* the external image needs width and height, otherwise it errors */}
      <Image
        src={
          "https://cdn.pixabay.com/photo/2023/01/30/07/24/losangeles-7754986_1280.jpg"
        }
        alt="rollercoaster in motion"
        width={500}
        height={350}
      />
    </>
  );
}
