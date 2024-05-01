import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import Search from "@/components/search";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <div className="pt6 px-5">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="pt-6">
        <Image
          src="/promoBanner.svg"
          alt="Até 30% por cento de desconto em pizzas"
          height={0}
          width={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
    </>
  );
}
