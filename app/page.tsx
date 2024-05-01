import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import ProductsList from "@/components/products-list";
import Search from "@/components/search";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <div className="px-5 pt-6">
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

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            className="h-fit p-0 text-primary hover:bg-transparent"
            variant="ghost"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>

        <ProductsList />
      </div>
    </>
  );
}
