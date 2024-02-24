import Filter from "./Filter";

interface Filter {
  mainShortcutId: number;
  title: string;
  sort: number;
  imageUrl: string;
  linkUrl: string;
}

async function getData() {
  const data = await fetch("https://api.testvalley.kr/main-shortcut/all");
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

const FilterList = async () => {
  const data: [Filter] = await getData();
  return (
    <div className="lg:w-[960px] sm:w-[380px] xs:w-full mx-auto grid grid-cols-5 lg:grid-cols-10 py-4 place-content-stretch">
      {data &&
        data?.map((item: Filter) => {
          return (
            <div key={item?.mainShortcutId} className="mx-[18px]">
              <Filter value={item} />
            </div>
          );
        })}
    </div>
  );
};

export default FilterList;
