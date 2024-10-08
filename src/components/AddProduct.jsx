// https://backend-1bqu.onrender.com

import React, { useState } from "react";
import axios from "axios";
import Navbar from './Navbar'

const AddProduct = () => {
  const [productDetail, setProductDetail] = useState({
    sellerName: "",
    mobile: "",
    productImg: null, // Update to handle file object
    productName: "",
    productDet: "",
  });

  const handleFileChange = (e) => {
    setProductDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0], // Store the file object
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("sellerName", productDetail.sellerName);
    formData.append("mobile", productDetail.mobile);
    formData.append("productName", productDetail.productName);
    formData.append("productDet", productDetail.productDet);
    formData.append("productImg", productDetail.productImg); // Append file object

    try {
        const response = await axios.post(
          "https://backend-1bqu.onrender.com/productDetails",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    setProductDetail({
      sellerName: "",
      mobile: "",
      productImg: null, // Update to handle file object
      productName: "",
      productDet: "",
    });
  };
  return (
    <>
      <div>
        <Navbar />
      <div className="dark:bg-slate-950 dark:border-t min-h-screen bg-gray-50 flex flex-col md:justify-center py-8 sm:px-6 lg:px-8">
       <div className="sm:mx-auto sm:w-full sm:max-w-md">
         <img
           className="mx-auto h-10 w-auto"
           src="https://www.svgrepo.com/show/301692/login.svg"
           alt="Workflow"
         />
         <h2 className="dark:text-white mt-3 text-center text-3xl leading-9 font-extrabold text-gray-900">
           Add product to sell
         </h2>
       </div>

       <div className=" mt-4 sm:mx-auto sm:w-full sm:max-w-md">
         <div className="dark:bg-slate-950  bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
           <form
             method="POST"
             onSubmit={handleSubmit}
             encType="multipart/form-data"
           >
             <div className="">
               <label
                 htmlFor="email"
                 className="dark:text-white block text-sm font-medium leading-5 text-gray-700"
               >
                 Name
               </label>
               <div className="mt-1 relative rounded-md shadow-sm">
                 <input
                   className="appearance-none bg-white block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                   type="text"
                   name="sellerName"
                   value={productDetail.sellerName}
                   onChange={(e) =>
                     setProductDetail((prev) => ({
                       ...prev,
                       [e.target.name]: e.target.value,
                     }))
                   }
                   placeholder="Enter seller name"
                 />
               </div>
             </div>
             <div className="mt-6">
               <label
                 htmlFor="mobile"
                 className="dark:text-white block text-sm font-medium leading-5 text-gray-700"
               >
                 Mobile Number
               </label>
               <div className="mt-1 rounded-md shadow-sm">
                 <input
                   className="appearance-none bg-white block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                   type="tel"
                   name="mobile"
                   value={productDetail.mobile}
                   onChange={(e) =>
                     setProductDetail((prev) => ({
                       ...prev,
                       [e.target.name]: e.target.value,
                     }))
                   }
                   id=""
                 />
               </div>
             </div>
             <div className="mt-6">
               <label
                 htmlFor="productImg"
                 className="dark:text-white block text-sm font-medium leading-5 text-gray-700"
               >
                 Upload product photo :
               </label>
               <div className="mt-1 rounded-md shadow-sm">
                 <input
                   className="appearance-none bg-white block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                   name="productImg"
                   type="file"
                   // value={productDetail.productImg}
                   onChange={handleFileChange}
                 />
               </div>
             </div>
             <div className="mt-6">
               <label
                 htmlFor="productName"
                 className="dark:text-white block text-sm font-medium leading-5 text-gray-700"
               >
                 Product Name :
               </label>
               <div className="mt-1 rounded-md shadow-sm">
                 <input
                   className="appearance-none bg-white block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                   name="productName"
                   type="text"
                   value={productDetail.productName}
                   onChange={(e) =>
                     setProductDetail((prev) => ({
                       ...prev,
                       [e.target.name]: e.target.value,
                     }))
                   }
                 />
               </div>
             </div>
             <div className="mt-6">
               <label
                 htmlFor="productDet"
                 className="dark:text-white block text-sm font-medium leading-5 text-gray-700"
               >
                 Give Product Details :
               </label>
               <div className="mt-1 rounded-md shadow-sm">
                 <textarea
                   className="appearance-none bg-white block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                   name="productDet"
                   value={productDetail.productDet}
                   onChange={(e) =>
                     setProductDetail((prev) => ({
                       ...prev,
                       [e.target.name]: e.target.value,
                     }))
                   }
                 />
               </div>
             </div>
             <div className="mt-6">
               <span className="block w-full rounded-md shadow-sm">
                 <button
                   type="submit"
                   className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                 >
                   Submit
                 </button>
               </span>
             </div>
           </form>
         </div>
       </div>
     </div>
      </div>
      {/* <div className="bg-gray-200 min-h-screen text-black max-w-screen-sm mx-auto  py-4 rounded-lg text-sm">
        <h1 className="text-center text-4xl font-bold mt-3">
          Add product to sell
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:w-96 mx-auto mt-10 w-80"
        >
          <label>Enter Name : </label>
          <input
            className="border bg-white rounded my-2 pl-2 py-1"
            type="text"
            name="sellerName"
            onChange={(e) =>
              setProductDetail((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Enter seller name"
          />
          <label>Mobile Number : </label>
          <input
            className="border bg-white  rounded my-2 py-1 pl-2"
            type="tel"
            name="mobile"
            onChange={(e) =>
              setProductDetail((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            id=""
          />
          <label>Upload product photo : </label>
          <input
            className="border bg-white rounded my-2 "
            name="productImg"
            type="file"
            onChange={(e) =>
              setProductDetail((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label>Product Name : </label>
          <input
            className="border bg-white rounded my-2 py-1 pl-2"
            name="productName"
            type="text"
            onChange={(e) =>
              setProductDetail((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label>Give Product Details : </label>
          <textarea
            className="border my-2 bg-white"
            name="productDet"
            onChange={(e) =>
              setProductDetail((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <button
            type="submit"
            className="mt-4 border bg-gray-600 w-32 rounded-lg mx-auto p-2 hover:transition hover:scale-110 hover:bg-gray-900 hover:text-white"
          >
            Submit
          </button>
        </form>
      </div> */}
    </>
  );
};

export default AddProduct;
