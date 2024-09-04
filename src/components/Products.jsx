import React, { useState, useEffect } from "react";
import axios from "axios";
import loading from "../assets/loadingImage.png";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios.get("https://backend-1bqu.onrender.com/getProducts");
      const resArray = res.data.result;

      const newProducts = resArray.map((res) => ({
        productName: res.productName,
        sellerName: res.sellerName,
        desc: res.productDet,
        image: "https://backend-1bqu.onrender.com/Images/" + res.productImg,
        mobile: res.mobile,
      }));

      // Update the state only once
      setProduct((prev) => {
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
      <div className="dark:bg-slate-950 bg-slate-200 min-h-screen px-4 md:mx-0 md:px-16 ">
        <h1 className="dark:text-white text-black text-base rounded pt-3 md:text-lg">
          View our products
        </h1>
        <div className="grid mt-4 md:grid-cols-4 md:gap-4">
          {product.map((prod, index) => {
            return (
              <div
                key={index}
                className="card dark:border-white border border-black bg-base-100 shadow-md mb-4 rounded-lg md:max-w-xs "
              >
                <figure>
                  <img
                    className="w-full h-40 object-cover rounded-t-lg"
                    src={prod.image}
                    alt={prod.productName}
                  />
                </figure>
                <div className="card-body dark:bg-slate-950  bg-slate-200 p-3">
                  <h2 className="card-title dark:text-white text-md font-medium text-black mb-1">
                    {prod.productName}
                  </h2>
                  <p className="dark:text-white text-gray-700 text-xs mb-3 line-clamp-2">
                    {prod.desc}
                  </p>
                  <div className="dark:bg-slate-950 dark:text-white card-actions flex justify-between items-center bg-slate-200">
                    <button className="btn dark:bg-violet-950 dark:text-white bg-slate-200 broder-none outline-none py-1 px-2 h-6 text-xs text-black">
                      Buy Now
                    </button>
                    <span className="dark:text-white text-xs text-gray-700">
                      Price: $100
                    </span>
                  </div>
                </div>
              </div>

              // <div
              //   key={index}
              //   className="card bg-base-100 shadow-xl md:mb-1 rounded-none md:rounded-lg md:w-96"
              // >
              //   <figure>
              //     <img className="w-full h-64" src={prod.image} alt="images" />
              //   </figure>
              //   <div className="card-body bg-slate-800">
              //     <h2 className="card-title">{prod.productName}</h2>
              //     <p>{prod.desc}</p>
              //     <div className="card-actions justify-end">
              //       <button className="btn btn-primary">Buy Now</button>
              //     </div>
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
