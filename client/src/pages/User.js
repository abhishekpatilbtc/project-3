import React from "react";
import Card from "../components/Card/card";
import List from "../components/List/list";

function User() {
    return (
        <div className="container" style={{width: '70%'}}>
            <Card />
            <List />
        </div>
        
    );
}

export default User;