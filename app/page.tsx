import Header from "@/components/header";
import Search from "@/components/search";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt6 px-5">
        <Search />
      </div>
    </>
  );
}
