import React, { useState } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import HomeSlider from '../../Components/HomeSlider/HomeSlider'
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';
import { Helmet } from "react-helmet";
import { useQuery } from '@tanstack/react-query';
import Pagination from "../../Components/Pagination/Pagination";

export default function Products() {

  // for pagination
  const [page, setPage] = useState(1);
  const limit = 8;


  async function getProducts() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "GET",
      params: {
        page: page,
        limit: limit,
      },

    };

    return await axios.request(options);
  }
  let { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["products", page],
    queryFn: getProducts,
  });

  // console.log("Products metadata:", data?.data?.metadata);


  if (isLoading) {
    return <Loading />
  }

  if (isError) return <h2>ERROR</h2>


  return (
    <>

      <Helmet >
        <title>Products</title>
        <meta name='description' content="welcom to home page " />
      </Helmet>


      <div className="grid grid-cols-12 gap-4">
        {data.data.data.map((product) => (
          <div key={product.id} className="col-span-6 md:col-span-4 lg:col-span-3"  >
            <ProductCard productInfo={product} />
          </div>
        ))}
      </div>


      {/* Pagination */}
      <Pagination
        page={page}
        numberOfPages={data.data.metadata.numberOfPages}
        onPageChange={setPage}
        isFetching={isFetching}
      />

    </>
  )
}
