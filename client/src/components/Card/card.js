import React from "react";
import "./card.css";

function Card(props) {
    return (
        <div className="col s12 m7">
            <div className="card horizontal">
                
                <div className="card-image">
                    { props.image ? 
                    <img src={props.image} alt="avatar" style={{borderRadius: '50%', height: '150px', width: '150px', objectFit: 'cover'}} />
                    :
                    <img src={require("./image-1.png")} alt="avatar" style={{borderRadius: '50%', height: '150px', width: '150px'}} />}

                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5>{props.first_name} {props.last_name}</h5>
                        {/* <p>Total balance: - $25</p> */}
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light btn" id="request" href="/request">Add a transaction</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;