import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data/data";
import NewTest from "./components/NewTest";
import AllTestResults from "./components/AllTestResults";
import Error from './Error'

const App = () => {
  // type speed start text, time and user input text and time, and result state defination
  const [test, setTest] = useState(true);
  const [startTestData, setStartTestData] = useState({
    text: "A random text will appear here, when you click the start button, you have to write it on the text box.",
    startTime: "",
  });
  const [endTestData, setEndTestData] = useState({
    text: "",
    endTime: "",
  });
  const [result, setResult] = useState({
    id: "",
    date: "",
    result: "",
  });

  //user input texts saving, when text area is enabled at test start
  function handleChange(event) {
    const { name, value } = event.target;
    setEndTestData((prev) => {
      return {
        ...prev,
        [name]: value,
        endTime: new Date().getTime(),
      };
    });
  }

  //SpeedTest function for enabling test to write and ending the test to show result
  const speedTest = () => {
    //when start test clicked
    if (test) {
      //setting everything to it's default value and enabling textarea
      setEndTestData({
        text: "",
        endTime: "",
      });
      setResult({
        id: "",
        date: "",
        result: "",
      });
      setTest(false);
      //genarating random text for the test and saving the start time
      setStartTestData((prev) => {
        return {
          ...prev,
          text: data[Math.floor(Math.random() * data.length)],
          startTime: new Date().getTime(),
        };
      });
    }
    //completing the test and showing result
    else if (!test) {
      setTest(true);
      const givenWords = startTestData.text.split(" ");
      const writtenWords = endTestData.text.split(" ");
      const timeTaken = (endTestData.endTime - startTestData.startTime) / 1000;
      function compareText(texts1, texts2) {
        let count = 0;
        texts1.forEach((each, index) => {
          if (each === texts2[index]) {
            count += 1;
          }
        });
        return (count / writtenWords.length) * 100;
      }

      const date = new Date();
      const getId = date.getTime();
      const getDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
      const getResult = `${Math.floor(
        (writtenWords.length / timeTaken) * 60
      )} words per minutes,
                        with ${Math.floor(
                          compareText(givenWords, writtenWords)
                        )}% accuracy`;

      endTestData.text &&
        setResult((prev) => {
          return {
            ...prev,
            id: getId,
            date: getDate,
            result: getResult,
          };
        });
    }
  };

  //saving results to an array state decleration
  const [allResults, setAllResults] = useState([]);
  useEffect(() => {
    //saving results to an array
    endTestData.text &&
      setAllResults((prev) => {
        return [...prev, result];
      });
  }, [result]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="type-speed-checker-react-app"
          element={
            <NewTest
              endTestData={endTestData}
              startTestData={startTestData}
              handleChange={handleChange}
              speedTest={speedTest}
              result={result}
              test={test}
            />
          }
        />
        <Route
          path="all-results"
          element={<AllTestResults allResults={allResults} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
