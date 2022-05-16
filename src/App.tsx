import React from "react";
import Table from "./components/Table";
import data from "./ER_BA_GEO.json";
import "./styles.scss";

export interface IComparison {
  [fileName: string]: string;
}
export interface IData {
  Id: number;
  File_name: string;
  Group: string;
  Agreement_arithmetic: IComparison;
  Agreement_geometric: IComparison;
}
export interface IAllData {
  [fileName: string]: IData;
}

const App = () => (
  <>
    <div className="Container">
      <h1>GDD agreement comparison visualiser</h1>
      <Table data={data} variant="arithmetic" />
      <Table data={data} variant="geometric" />
      <Table data={data} variant="arithmetic" stretchValues />
      <Table data={data} variant="geometric" stretchValues />
    </div>
    <div className="Footer">
      <a
        href="https://github.com/michalpuskel/diplomka"
        target="_blank"
        rel="noreferrer"
      >
        Michal Puškel
      </a>
      <span>FMFI UK 2022</span>
    </div>
  </>
);

export default App;
