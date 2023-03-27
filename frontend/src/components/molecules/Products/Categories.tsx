import useSWR from "swr";
import { Fragment, useEffect, useState } from "react";
import CategoryTab from "../../atoms/CategoryTab";

import { ProductProps } from "../../atoms/ProductCard";

const Categories = () => {
  const [categories, setCategories] = useState([] as string[]);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8001/api/v1/products",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const getCategories = () => {
    let tempCategories: string[] = [];
    tempCategories.push("All");
    data.body.map((item: ProductProps) => {
      if (!tempCategories.includes(item.category)) {
        tempCategories.push(item.category);
      }
    });
    setCategories(tempCategories);
  };

  useEffect(() => {
    getCategories();
  }, [data]);

  return (
    <Fragment>
      {categories.length > 0 && (
        <div className="flex h-[8vh] items-center space-x-3 overflow-x-scroll border-y border-gray-400 p-4">
          {categories.map((item: string, index: number) => (
            <Fragment key={index}>
              <CategoryTab name={item} />
            </Fragment>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Categories;
