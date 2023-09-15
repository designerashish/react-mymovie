import './App.css';
import Header from './components/Header';
import Search from "./components/ui/Search";
import Moviegrid from "./components/moviecard/Moviegrid";
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [items, setItems] = useState([]); // data items from API
  const [isLoading, setisLoading] = useState(true); // Data from has been loaded or not
  const [query, setQuery] = useState(''); // Data from has been loaded or not

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWFlODQzNWJhZjcyNDBjZDYxZDdmYmY3NzIyMzY5NyIsInN1YiI6IjViZmQwOGRlMGUwYTI2MzZjZTAyNzU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5uNlgiavyqes6VPll1eihzjZ13ccBs5957Hd8evMKBo",
    },
  };

  useEffect(() => {
    const getmovieData = async () => {
      try {
        const movieData = await axios.get(
          `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=true&language=en-US&page=1`,
          options
        );
        const data = movieData.data.results;

        setItems(data);
        console.log(items);
        setisLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getmovieData();
  }, [query]);

  return (
    <div className="container">
      <Header></Header>
      <Search getQuery = {(q)=>setQuery(q)}></Search>
      <Moviegrid isLoading={isLoading} items={items}></Moviegrid>
    </div>
  );
}

export default App;
