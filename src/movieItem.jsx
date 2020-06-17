import React from "react";

const MovieItem = props => {
  const { movie, removedMuvie } = props;
  console.log(props);
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
          movie.poster_path}`}
        alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{movie.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {movie.vote_average}</p>
          <button type="button" className="btn btn-secondary">
            willWatch
          </button>
        </div>

        <button onClick={removedMuvie.bind(this, movie)}> Delet movie</button>
      </div>
    </div>
  );
};

export default MovieItem;

// import React from "react";
//
// class MovieItem extends React.Component {
//     state = {
//         willWatch: false
//     };
//
//     render() {
//         const {
//             data,
//             deleteMovie,
//             addMovieToWillWatch,
//             deleteMovieFromWillWatch
//         } = this.props;
//         // props.data = {};
//         return (
//
//                 <img
//                     className="card-img-top"
//                     src={`https://image.tmdb.org/t/p/w500${data.backdrop_path ||
//                     data.poster_path}`}
//                     alt=""
//                 />
//                 <div className="card-body">
//                     <h6 className="card-title">{data.title}</h6>
//                     <div className="d-flex justify-content-between align-items-center">
//                         <p className="mb-0">Rating: {data.vote_average}</p>
//                         {this.state.willWatch ? (
//                             <button
//                                 type="button"
//                                 className="btn btn-success"
//                                 onClick={() => {
//                                     this.setState({
//                                         willWatch: false
//                                     });
//                                     deleteMovieFromWillWatch(data);
//                                 }}
//                             >
//                                 Will Watch
//                             </button>
//                         ) : (
//                             <button
//                                 type="button"
//                                 className="btn btn-secondary"
//                                 onClick={() => {
//                                     this.setState({
//                                         willWatch: true
//                                     });
//                                     addMovieToWillWatch(data);
//                                 }}
//                             >
//                                 Will Watch
//                             </button>
//                         )}
//                     </div>
//                     <button
//                         type="button"
//                         onClick={() => {
//                             deleteMovie(data);
//                         }}
//                     >
//                         Delete
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }
//
