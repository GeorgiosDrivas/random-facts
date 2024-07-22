import { handleChangeFact } from './components/handleFact';
import {useEffect, useState} from 'react';
import './index.css';

export const App = () => {
  const [fact, setFact] = useState("");

  useEffect(() => {
    handleChangeFact(setFact);
  },[])

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto">
          <div className="wrap d-flex justify-content-center align-items-center">
            <div className="quote_wrap text-center">
              <h1 className="title mb-5 position-relative text-uppercase fw-bold">
                Fun Fact!
              </h1>
              <div className="mb-5">
                <p id="currentFact">{fact}</p>
              </div>
              <button onClick={() => handleChangeFact(setFact)} className="btn btn-primary" id="newFact">
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}