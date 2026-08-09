import React from "react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import TopSellers from "./components/TopSellers";
import PopularBlogs from "./components/PopularBlogs";
const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50">
        <SideBar />
        <div className="flex flex-1 flex-col xl:flex-row">
          <main className="flex-1 bg-slate-50">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </main>
          <aside className="w-full xl:w-[28rem] flex-none border-l border-slate-200 bg-slate-50 p-5">
            <TopSellers />
            <PopularBlogs />
          </aside>
        </div>
      </div>
    </Router>
  );
};

export default App;
