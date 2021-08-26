import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const PURL = `http://localhost:8000/api/v1/products/${id}`;
    const getSingleProduct = async () => {
      try {
        const response = await fetch(PURL);
        const product = await response.json();
        setProduct(product.product);
      } catch (error) {
        console.log("error", error);
      }
    };
    getSingleProduct();
  }, [id]);
  return (
    <div>
      <div className="details">
        {product && (
          <div className="card">
            <h6>{product.name}</h6>
            <p>{product.brand}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
