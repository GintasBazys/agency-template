import LargeCardsComponent from "@/components/Cards/LargeCardsComponent";
import BannerComponent from "../components/Banner/BannerComponent";
import PricingCardsComponent from "@/components/Pricing/PricingCardsComponent";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-12 px-4 md:px-24">
      <BannerComponent />
      <LargeCardsComponent />
      <PricingCardsComponent />
    </main>
  );
}
