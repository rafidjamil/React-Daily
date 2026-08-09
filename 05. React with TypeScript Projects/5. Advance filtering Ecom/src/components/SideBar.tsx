import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";
import"./FilterContext"

interface Products {
  category: string;
}
interface FetchResponse {
  products: Products[];
}

const SideBar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCatagory,
    setSelectedCatagory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
  } = useFilter();
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        const uniqueCategory = Array.from(
          new Set(data.products.map((product) => product.category)),
        );
        setCategories(uniqueCategory);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchCategories();
  }, []);

  const handleMinPriceChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
    };
    const handleMaxPriceChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        setMaxPrice(value? parseFloat(value): undefined)
    }
    const handleRadioChangeCategory = (category:string)=>{
        setSelectedCatagory(category)
    }
    const handleKeywordClick = (keyword: string)=>{
        setKeyword(keyword)
    }
    const handleResetFilter= ()=>{
        setSearchQuery("")
        setSelectedCatagory("")
        setMinPrice(undefined)
        setMaxPrice(undefined)
        setKeyword("")
    }        
  return (
    <aside className="w-72 min-h-screen border-r border-slate-200 bg-white px-6 py-8 text-slate-900">
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Store filters
          </p>
          <h1 className="mt-3 text-3xl font-semibold">Shop by</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Refine your search with categories, price and trending tags.
          </p>
        </div>

        <div className="space-y-5 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-200/70">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Search product
            </label>
            <input
              type="text"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              placeholder="Search product"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-700">Price range</p>
              <span className="text-xs text-slate-500">USD</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="number"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                placeholder="Min"
                value={minPrice ?? ""}
                onChange={handleMinPriceChange}
              />
              <input
                type="number"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                placeholder="Max"
                value={maxPrice ?? ""}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-800">Category</h2>
              <span className="text-xs text-slate-500">
                {categories.length}
              </span>
            </div>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-slate-300"
                >
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    className="h-4 w-4 accent-slate-700"
                    onChange={()=>handleRadioChangeCategory(category)}
                    checked ={selectedCatagory===category}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-3">
              <h2 className="text-sm font-semibold text-slate-800">Keywords</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <button
                  key={index}
                  onClick={()=>handleKeywordClick(keyword)}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleResetFilter} className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Reset filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
