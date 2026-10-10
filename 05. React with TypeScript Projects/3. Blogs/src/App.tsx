// import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { BlogsProvider } from "./components/BlogsContext.tsx";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow.tsx";
import TopicsList from "./components/TopicsList.tsx";
import TrendList from "./components/TrendList.tsx";
import "./index.css";
import { useState } from "react";
import type { Blog } from "./components/Types.tsx";
import Modal from "./components/Modal.tsx";
import BlogsForms from "./components/BlogsForms.tsx";
import ArticleList from "./components/ArticleList.tsx";

const App = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setisModalOpen(true);
  };
  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setisModalOpen(true);
  };

  return (
    <div>
      <BlogsProvider>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Navigation />
          <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
            <section className="rounded-4xl bg-white p-6 shadow-sm shadow-slate-200">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
                    Create and manage your blogs
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm text-slate-500">
                    Use the button below to open a modal and add a new blog entry with better styling.
                  </p>
                </div>
                <button
                  onClick={openModalForNewBlog}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-slate-200/20 transition hover:bg-slate-800"
                >
                  Add new Blog <IoMdAddCircleOutline className="ml-1 text-lg" />
                </button>
              </div>
              <ArticleList onEdit={openModalForEdit} />
              {isModalOpen && (
                <Modal onClose={() => setisModalOpen(false)}>
                  <BlogsForms
                    existingBlog={editingBlog ?? undefined}
                    onClose={() => setisModalOpen(false)}
                  />
                </Modal>
              )}
            </section>
            <div className="space-y-6">
              <PeopleToFollow />
              <TrendList />
              <TopicsList />
            </div>
          </div>
        </div>
      </BlogsProvider>
    </div>
  );
};

export default App;
