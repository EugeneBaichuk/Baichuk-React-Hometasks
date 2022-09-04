import { useState } from "react"; 
import React from "react";

import "./style.scss";

const InputSearch = ({onSearch}) => {

  const [searchValue, setSearchValue] = useState('');

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <input type="text" id="searchField" placeholder="Type here to search..." 
    value={searchValue}
    onChange={changeSearchValue}/>
  );
};

export default InputSearch;
