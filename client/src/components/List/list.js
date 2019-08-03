import React from "react";

function List() {
    return (
        <ul className="collection">
        <a className="btn-floating btn-small waves-effect waves-light red" href="../Add/add"><i className="material-icons">add</i></a>
        <li className="collection-item avatar">
          {/* <img src="images/yuna.jpg" alt="" class="circle"> */}
          <i className="material-icons circle">account_circle</i>
          <span className="title">Aunt Meredith</span>
          <p>You owe them $50</p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <span className="title">Bob from work</span>
          <p>Owes you $25</p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle green">insert_chart</i>
          <span className="title">Uncle Anirudh</span>
          <p>No current loans</p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle red">play_arrow</i>
          <span className="title">Becky</span>
          <p>Owes you $10</p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      </ul>
    );
}

export default List;