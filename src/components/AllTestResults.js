import React from "react";
import { Link } from "react-router-dom";
const AllTestResults = ({ allResults }) => {
  return (
    <div className="container">
      <div className="header">
        <h1>Previous Results</h1>
      </div>
      <table className="table">
        <thead className="bg-success">
          <tr>
            <th className="col-md-4">Date</th>
            <th className="col-md-8">Result</th>
          </tr>
        </thead>
        <tbody className="table-success">
          {allResults.map((each) => {
            const { id, date, result } = each;
            return (
              <tr key={id}>
                <td className="col-md-4">{date}</td>
                <td className="col-md-8">{result}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <Link to="/type-speed-checker-react-app" className="btn">
        Return to take New Test
      </Link>
    </div>
  );
};

export default AllTestResults;
