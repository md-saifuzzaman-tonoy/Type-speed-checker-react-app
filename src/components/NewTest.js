import React from "react";
import { Link } from "react-router-dom";
const NewTest = ({
  endTestData,
  startTestData,
  handleChange,
  speedTest,
  result,
  test,
}) => {
  return (
    <div className="container text-center">
      <div className="header">
        <h1>Typing speed test</h1>
      </div>
      <div className="result-area">
        <Link to="/all-results" className="btn">
          See Previous Results
        </Link>
        {/* if user make an input on the text area then show the result */}
        <h3 className="result">
          {endTestData.text
            ? result.result
            : "start the test and write to see result"}
        </h3>
      </div>
      <div className="random-text">
        <p className="form-control">{startTestData.text}</p>
      </div>
      <div className="typing-area">
        <textarea
          className="textarea"
          // user input text area enabled on start test, otherwise disabled
          disabled={test}
          id="text"
          value={endTestData.text}
          name="text"
          onChange={handleChange}
          rows="7"
          placeholder="Write text here"
        />
      </div>
      <div>
        {/* if test is true start test button appear, when clicked on start test become false
         to show end button to perfom an end task*/}
        {test ? (
          <button id="btn" className="btn" onClick={speedTest}>
            START
          </button>
        ) : (
          <button id="btn" className="btn" onClick={speedTest}>
            END
          </button>
        )}
      </div>
    </div>
  );
};

export default NewTest;
