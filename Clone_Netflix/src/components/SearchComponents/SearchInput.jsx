import React, { useState } from "react";
import styled from "styled-components";
import { searchMovies } from "../../services/MovieAPI";

const SearchContainer = styled.div`
  margin: 5px;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (query.trim()) {
      const results = await searchMovies(query);
      onSearch(results || []);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Procure por um filme..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </SearchContainer>
  );
};

export default MovieSearch;
