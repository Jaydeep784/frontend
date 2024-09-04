import React from "react";

const Categories = () => {
  return (
    <>
      <div className="bg-slate-200 dark:bg-slate-950 px-4 md:mx-0 md:px-16">
      <h1 className="dark:text-white text-black text-base rounded pt-2 md:text-lg md:pt-2">Categories</h1>
      <div className="grid grid-cols-4 gap-4 py-3 px-2 mt-2 border border-gray-400 rounded md:grid-cols-8">
        <div className="bg-lime-400 md:h-20 h-20 w-20 rounded-full pl-2 shadow-lg"> </div>
        <div className="bg-lime-400 md:h-20 h-20 w-20 rounded-full pl-2 shadow-lg"> </div>
        <div className="bg-lime-400 md:h-20 h-20 w-20 rounded-full pl-2 shadow-lg"> </div>
        <div className="bg-lime-400 md:h-20 h-20 w-20 rounded-full pl-2 shadow-lg"> </div>
        <div className="bg-lime-400 md:h-20 h-20 w-20 rounded-full pl-2 shadow-lg"> </div>
        <div className="bg-lime-400 md:h-20 h-20 w-20 rounded-full pl-2 shadow-lg"> </div>
        <div className="bg-lime-400 md:h-20 h-20 w-20 rounded-full pl-2 shadow-lg"> </div>
        <div className="bg-lime-400 md:h-20 h-20 w-20 rounded-full pl-2 shadow-lg"> </div>
      </div>
      </div>
    </>
  );
};

export default Categories;
