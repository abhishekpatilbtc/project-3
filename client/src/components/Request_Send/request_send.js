import React from "react";

function Request () {
    return (
        <div className="row">
        <div className="col s12 m4 offset-m4">
          <div className="card">
            <div className="card-content">
              <div className="form-field">
                <label htmlFor="sum">How much money do you want to request?</label>
                <input type="number" id="sum" />
              </div><br />
              <div className="form-field" style={{borderBottom: '1px solid #9e9e9e'}}>
                <label htmlFor="select">Choose a friend</label>
                <select style={{display: 'unset'}}>
                  <option value disabled selected />
                  <option value={1}>Aunt Meredith</option>
                  <option value={2}>Bob from work</option>
                  <option value={3}>Uncle Anirudh</option>
                  <option value={3}>Becky</option>
                </select>
              </div><br />
              <div className="form-field">
                <label htmlFor="date">Select a due date</label>
                <input type="text" className="datepicker" id="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Request;