import React from "react";

const ListSearch = ({ search, setSearch }) => {
  const handleChange = (e) => setSearch(e.target.value);
  return (
    <div>
      <input value={search} />
    </div>
  );
};

export default ListSearch;
