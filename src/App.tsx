import React from "react";
import JSONInput from "./components/JSONInput";
import ErrorBoundary from "./ErrorBoundary";
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
  <div className="Container">
    <h1>GDD agreement comparison visualiser</h1>

    <ErrorBoundary>
      <JSONInput />
    </ErrorBoundary>

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
  </div>
);

export default App;
