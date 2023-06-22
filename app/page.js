"use client";
import MediaCard from "@/components/Card";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="p-10">
      <div className="flex items-center gap-4 flex-wrap w-full">
        {data?.map((elem) => {
          return <MediaCard key={elem.id} elem={elem} />;
        })}
      </div>
    </main>
  );
}
