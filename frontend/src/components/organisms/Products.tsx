import Categories from "../molecules/Products/Categories";
import ProductGrid from "../molecules/Products/ProductGrid";
import TopNav from "../molecules/Products/TopNav";

const Products = () => {
  return (
    <div className="h-screen">
      <TopNav />
      <Categories />
      <ProductGrid />
    </div>
  );
};

export default Products;
