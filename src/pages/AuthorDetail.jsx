import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AuthorDetail = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch(`https://api.hadith.gading.dev/books/${id}?range=1-50`);
                // console.log("testing", response.data)
                if (!response.ok) {
                    throw new Error('Failed to fetch product detail');
                }
                const data = await response.json();
                console.log("testing", data.data.hadiths);
                setProductDetail(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h2 style={{color: "black"}}>Product Detail</h2>
            <p style={{color: "black"}}>Product ID: {id}</p>
            {productDetail && (
                <div>
                    <h3 style={{color: "black"}}>{productDetail.title}</h3>
                    <p style={{color: "black"}}>{productDetail.description}</p>
                    {/* Add code to display other product details */}
                </div>
            )}
        </div>
    )
}

export default AuthorDetail;