import { useState, useEffect } from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

const TopSellers = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const authorsData: Author[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));
        setAuthors(authorsData);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchData();
  }, []);

  const handleFollowClick = (index: number) => {
    setAuthors((prevAuthors) =>
      prevAuthors.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Top Sellers</h2>
          <p className="mt-1 text-sm text-slate-500">Follow high-performing sellers and stay updated.</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-600">
          Top 5
        </span>
      </div>

      <ul className="space-y-4">
        {authors.map((author, index) => (
          <li key={index} className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-4">
              <img
                src={author.image}
                className="h-14 w-14 rounded-full object-cover"
                alt={author.name}
              />
              <div>
                <p className="font-semibold text-slate-900">{author.name}</p>
                <p className="text-sm text-slate-500">Featured seller</p>
              </div>
            </div>
            <button
              onClick={() => handleFollowClick(index)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                author.isFollowing
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-900 border border-slate-300 hover:bg-slate-100"
              }`}
            >
              {author.isFollowing ? "Following" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;