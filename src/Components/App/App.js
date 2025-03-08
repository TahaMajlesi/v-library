import { useState } from "react";
import Header from "../Header/Header";
import Shelves from "../Shelves/Shelves";

export function Getdata(query) {
  fetch(`https://www.dbooks.org/api/search/${query}`)
    .then((res) => res.json())
    .then((data) => {});
}

const App = () => {
  const [booksList, setBooksList] = useState("");
  return (
    <>
      <Header />
      <Shelves booksList={booksList} />{" "}
    </>
  );
};

export default App;
