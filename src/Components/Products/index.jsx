import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productsAction";
import Loading from "../Loading";
import { WrapperFrame } from "../Layout/wrapper";
import ProductCard from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const [prodcutsFetched, setProdcutsFetched] = useState(false);
  const data = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    setProdcutsFetched(true);
  }, [dispatch]);

  const productsList = data.products.map((item, index) => (
    <ProductCard
      key={index.toString()}
      id={item.id}
      image={item.image}
      title={item.title}
      price={item.price}
      quantity={1}
    />
  ));

  return data.loading || prodcutsFetched === false ? (
    <Loading />
  ) : data.error ? (
    <h1>{data.error}</h1>
  ) : (
    <WrapperFrame>
      <div className="grid">{productsList}</div>
    </WrapperFrame>
  );
};

export default Products;
