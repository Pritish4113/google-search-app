import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = ({hidden}) => {
  const { query } = useParams();
  const [searchQuery, setsearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const handleSearchQuery = (event) => {
    console.log(event);
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    } else if (event._reactName === "onClick" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        id="box"
        className="h-[46px] w-full md:w-[584px] flex items-center px-4 gap-3 border border-[#b7b9bd] hover:bg-white hover:border-[#87888a] rounded-3xl hover:showdow-c focus-within:shadow-c focus-within:border-0"
      >
        <AiOutlineSearch size={18} color="#9aa0a6" />
        <input
          type="text"
          onChange={(e) => setsearchQuery(e.target.value)}
          onKeyUp={handleSearchQuery}
          value={searchQuery}
          autoFocus
          className="grow outline-none text-black/0.87 "
        />
        <div className="flex items-center gap-3">
          {searchQuery && (
            <IoMdClose
              color="#70757a"
              size={24}
              className="cursor-pointer"
              onClick={() => {
                setsearchQuery("");
              }}
            />
          )}
          <img
            className="h-6 w-6 cursor-pointer"
            src={MicIcon}
            alt="search_mic"
          />
          <img
            className="h-6 w-6 cursor-pointer"
            src={ImageIcon}
            alt="search_cam"
          />
        </div>
      </div>
      <div className={`${hidden} flex gap-2 text-[#3c4043] mt-8 justify-center items-center`}>
        <button
          className="h-9 px-4 bg-[#f8f9fa] text-sm border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2}"
          onClick={handleSearchQuery}
        >
          Google Search
        </button>
        <button className="h-9 px-4 bg-[#f8f9fa] text-sm border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2}">
          I'm feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
