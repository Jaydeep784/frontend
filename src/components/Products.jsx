import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get("https://backend-1bqu.onrender.com/getProducts");
      const resArray = res.data.result;

      const newProducts = resArray.map(res => ({
        productName: res.productName,
        sellerName: res.sellerName,
        desc: res.productDet,
        image: "http://localhost:3001/Images/" + res.productImg,
        mobile: res.mobile,
      }));
      
      // Update the state only once
      setProduct(prev => {
        const updatedProducts = [...prev, ...newProducts];
      
        // Ensure the array is limited to the first 15 elements
        return updatedProducts.slice(0, 15);
      });

      // resArray.map((res) => {
      //   setProduct((prev) => [
      //     ...prev,
      //     {
      //       productName: res.productName,
      //       sellerName: res.sellerName,
      //       desc: res.productDet,
      //       image: "http://localhost:3001/Images/" + res.productImg,
      //       mobile: res.mobile,
      //     },
      //   ]);
      // });
    };

    getAllProducts();
  }, []);

  return (
    <>
      <div className="bg-slate-600 min-h-screen md:pb-10 ">
        <h1 className="text-black font-bold text-3xl mb-6 rounded pt-2 ml-4 md:z-10 -mt-1 md:text-4xl md:ml-32 ">
          View our products
        </h1>

        <div className="grid md:grid-cols-3 md:mx-24 md:gap-8">
          {product.map((prod, index) => {
            return (
              <div
                key={index}
                className="card bg-base-100 shadow-xl md:mb-1 rounded-none md:rounded-lg md:w-96"
              >
                <figure>
                  <img className="w-full h-64" src={prod.image} alt="images" />
                </figure>
                <div className="card-body bg-slate-800 rounded-lg">
                  <h2 className="card-title">{prod.productName}</h2>
                  <p>{prod.desc}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
