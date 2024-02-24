import Link from "next/link";

const ProductCard = ({ item }: { item: any }) => {
  return (
    <>
      <div className=" bg-white rounded-lg text-black w-44 min-h-80 mr-2">
        <Link href="#">
          <div className="relative mb-3">
            <img
              src={item?.media[0]?.uri}
              alt="products"
              className="rounded-[4px]"
            />
            {item.tagsOnImage.map((value: string, index: number) => (
              <div
                className="absolute bottom-1 left-1 bg-teal-600 rounded-sm p-1"
                key={index}
              >
                <div className="flex gap-1">
                  <img
                    src="https://www.testvalley.kr/common/return-new.svg"
                    alt="tag"
                  />
                  <p className="text-xs">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-1">
            <h5 className="mb-2 tracking-tight text-gray-900 line-clamp-2 text-[15px]">
              {item.title}
            </h5>
            <div className="flex gap-1">
              <p className="font-semibold text-red-400 text-[18px]">
                {item?.priceInfo?.discountRate
                  ? item?.priceInfo?.discountRate
                  : item?.priceInfo?.couponDiscountRate}{" "}
                %
              </p>
              <p className="font-semibold text-gray-900 text-[18px]">
                {item.priceInfo?.couponDiscountPrice
                  ? item.priceInfo?.couponDiscountPrice
                  : item.priceInfo?.discountPrice
                  ? item?.priceInfo?.discountPrice
                  : item?.priceInfo?.price}
              </p>
              <span className="w-[10px] h-[10px]">
                원
              </span>
            </div>

            <>
              {item?.tagsOnDesc?.map((value: string, index: number) => (
                <span
                  className="bg-blue-100 text-[10px] font-semibold px-2.5 py-0.5 rounded dark:bg-gray-100"
                  key={index}
                >
                  {value}
                </span>
              ))}
            </>
            <div className="flex items-center space-x-1 rtl:space-x-reverse mb-2">
              <svg
                className="w-2 h-2 text-gray-700"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="text-[12px] text-gray-700 mt-2">{item.rating}</p>
            </div>
            {item.preface && (
              <div className=" rounded-sm p-1">
                <div className="flex gap-1 border-2 w-fit px-1 rounded-sm">
                  <img
                    src={item.prefaceIconUrl}
                    alt="tag"
                    className="w-3 h-3"
                  />
                  <p className="text-[10px]">{item.preface}</p>
                </div>
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
