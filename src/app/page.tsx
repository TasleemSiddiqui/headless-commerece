
import HeadingBar from "@/components/shared/HeadingBar";
import MobSlider from "@/components/widgets/MobSlider";
import Slider from "@/components/widgets/Slider";




export default function Home() {
  return (
    <main>
      
     <div className="hidden lg:block">
     <Slider />
     </div>
     <div className="block lg:hidden">
      <MobSlider/>
     </div>
     <HeadingBar heading="Taxing Laughter:" subHeading="The People of the Kingdom"/>
     <div className="h-screen ">

     </div>
     
    </main>
  );
}
