import { Tally3 } from "lucide-react";
import { useEffect, useState } from "react";
import { FilterProvider, useFilter } from "./FilterContext";
import axios from "axios";
import BookCard from "./BookCard";

const MainContent = () => {
  const { keyword, selectedCatagory, minPrice, maxPrice, searchQuery } =
    useFilter();
  const [products, setproducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentpage, setCurrentPage] = useState(1);
  const [dropdown,setDropDown] = useState(false);
  const itemPerPage = 12;
  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemPerPage}&skip=${(currentpage - 1) * itemPerPage}`;
    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }
    axios
      .get(url)
      .then((response) => {
        setproducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.error("Fetching the data", error);
      });
  }, [currentpage, keyword]);
  const getFilteredProducts = () => {
    let filteredProducts = products;
    if (selectedCatagory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCatagory,
      );
    }
    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice,
      );
    }
    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice,
      );
    }
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    switch (filter) {
      case "Premium":
        return filteredProducts.sort((a, b) => b.price - a.price);
      case "Affordable":
        return filteredProducts.sort((a, b) => a.price - b.price);
      case "Popular":
        return filteredProducts.sort((a, b) => b.rating - a.rating);
      default:
        return filteredProducts;
    }
  };
  const filteredProducts = getFilteredProducts();
  console.log(filteredProducts);
  const totlaProducts = 100;
  const totalPages = Math.ceil(totlaProducts / itemPerPage);
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const getPaginationButton = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentpage - 2);
    let endPage = Math.min(totalPages, currentpage + 2);
    if (currentpage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (2 - currentpage - 1));
    }
    if (currentpage + 2 < totalPages) {
      startPage = Math.min(1, startPage-(2-totalPages-currentpage));
    }
    for(let page = startPage;page <=endPage;page++){
        buttons.push(page);
    }
    return buttons
  };

  return (
    <section className="w-full max-w-6xl px-5 py-6">
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Marketplace
              </p>
              <h1 className="text-3xl font-semibold text-slate-900">
                Discover the best products
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-slate-500">
                Browse premium items, explore trending sellers, and refine results with smarter filters.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700">
                {filteredProducts.length} products
              </span>
              <button
                onClick={() => setDropDown(!dropdown)}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400"
              >
                Sort: {filter}
              </button>
            </div>
          </div>
          {dropdown && (
            <div className="mt-4 inline-flex flex-col rounded-3xl border border-slate-200 bg-white p-3 shadow-lg">
              <button
                onClick={() => {
                  setFilter("Affordable");
                  setDropDown(false);
                }}
                className="w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-100"
              >
                Affordable
              </button>
              <button
                onClick={() => {
                  setFilter("Premium");
                  setDropDown(false);
                }}
                className="w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-100"
              >
                Premium
              </button>
              <button
                onClick={() => {
                  setFilter("Popular");
                  setDropDown(false);
                }}
                className="w-full rounded-2xl px-4 py-3 text-left text-sm text-slate-700 transition hover:bg-slate-100"
              >
                Popular
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <BookCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.thumbnail}
                price={product.price}
                category={product.category}
                rating={product.rating}
              />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600">
              No products match the current filters.
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">Showing {filteredProducts.length} products across {totalPages} pages</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              disabled={currentpage === 1}
              onClick={() => handlePageChange(currentpage - 1)}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            {getPaginationButton().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  page === currentpage
                    ? "bg-slate-900 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              disabled={currentpage === totalPages}
              onClick={() => handlePageChange(currentpage + 1)}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
