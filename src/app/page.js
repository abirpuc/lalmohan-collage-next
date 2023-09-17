import Gallery from "./home/componets/Gallery/Gallery";
import NoticeBoard from "./home/componets/Noticeboard/NoticeBoard";
import Director from "./home/componets/director/Director";
import Slider from "./home/componets/slider/Slider";
import Special from "./home/componets/special/Special";
import Visitor from "./home/componets/visitorCounter/Visitor";

export default async function Home() {
  
  return (
    <main className="" >
      <Slider/>
      <Special/>
      <Director/>
      <NoticeBoard/>
      <Gallery/>
      <Visitor/>
    </main>
  )
}
