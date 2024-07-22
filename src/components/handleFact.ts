import { Dispatch, SetStateAction } from "react";
import { KEY, URL } from "../api";

const options = {
  method: "GET",
  headers: { "x-api-key": KEY },
};

export const handleChangeFact = (setFact: Dispatch<SetStateAction<string>>) => {
  fetch(URL, options)
    .then((response) => response.json())
    .then((data) => setFact(data[0].fact));
};
