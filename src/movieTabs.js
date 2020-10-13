import React from "react";
const MovieTabs = props => {
    const {sort_by, updateSortBy} = props

    const handleClick = value =>  {
        return () =>{updateSortBy(value)}
    }
    const getClassLink = value => {
        return `nav-link ${sort_by === value ? "active" : ""}`

        }

    return (
        <ul className="tabs nav nav-pills">
        <li className="nav-item">
        <div
            className={getClassLink("popularity.desc")}
        onClick= {handleClick("popularity.desc")}
        >
        Popularity desc
    </div>
    </li>
    <li className="nav-item">
        <div className={`nav-link ${sort_by === "revenue.desc" ? "active" : ""
    }`}
    onClick= {handleClick("revenue.desc")}
   >
        Revenue desc
        </div>
        </li>
        <li className="nav-item">
        <div className={`nav-link ${sort_by === "vote_avetage.desc" ? "active" : ""
    }`}
    onClick= {handleClick("vote_avetage.desc")}
    // onClick={() => {
    //     updateSortBy("vote_avetage.desc")
    // }}
    >
        Vote avetage desc
        </div>
        </li>
        </ul>

)
}
export default MovieTabs