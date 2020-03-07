import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="container">
     <div className="form-box">
      <div className="row">
      <div className="col-md">
          <div className="box">
            <p className="pho">PHOENIX</p>
          </div>
      </div>
      </div>

      <div className="row">
      <div className="col-md">
          <p className="wel">Welcome,</p>
          <p className="text">Please enter your BVN to register</p>
      </div>
      </div>

      <div className="row">
      <div className="col-md">
        <div className="bvn">
        <p className="text-bvn">BVN</p>
        <label for="formGroupExampleInput" className="sr-only">BVN</label>
        <input type="number" className="form-control input-box" id="formGroupExampleInput" placeholder="Enter your BVN"/>
      </div>
      </div>
      </div>

      <div className="row">
      <div className="col-md">
        <button type="button" class="btn btn-lg">REGISTER</button>
      </div>
      </div>

      </div>
      </div>
    </div>
    
  );
}

export default App;
