import useSWR from "swr";
import { Fragment } from "react";
import ProductCard from "../../atoms/ProductCard";
import { useRecoilValue } from "recoil";
import { selectedCategoryState } from "../../../states/SelectedCategory";

import { ProductProps } from "../../atoms/ProductCard";

// const products = [
//   {
//     id: 1,
//     name: "Product 1 Couple Shoes 2023 wear Korean",
//     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1000,
//   },
//   {
//     id: 2,
//     name: "Product 2 Couple Shoes 2023 wear Korean",
//     img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     price: 2000,
//   },
//   {
//     id: 3,
//     name: "Product 3 Couple Shoes 2023 wear Korean",
//     img: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//     price: 3000,
//   },
//   {
//     id: 4,
//     name: "Product 4 Couple Shoes 2023 wear Korean",
//     img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//     price: 4000,
//   },
//   {
//     id: 5,
//     name: "Product 5 Couple Shoes 2023 wear Korean",
//     img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//     price: 5000,
//   },
// ];

const ProductGrid = () => {
  const category = useRecoilValue(selectedCategoryState);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8001/api/v1/products",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const realData = () => {
    if (category === "All") {
      return data.body;
    } else {
      return data.body.filter((p: ProductProps) => p.category === category);
    }
  };

  return (
    <div className="h-[82vh]">
      <div className="grid grid-cols-4 gap-4 overflow-auto p-4">
        {realData().map((product: ProductProps) => (
          <Fragment key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              img={product.img}
              price={product.price}
              category={product.category}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
