import $ from "../../../node_modules/jquery/dist/jquery.min";
import "../Header/Search/script.js";

$(document).ready(function () {
  function results() {
    let SearchBox = $("#SearchBox").val();

    fetch(`https://www.dbooks.org/api/search/${SearchBox}`)
      .then(Response.json)
      .then((data) => {
        console.log(data);
      });
  }
});
