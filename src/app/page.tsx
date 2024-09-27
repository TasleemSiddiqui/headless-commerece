
import MobSlider from "@/components/widgets/MobSlider";
import Slider from "@/components/widgets/Slider";
import HeroSlider from "@/components/widgets/Slider";



export default function Home() {
  return (
    <main>
      
     <div className="hidden lg:block">
     <Slider />
     </div>
     <div className="block lg:hidden">
      <MobSlider/>
     </div>
     <div className="h-screen ">

     </div>
     
    </main>
  );
}
