import ResturantCard from "./ResturantCard";
import { useState } from "react";
import { resturantsMocks } from "../data";

const filterResturants = (data, filterBy) => {
  return data.filter((item) => item.data.name.toLowerCase().includes(filterBy.toLowerCase()));
};

export const Main = () => {
  let [resturants, setResturants] = useState(resturantsMocks);
  let [searchValue, setSearchValue] = useState("");
  return (
    <div className="container w-full px-4 mx-auto pt-[82]">
      <div className="search-container w-full flex justify-center gap-2 py-4">
        <input
          className="rounded-lg border-2 w-full tablet:w-1/3 border-black px-4 py-2"
          type="text"
          placeholder="search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="btn-blue"
          onClick={() => {
            const filteredData = filterResturants(resturants, searchValue);
            console.log(resturants, searchValue);
            setResturants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-wrapper grid grid-cols-1 gap-2 tablet:grid-cols-2 laptop:grid-cols-4">
        {resturants.map((resturant) => {
          return <ResturantCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </div>
  );
};

export default Main;
