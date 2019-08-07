import React from "react";

function Request () {
    return (
        <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card">
            <div className="card-content">
              <div className="card-action teal lighten-1 white-text" style={{paddingTop: '0', paddingBottom: '5px'}}>
                <h4>Request</h4>
              </div><br />

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

              <div className="form-field" style={{borderBottom: '1px solid #9e9e9e'}}>
                <label htmlFor="select">Choose an interest rate (Optional)</label>
                <select style={{display: 'unset'}}>
                  <option value disabled selected />
                  <option value={1}>5%</option>
                  <option value={2}>10%</option>
                  <option value={3}>15%</option>
                  <option value={3}>20%</option>
                </select>
              </div><br />

              <a class="waves-effect waves-light btn" href="api/request">Request</a>

            </div>
          </div>
        </div>
      </div>
    );
}

export default Request;