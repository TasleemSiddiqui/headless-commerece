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
import HomeSlider from "@/components/widgets/HomeSlider";
import CategorySec, { Category } from "@/components/widgets/CategorySec";
import CoupanSec from "@/components/widgets/CoupanSec";
const staticDummyData = {
  heading: "Find your signature style",
  title: "Get Dressed to Impress with Our Men's Collection",
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
const staticDummyData2 = {
  heading: "Chic and Sophisticated",
  title: "Find your perfect outfit, step out in style",
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
const categories: Category[] = [
  { name: 'Women', url: '/women' },
  { name: 'Sale', url: '/sale' },
  { name: 'Footwear', url: '/footwear' },
  { name: 'Dresses', url: '/dresses' },
  { name: 'Slippers', url: '/slippers' },
  { name: 'Men', url: '/men' },
  { name: 'New', url: '/new' },
  { name: 'Boots', url: '/boots' },
  { name: 'Sale', url: '/sale' },
  { name: 'Kids', url: '/kids' },
  { name: 'Sports', url: '/sports' },
  { name: 'Jackets', url: '/jackets' },
  { name: 'T-shirts', url: '/tshirts' },
  { name: 'Trousers', url: '/trousers' },
  { name: 'Clothes', url: '/clothes' },
  { name: 'Footwear', url: '/footwear' },
  { name: 'Outdoor Shoes', url: '/outdoor-shoes' },
  { name: 'Outerwear', url: '/outerwear' },
  { name: 'Winter Jackets', url: '/winter-jackets' },
  { name: 'Accessories', url: '/accessories' },
  { name: 'Sneakers', url: '/sneakers' },
  { name: 'Sports shoes', url: '/sports-shoes' },
  { name: 'Skirts', url: '/skirts' },
];

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

      <HomeSlider
        hoverImageUrl={p1}
        imageUrl={p2}
        brand="zara"
        item={4}
        title="Zara style"
        link={"/"}
      />

      <Collection
        heading={staticDummyData.heading}
        title={staticDummyData.title}
        link={staticDummyData.link}
        images={staticDummyData.images}
        background="bg-[#c9e70f]"
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
        heading={staticDummyData2.heading}
        title={staticDummyData2.title}
        link={staticDummyData2.link}
        images={staticDummyData2.images}
        background="bg-black"
        isDark={true}
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
      <HeadingBar
        heading="Trending Item Categories"
        subHeading="In-Demand Item for the Fashion-Forward"
      />
      
      <CategorySec categories={categories} />
      <HeadingBar
        heading="Most Viewed Best Brands"
        subHeading="Discover Top-Rated Brands"
      />
      
      <CategorySec categories={categories} />
      <CoupanSec/>
    </main>
  );
}
