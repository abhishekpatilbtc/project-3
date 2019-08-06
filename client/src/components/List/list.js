import React from "react";

function List() {
    return (
      <ul className="collection">
      <a className="btn-floating btn-small waves-effect waves-light red" href="/add"><i className="material-icons">add</i></a>
        
        <li className="collection-item avatar">
          <i className="material-icons circle">account_circle</i>
          <span className="title">Aunt Meredith</span>
          <p>You owe them $50</p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>

        

      

      </ul>
    );
}

export default List;