import $ from "../../../../node_modules/jquery/dist/jquery.min";
import * as App from "../../App/App.js";

$(document).ready(function () {
  $("#Searchbox").keyup(function (event) {
    if (event.keyCode === 13) {
      App.Getdata($("#Searchbox").val());
    }
  });
});
