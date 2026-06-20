import HeroBanner from "@/components/home/HeroBanner";
import AdvertisementSection from "@/components/home/AdvertisementSection";
import LatestTicketsSection from "@/components/home/LatestTicketsSection";

export default function Home() {
  return (
    <div className="w-full pb-20 bg-gray-50/50 dark:bg-gray-900/40 transition-colors duration-300">
      {/* Hero Banner Component */}
      <HeroBanner />

      {/* Requirement 3a: Advertisement Grid (6 Admin Highlights) */}
      <AdvertisementSection />

      {/* Requirement 3b: Latest Uploaded Routes Grid (6-8 Cards) */}
      <LatestTicketsSection />
    </div>
  );
}