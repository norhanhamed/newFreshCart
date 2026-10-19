import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { CartContext } from '../../Context/Cart.Context';
import { Helmet } from "react-helmet";
import Reviews from '../../Components/Reviews/Reviews';
import ProductCard from './../../Components/ProductCard/ProductCard';

export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState(null);
    let { id } = useParams()


    const { addProductToCart } = useContext(CartContext);

    //react-image-gallary lib
    const imageGallary = productDetails?.images?.map((imageURL) => {
        return {
            original: imageURL,
            thumbnail: imageURL,
        };
    });
//related Products fun
    const [relatedProducts, setRelatedProducts] = useState([]);
    async function getRelatedProducts(categoryId) {
        const { data } = await axios.get(
            "https://ecommerce.routemisr.com/api/v1/products"
        );

        const related = data.data.filter((product) => {
            return (
                product.category._id === categoryId &&
                product.id !== id
            );
        });

        setRelatedProducts(related.slice(0, 4));
    }
// get getProductDetails fun
    async function getProductDetails() {
        const options = {
            url: `https://ecommerce.routemisr.com/api/v1/products/${id}`,
            method: "GET",
        };
        const { data } = await axios.request(options);
        setProductDetails(data.data);
        getRelatedProducts(data.data.category._id);

        console.log(data.data);
    }
    useEffect(() => {
        getProductDetails()
    }, [])


    return (
        <>
            {
                productDetails ? (

                    <>
                        <Helmet>
                            <title>{productDetails.title}</title>
                            <meta name={productDetails.descrition} content="welcom to home page " />
                        </Helmet>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-3">
                                <ImageGallery items={imageGallary} showFullscreenButton={false} showNav={true} showPlayButton={false} className="cursor-pointer " />
                            </div>
                            <div className="col-span-9 flex flex-col">
                                <div>
                                    <h2>{productDetails.title}</h2>
                                    <h3>{productDetails.category.name}</h3>
                                    <p>{productDetails.descrition}</p>
                                    <div className='flex justify-between items-center'>
                                        <span>{productDetails.price} L.E</span>
                                        <span> <i className='fa-solid fa-star text-yellow-400 mr-1'>{productDetails.ratingsAverage}</i></span>
                                    </div>
                                    <button onClick={() => addProductToCart({ id: productDetails.id })}
                                        className='btn-primary cursor-pointer w-full mt-4'>Add To Cart</button>

                                </div>

                              
                            </div>
                        </div>
                    </>

                ) : (<Loading />)
            }

  <div>
                                    <Reviews productId={id} />
                                </div>
            {/* relatedProducts   */}
            {relatedProducts.length > 0 && (
                <section className="mt-10">
                    <h2 className="text-2xl font-bold mb-5">
                        Related Products
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {relatedProducts.map((product) => (
                            <div >
                        <ProductCard key={product.id} productInfo={product}/>

                            </div>
                        ))}
                    </div>
                </section>
            )}

        </>
    )
}
