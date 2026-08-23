import React from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import HomeSlider from '../../Components/HomeSlider/HomeSlider'
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';
import { Helmet } from "react-helmet";
import { useQuery } from '@tanstack/react-query';

export default function Home() {


  async function getProducts() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "GET"
    };

    return await axios.request(options);
  }
  let { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <Loading />
  }


  return (
    <>

      <Helmet >
        <title>Home</title>
        <meta name='description' content="welcom to home page " />
      </Helmet>

      <HomeSlider />
      <CategorySlider />
      <div className="grid grid-cols-12 gap-4">
        {data.data.data.map((product) => <ProductCard productInfo={product} key={product.id} />)
        }
      </div>
    </>
  )
}
