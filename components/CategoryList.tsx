import ProductCard from "@/components/ProductCard";
import Category from "./Category";
import ProductList from "./ProductList";

interface Product {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  viewType: string;
  thumbnail: object;
  code: string;
  image: string;
  rating: number;
  media: object;
  items: [object];
}

async function getData() {
  const data = await fetch(
    "https://api.testvalley.kr/collections?prearrangedDiscount"
  );
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

const CategoryList = async () => {
  const data = await getData().then((res) => {
    return res.items.filter(
      (item: Product) => item.type === "SINGLE" && item.viewType === "TILE"
    );
  });
  return (
    <div className="mt-14 lg:w-[960px] sm:w-[380px] xs:w-full mx-auto">
      {data &&
        data.map((item: Product) => {
          return (
            <div key={item?.id} className="lg:grid lg:gap-10 block lg:grid-cols-5">
              <Category value={item} />
              <ProductList item={item.items} />
            </div>
          );
        })}
    </div>
  );
};

export default CategoryList;
