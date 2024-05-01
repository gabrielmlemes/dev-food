import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import ProductsList from "@/components/products-list";
import Search from "@/components/search";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "@/lib/prisma";
import PromoBanner from "@/components/promo-banners";
import RestaurantList from "@/components/restaurant-list";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

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
        <PromoBanner
          src="/promoBanner.svg"
          alt="Até 30% por cento de desconto em pizzas"
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

        <ProductsList products={products} />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner
          src="/BannerBurguer.svg"
          alt="A partir de R$17,90 em lanches"
        />
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>
          <Button
            className="h-fit p-0 text-primary hover:bg-transparent"
            variant="ghost"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>

        <RestaurantList />
      </div>
    </>
  );
};

export default Home;
