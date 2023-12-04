import React, { useState, useEffect } from "react";
import DataTable from "./table";
import userData from "./data/data.json";

function Main() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(userData);
  }, []);

  return (
    <div>
      <div>
        <nav className="navbar">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-items">
              <a className="nav-item nav-link active" href="#"> Reeco </a>
              <a className="nav-item nav-link" href="#"> Store </a>
              <a className="nav-item nav-link" href="#"> Orders </a>
              <a className="nav-item nav-link" href="#"> Analytics </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="types-parent" >
        <div className="types" >
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box right"></div>
        </div>
      </div>
      <div className="containerr">
        <div className="containerr-body">
          <div className="filter">
            <div className="col-xs-6">
              <i className="fa fa-search" />
              <input type="search" className="form-control" placeholder="Search..." />
            </div>
            <div>
              <button className="btn-btn">Add Item</button>
            </div>
          </div>
          <DataTable data={jsonData} />
        </div>
      </div>
    </div>
  );
}

export default Main;
