import { useState } from "react";

import $ from "../../../node_modules/jquery/dist/jquery.min";
import Header from "../Header/Header";
import Shelves from "../Shelves/Shelves";
import Search from "../Header/Search/Search";

const App = () => {
  const [booksList, setBooksList] = useState([]);

  $(document).ready(function () {
    $("#Searchbox").keyup(function (event) {
      if (event.keyCode === 13) {
        Getdata($("#Searchbox").val());
      }
    });
  });

  function Getdata(query) {
    fetch(`https://www.dbooks.org/api/search/${query}`)
      .then((res) => res.json())
      .then((data) => {
        // Create a new array by concatenating the existing state with the new data
        setBooksList([...data["books"]]);
      });
  }

  return (
    <div>
      <Header />
      <Shelves booksList={booksList} />{" "}
    </div>
  );
};

export default App;
