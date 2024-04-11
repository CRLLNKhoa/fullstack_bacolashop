import ListCategories from "@/components/globalComponents/listCategories";
import BannerColSpan3 from "@/components/homeComponents/bannerColSpan3";
import BannerColSpan9 from "@/components/homeComponents/bannerColSpan9";
import BannerCoupon from "@/components/homeComponents/bannerCoupon";
import CountProductInCategories from "@/components/homeComponents/countProductInCategories";
import CustomerComment from "@/components/homeComponents/customerComment";
import HotProduct from "@/components/homeComponents/hotProduct";
import ListAdvantage from "@/components/homeComponents/listAdvantage";
import ListBanner from "@/components/homeComponents/listBanner";
import NewProductsList from "@/components/homeComponents/newProductsList";
import SliderStore from "@/components/homeComponents/slider";
import SliderProducts from "@/components/homeComponents/sliderProducts";
import TrendingProducts from "@/components/homeComponents/trendingProducts";

export default function Home() {
  return (
    <div className="w-full max-w-[1200px] px-[15px] mx-auto">
      <div className="w-full grid grid-cols-12">
        <div className="flex flex-col col-span-12 lg:col-start-4 lg:col-span-9 pt-7 pl-2">
          <SliderStore />
        </div>
        <div className="col-span-12 grid grid-cols-12 mt-4 lg:mt-10">
            <div className="hidden lg:col-span-3 lg:flex flex-col gap-12">
              <BannerColSpan3 img="/imgs/banner-box.jpg" line1="Thực phẩm tự nhiên Bacola" line2="Special Organic" line3="Roats Burger" price="7.99" />
              <BannerColSpan3 img="/imgs/bacola-banner-04.jpg" line1="Sản phẩm bánh tốt nhất" line2="Freshest Products" line3="Chế biến liên tục" price="24.99" />
              <ListAdvantage />
              <TrendingProducts />
              <CustomerComment />
            </div>
            <div className="col-span-12 lg:col-span-9 flex flex-col gap-8 pl-2">
              <SliderProducts />
              <BannerColSpan9 />
              <HotProduct />
              <BannerCoupon />
              <NewProductsList />
              <ListBanner />
            </div>
        </div>
        <div className="col-span-12 mt-10">
          <CountProductInCategories />
        </div>
      </div>
    </div>
  );
}
