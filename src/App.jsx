import './App.css';
import Header from './layouts/Header';
import { useState } from "react";
import Result from "components/Result";
import MovieCard from "./components/MovieCard/index.js";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination/Pagination.jsx";

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [noResult, setNoResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const API_KEY = '8523cbb8';
  const API_URL = 'https://www.omdbapi.com';

  const handleSearch = async (searchTerm, page=1) => {
    setNoResult(false);
    setQuery(searchTerm);
    setLoading(true);
    if(searchTerm.length < 3) {
      setLoading(false);
      setMovies([]);
      setTotalElements(0);

      return;
    }
    try {
      const response = await fetch(`${API_URL}?apiKey=${API_KEY}&s=${searchTerm}&page=${page}`);
      const data = await response.json();
      if(data["Response"] === 'True') {
        setNoResult(false)
        setMovies(data["Search"]);
        setTotalElements(data["totalResults"]);
      } else {
        setMovies([]);
        setTotalElements(0);
        setNoResult(true)
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setNoResult(true)
      setLoading(false);
    }
  };
  
  const onPageChange = (page) => {
    setCurrentPage(page);
    handleSearch(query,page);
  }

  const noResultFound = () => {
    if(noResult === true) {
      return (
        <div
          className={'warning text-info'}
        >
          <span className={''}>No result found</span>
        </div>
      )
    }
    return (
      <div className={'info text-info'}>
        <span className={''}>Type in search to get movies</span>
      </div>
    )
  }

  return (
    <div className={'container'}>
      <Header handleSearch={handleSearch} query={query}/>
      {totalElements ?
        <Result
          query={query}
          totalElements={totalElements}
        /> : null
      }
      {totalElements === 0 ? noResultFound() : null}
      <div className={'movie-container'}>
        {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID}/>
        ))}
      </div>
      {totalElements ?  <Pagination
        onPageChange={onPageChange}
        currentPage={currentPage}
        totalElements={totalElements}
      /> : null }

      {loading && <Loader />}
    </div>
  )
}

export default App
