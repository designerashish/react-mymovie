import Spinner from "../ui/Spinner";
import MovieItem from "./MovieItem";
function Moviegrid({ isLoading , items}) {
   
  return isLoading ? (
    <Spinner></Spinner>
  ) : (
    <section className="cards">
      {Array.isArray(items)
        ? items.map((item) => <MovieItem key={item.id} item={item}></MovieItem>)
        : <p>No Movies found</p>}
    </section>
  ); ;
  
  

}

export default Moviegrid;
