import HeadingBar from "@/components/shared/HeadingBar";
import MobSlider from "@/components/widgets/MobSlider";
import ProductSlider from "@/components/widgets/ProductSlider";
import Slider from "@/components/widgets/Slider";
import Hproduct from "@/public/assets/products/product18c-306x442.webp";
import product1 from "@/public/assets/products/product18a.webp";
import Collection from "@/components/shared/Collection";

import p1 from "@/public/assets/products/pexels-3motional-studio-407102-1081685.jpg";
import p2 from "@/public/assets/products/pexels-anastasiya-gepp-654466-2065203.jpg";
import p3 from "@/public/assets/products/pexels-kqpho-1921168.jpg";

const staticDummyData = {
  heading: "Explore Our Collection",
  title: "Latest Fashion Trends",
  link: "/fashion", // Link to the relevant page
  images: [
    {
      src: p1,
      alt: "Stylish outfit in a city setting",
    },
    {
      src: p2,
      alt: "Model wearing trendy attire",
    },
    {
      src: p3,
      alt: "Casual wear for everyday style",
    },
  ],
};

export default function Home() {
  return (
    <main className="w-full space-y-6">
      <div className="hidden lg:block">
        <Slider />
      </div>
      <div className="block lg:hidden">
        <MobSlider />
      </div>
      <HeadingBar
        heading="Taxing Laughter:"
        subHeading="The People of the Kingdom"
      />

      <ProductSlider
        imageUrl={product1}
        hoverImageUrl={Hproduct}
        title="Urban Sleeve Shirt"
        price={22.0}
        oldPrice={29.0}
        discount={24}
        isOnSale={true}
        expressDelivery={true}
        productUrl="/product/urban-sleeve-shirt"
      />
      <Collection
        heading={staticDummyData.heading}
        title={staticDummyData.title}
        link={staticDummyData.link}
        images={staticDummyData.images}
        background="bg-gradient-to-bl from-green-400 via-lime-300 to-lime-300"
      />
    </main>
  );
}
