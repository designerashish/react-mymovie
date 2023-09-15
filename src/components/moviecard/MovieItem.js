function MovieItem({ item }) {
  
   if (!item.poster_path) {
     // If poster_path is null, return null to skip rendering the component
     return null;
   }
return (
  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
        />
      </div>
      <div
        className="card-back"
        
      >
        <h1>{item.name || item.title}</h1>
        <p>{item.overview}</p>
      </div>
    </div>
  </div>
);
}

export default MovieItem