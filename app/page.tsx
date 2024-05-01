import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import Search from "@/components/search";

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
    </>
  );
}
