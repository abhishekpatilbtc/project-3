import React from "react";
import "./card.css";

function Card() {
    return (
        <div className="col s12 m7">
            <div className="card horizontal">
                <div className="card-image">
                    <img src={require("./image.png")} alt="avatar" style={{borderRadius: '50%', height: '150px', width: '150px'}} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h5>Isadora Mandelstam (You)</h5>
                        <p>Total balance: - $25</p>
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light btn" id="request" href="../components/Request_Send/request_send">Request</a>
                        <a className="waves-effect waves-light btn" href="../components/Request_Send/request_send">Send</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;