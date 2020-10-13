import React from 'react';
import logo from './logo.svg';
import './App.css';
import {moviesData} from "./muviesData";
import MovieItem from "./movieItem.jsx";
import   {API_URL, API_KEY_3} from "./units/api"
import MovieTabs from "./movieTabs"


class App extends React.Component{
    constructor() {
        super();
        this.state = {
             movies: [],
            moviesWillWatch: [],
            sort_by: "revenue.desc"
        }
        console.log("constructor")
    }
    componentDidMount() {
        console.log("didMount")
        this.getMovies()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("didUpdete")
    console.log("prev", prevProps, prevState)
    console.log("this", this.props, this.state)
    if(prevState.sort_by === this.state.sort_by) {
        console.log("call api")
        this.getMovies()
    }

    }
    getMovies = () =>{
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`).then((response) =>{
        console.log("then")
        return response.json()
    }).then((data) =>{
        console.log("data", data)
        this.setState({
            movies: data.results
        })
    })

    }

    removedMuvie = movie => {
        const updeteMovies = this.state.movies.filter(function (item){
            return item.id !== movie.id
        })
        this.setState({
            movies: updeteMovies
        })

    }

    addMovieToWillWatch = movie =>{
        // console.log(movie)
        // this.moviesWillWatch.push(movie)
        // const moviesWillWatch = [...this.state.moviesWillWatch]
        // updeteMovies.push(movie)

        const updeteMovies = [...this.state.moviesWillWatch, movie]

        this.setState({
        moviesWillWatch: updeteMovies
        })
    }

    removedMuvieFromWillWatch = movie => {
        const updeteMoviesWillWatch = this.state.moviesWillWatch.filter(function (item){
            return item.id !== movie.id
        })
        this.setState({
            moviesWillWatch: updeteMoviesWillWatch
        })

    }

    updateSortBy = value => {
        this.setState({
            sort_by: value
        })
    }

    render() {
        // console.log("this", this.state, this)
        console.log("render", this.state.sort_by)
        return(


    <div className = "conteiner">
            <div className = "row mt-4">
                <div className = "col-9">
                    <div className="row mb-4">
                    <div className ="col-12">
                    <MovieTabs
                    sort_by={this.state.sort_by}
                    updateSortBy={this.updateSortBy}
            />
            {this.state.movies.map (movie => {
            return(
                <div className="col-6 mb-4" key={movie.id}>
                <  MovieItem movie={movie}
                removedMuvie={this.removedMuvie}
                addMovieToWillWatch={this.addMovieToWillWatch}
                removedMuvieFromWillWatch={this.removedMuvieFromWillWatch}
            />
                </div>
                )
        })}
            </div>
            </div>
            </div>
            <div className = "col-3">
                <p>Will Watch: 0 {this.state.moviesWillWatch.length}</p>
            </div>


        </div>
    </div>
    )
    }
}
export default App;
// console.log (moviesData)
// function App() {
//     return <div>{moviesData[1].title}</div>
// }

// import React from "react";
// import ReactDOM from "react-dom";
// import  "./styles.css";
//
// const movie = {
//     titile: "Avengers: Infinity War",
//     vote_average: 8.5,
//     image: "https://kartinki-dlya-srisovki.ru/wp-content/uploads/2019/05/kartinki-shchenyachiy-patrul-1.jpg",
//     overview: "As the Avengers and ......... "
// }
// function Image(props) {
//     return <img width="100%" src={props.src} alt={props.alt}/>
//
// }
// class MovieItem extends React.Component{
//     constructor() {
//         super();
//         this.state={
//             show: false,
//             like: false
//         }
//     }
//
//     toggleOveriew = () => {
//         this.setState({
//             show: !this.state.show
//         })
//     }
//     handleLike = () => {
//         this.setState({
//             like: !this.state.like
//         })
//
//     }
//
//     render() {
//         const {data: {title, vote_average, image, overview }} = this.props
//         return(
//             <div style={{width: "300px"}}>
//     <Image src={image} alt={title} />
//         <p>{title}</p>
//         <p>{vote_average}</p>
//         <div style={{display: "flex", justifyContent: "space-between" }}>
//     <button type="button" onClick={this.toggleOveriew}>
//             {this.state.show ? "hide" : "show"}
//             </button>
//             <button type="button"
//         onClick={this.handleLike}
//         className = {this.state.like ?  "btn--like" : "" }
//             >
//
//             Like
//             </button>
//             </div>
//         {this.state.show ? <p>{overview} </p> : null
//         }
//     </div>
//
//
//     )
//
//     }
// }
// function App() {
//     return(
//         <div>
//         <MovieItem data={movie}/>
//     </div>
// )
// }
//
//
//
//
//

//

