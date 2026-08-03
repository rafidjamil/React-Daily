import { createContext, useState, useContext } from "react";
import type { Blog } from "./Types";
interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
}
const BlogsContext = createContext<BlogContextType | undefined>(undefined);

export const BlogsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const addBlog = (blog: Blog) => {
    setBlogs([...blogs, blog]);
  };
  const updateBlog = (updateBlog: Blog) => {
    setBlogs(
      blogs.map((blog) => (blog.id === updateBlog.id ? updateBlog : blog)),
    );
  };
  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <BlogsContext.Provider value={{ blogs, updateBlog, deleteBlog, addBlog }}>
      {children}
    </BlogsContext.Provider>
  );
};
export const useBlogs = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogsProvider");
  }
  return context;
};
