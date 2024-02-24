
const Category = ({ value }: { value: any }) => {
  return (
    <div className="col-span-1 z-10">
      <p className="font-semibold line-clamp-2 text-[24px] ">{value.title}</p>
      <p className="text-gray-700 text-[12px] mt-2">{value.subtitle}</p>
    </div>
  );
};

export default Category;
