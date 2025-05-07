"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { getProductBySlug } from "../../lib/api";
import { useRouter } from 'next/navigation';

const LargeBanner = ({ product_sku }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProductBySlug(product_sku);
                if (!data) {
                    router.push("/not-found");
                    return;
                }
                setProduct(data.data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
                router.push("/not-found");
            } finally {
                setLoading(false);
            }
        }

        if (product_sku) {
            fetchProduct();
        }
    }, [product_sku]);

    if (loading || !product) return null;

    return (
        <>
            {product.description && (
                <div
                    className="product-description py-6"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                />
            )}
        </>
    );
};

export default LargeBanner;
