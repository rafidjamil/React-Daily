import { useState } from "react";
import type { ChangeEvent } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { MdSort } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { data } from "../utlis/data";

const Tables = () => {
  const [projects, setprojects] = useState(data);
  const [dropdownVisible, setDropDown] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortconfig, setsortconfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);
  const [filters, setFilters] = useState({
    name: "",
    country: "",
    email: "",
    project: "",
    status: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const sortProjects = (key: string) => {
    const sortProjects = [...projects];
    if (
      sortconfig &&
      sortconfig.key === key &&
      sortconfig.direction === "ascending"
    ) {
      sortProjects.sort((a: any, b: any) => (a[key] > b[key] ? -1 : 1));
      setsortconfig({ key, direction: "descending" });
    } else {
      sortProjects.sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1));
      setsortconfig({ key, direction: "acsending" });
    }
    setprojects(sortProjects);
  };

  const handleSortOptionClick = (key: string) => {
    sortProjects(key);
    setDropDown(false);
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(updatedFilters);

    const filteredProjects = data.filter(
      (project: any) =>
        (searchQuery === "" ||
          Object.values(project).some((value) =>
            String(value).toLowerCase().includes(searchQuery.toLowerCase()),
          )) &&
        (updatedFilters.name === "" ||
          project.client
            .toLowerCase()
            .includes(updatedFilters.name.toLowerCase())) &&
        (updatedFilters.country === "" ||
          project.country
            .toLowerCase()
            .includes(updatedFilters.country.toLowerCase())) &&
        (updatedFilters.email === "" ||
          project.email
            .toLowerCase()
            .includes(updatedFilters.email.toLowerCase())) &&
        (updatedFilters.project === "" ||
          project.project
            .toLowerCase()
            .includes(updatedFilters.project.toLowerCase())) &&
        (updatedFilters.status === "" ||
          project.status
            .toLowerCase()
            .includes(updatedFilters.status.toLowerCase())),
    );

    setprojects(filteredProjects);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="p-4 w-[93%] ml-[5rem]">
      {/* sorting */}
      <div className="relative flex">
        <div className="flex item-center mb-5">
          <button
            onClick={() => setDropDown(!dropdownVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <BiSort className="mr-[0.3rem]" />
            Sort
            <AiOutlineDown className="ml-2" />
          </button>
          {dropdownVisible && (
            <div className="absolute left-0 mt-10 bg-gray-800 border bordor-gray-700 rounded shadow-lg">
              <button
                onClick={() => handleSortOptionClick("client")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Name
              </button>
              <button
                onClick={() => handleSortOptionClick("country")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Country
              </button>
              <button
                onClick={() => handleSortOptionClick("date")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Date
              </button>
            </div>
          )}
        </div>
        <div className="relative ml-4 w-full">
          <button
            onClick={() => setFilterVisible(!filterVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <MdSort className="mr-[0.3rem]" />
            Filter <AiOutlineDown className="ml-2" />
          </button>
          {filterVisible && (
            <div className="absolute left-0 bg-gray-800 border border-black-700 rounded shoadow-lg p-4">
              <div className="mb-2">
                <label className="block text-white">Filter By Name: </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-900 text-white rounded p-2 w-full"
                  value={filters.name}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="mb-2">
                <label className="block text-white">Filter By Country: </label>
                <input
                  type="text"
                  name="country"
                  className="bg-gray-900 text-white rounded p-2 w-full"
                  value={filters.country}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="mb-2">
                <label className="block text-white">Filter By Email: </label>
                <input
                  type="text"
                  name="email"
                  className="bg-gray-900 text-white rounded p-2 w-full"
                  value={filters.email}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="mb-2">
                <label className="block text-white">Filter By Project: </label>
                <input
                  type="text"
                  name="project"
                  className="bg-gray-900 text-white rounded p-2 w-full"
                  value={filters.project}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="mb-2">
                <label className="block text-white">Filter By Status: </label>
                <input
                  type="text"
                  name="status"
                  className="bg-gray-900 text-white rounded p-2 w-full"
                  value={filters.status}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Table */}
      <table className="w-full table-auto rounded border border-gray-700 text-white">
        <thead>
          <tr>
            <th className="px-5 py-3 text-left">Image</th>
            <th className="px-5 py-3 text-left">Name</th>
            <th className="px-5 py-3 text-left">Country</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">Project Name</th>
            <th className="px-5 py-3 text-left">Task Progress</th>
            <th className="px-5 py-3 text-left">Status</th>
            <th className="px-5 py-3 text-left">Date</th>
            <th className="px-5 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProjects.map((project, _index) => (
            <tr key={_index}>
              <td className="px-4 py-2">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-[3rem] h-[3rem]"
                />
              </td>
              <td className="px-4 py-2">{project.client}</td>
              <td className="px-4 py-2">{project.country}</td>
              <td className="px-4 py-2">{project.email}</td>
              <td className="px-4 py-2">{project.project}</td>
              <td className="px-4 py-2">
                <div className="w-24 h-2 bg-gray-700 rounded">
                  <div className="h-2 bg-green-500 rounded"></div>
                </div>
              </td>
              <td className="px-4 py-2 w-[10rem]">
                <span>{project.status}</span>
              </td>
              <td className="px-4 py-2">{project.date}</td>
              <td className="px-4 py-2">
                <div className="relative">
                  <BsThreeDots className="cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <button disabled={currentPage=== 1} onClick={()=>handlePageChange(currentPage -1)} className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">
          Previous
        </button>
        <span className="px-4 py-2 text-white">Project {currentPage} of {totalPages}</span>
         <button disabled={currentPage=== totalPages} onClick={()=>handlePageChange(currentPage +1)} className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Tables;
