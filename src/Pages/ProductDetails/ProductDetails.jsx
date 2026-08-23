import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { CartContext } from '../../Context/Cart.Context';
import { Helmet } from "react-helmet";

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

    async function getProductDetails() {
        const options = {
            url: `https://ecommerce.routemisr.com/api/v1/products//${id}`,
            method: "GET",
        };
        const { data } = await axios.request(options);
        setProductDetails(data.data);
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
                        <div className="grid grid-cols-12 ">
                            <div className="col-span-3">
                                <ImageGallery items={imageGallary} showFullscreenButton={false} showNav={true} showPlayButton={false} className="cursor-pointer " />
                            </div>
                            <div className="col-span-9">
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
                    </>

                ) : (<Loading />)
            }
        </>
    )
}
