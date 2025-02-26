import $ from "../../../../node_modules/jquery/dist/jquery.min";
import results from "../../Shelves/script.js";
$(document).ready(function() {
    $("#Searchbox").keyup(function(event) {
        if (event.keyCode === 13) {
            results();
        }
    });
});