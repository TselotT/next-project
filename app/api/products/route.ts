
export const GET = async () => {
  const res = await fetch(
    "https://api.testvalley.kr/collections?prearrangedDiscount",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return Response.json({ data });
};
