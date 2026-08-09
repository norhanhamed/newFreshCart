import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import HomeSlider from '../../Components/HomeSlider/HomeSlider'

import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';

export default function Home() {

  const [products, setProducts] = useState(null)

  async function getProducts() {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/products",
      method: "GET"
    };

    const { data } = await axios.request(options);
    // console.log(data);
    setProducts(data.data);


  }
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <HomeSlider />

      <CategorySlider />
      <div className="grid grid-cols-12 gap-4">
        {products ? (
          products.map((product) => <ProductCard productInfo={product} />)
        ) :
          (<Loading />)
        }
      </div>
    </>
  )
}
