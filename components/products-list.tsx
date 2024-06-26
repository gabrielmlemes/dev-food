import ProductsItem from "./products-item";
import { Prisma } from "@prisma/client";

interface ProductListProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}

const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
