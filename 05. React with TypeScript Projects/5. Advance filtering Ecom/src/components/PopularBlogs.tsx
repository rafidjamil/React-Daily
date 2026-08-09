import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {
  const blogs = [
    {
      title: "My Amazing Blog Title 1",
      author: "Jordan",
      likes: 142,
      comments: 44,
    },
    {
      title: "My Amazing Blog Title 2",
      author: "John",
      likes: 153,
      comments: 25,
    },
    {
      title: "My Amazing Blog Title 4",
      author: "HuXn",
      likes: 50,
      comments: 14,
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 mt-5">
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Popular Blogs</h2>
          <p className="mt-1 text-sm text-slate-500">Latest stories and insights from the shop.</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-600">
          Trending
        </span>
      </div>
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <article key={index} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-slate-900">{blog.title}</h3>
              <span className="text-xs uppercase tracking-[0.24em] text-slate-500">{blog.author}</span>
            </div>
            <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 text-slate-600">
                <ThumbsUp size={16} /> {blog.likes}
              </span>
              <span className="inline-flex items-center gap-2 text-slate-600">
                <MessageCircle size={16} /> {blog.comments}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PopularBlogs;