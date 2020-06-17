import React from 'react';
import logo from './logo.svg';
import './App.css';
import {moviesData} from "./muviesData";
import MovieItem from "./movieItem.jsx";


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            movies: moviesData
        }
    }

    removedMuvie = movie => {
        const updeteMovies = this.state.movies.filter(function (item){
            return item.id !== movie.id
        })
        this.setState({
            movies: updeteMovies
        })

    }

    render() {
        console.log("this", this.state, this)
        return(

    <div className = "conteiner">
            <div className = "row">
                <div className = "col-9">
                    <div className="row">
            {this.state.movies.map (movie => {
            return(
                <div className="col-6 mb-4" key={movie.id}>
                <  MovieItem
            movie={movie}
            removedMuvie={this.removedMuvie}
            />
                </div>
                )
        })}
            </div>
            <div className = "col-3">
                <p>Will Watch: 0</p>
            </div>

        </div>

    </div>
    )
    }
}
export default App;
