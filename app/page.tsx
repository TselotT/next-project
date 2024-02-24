import CarouselList from "@/components/CarouselList";
import CategoryList from "@/components/CategoryList";
import FilterList from "@/components/FilterList";

interface Carousel {
  mainBannerId: number;
  title: string;
  sort: number;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
}

async function getData() {
  const data = await fetch("https://api.testvalley.kr/main-banner/all");
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export default async function Home() {
  const data : [Carousel] = await getData();
  return (
    <main>
      <CarouselList value={data} />
      <div className="max-w-[420px] lg:max-w-none min-w-[360px] mx-auto px-5 md:px-0">
        <FilterList />
        <CategoryList />
      </div>
    </main>
  );
}
