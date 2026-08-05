import React, { useEffect, useState } from "react";
import { useBlogs } from "./BlogsContext";
import type { Blog } from "./Types";

interface BlogFormProps {
  existingBlog?: Blog | null;
  onClose: () => void;
}
const BlogsForms: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setdescription] = useState(existingBlog?.description || "");
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setdescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const blog: Blog = {
      id: existingBlog?.id ?? Date.now(),
      title,
      description,
      image,
      time,
    };

    if (existingBlog) {
      updateBlog(blog);
    } else {
      addBlog(blog);
    }
    onClose();
  };

  return (
    <div className="w-full rounded-[28px] bg-white p-6 shadow-xl shadow-slate-300">
      <div className="mb-5 border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-semibold text-slate-950">
          {existingBlog ? "Edit Blog" : "Add New Blog"}
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Use this form to save your blog details quickly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Title</span>
          <input
            type="text"
            placeholder="Blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">Description</span>
          <textarea
            placeholder="Write a short description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            rows={4}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Image URL</span>
            <input
              placeholder="https://..."
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Time</span>
            <input
              placeholder="2 min read"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
          </label>
        </div>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-3xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-3xl bg-slate-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Save Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogsForms;
