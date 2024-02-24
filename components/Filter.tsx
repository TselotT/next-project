import Link from "next/link";
import React from "react";

const Filter = ({ value }: { value: any }) => {
  return (
    <Link href={value?.linkUrl}>
      <img
        src={value?.imageUrl}
        alt={value?.title}
        className="min-w-[48px] h-[48px] md:w-[64px] md:h-[64px]"
        width={64}
        height={64}
      />
      <p className="sm:text-[13px] text-[11px] line-clamp-2 text-center mt-2">
        {value?.title}
      </p>
    </Link>
  );
};

export default Filter;
