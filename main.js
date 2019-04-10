// Get input
var filter = document.querySelector("#filter");

// Add lister
filter.addEventListener("keyup", filterNames);

// Filter out list
function filterNames(){
    // Get value of input
    var value = filter.value;

    // Get all names in list
    var names = document.querySelectorAll("li a");

    // Loop through the names
    for (var i = 0; i<names.length; i++){
        // compare names
        if (names[i].innerText.toUpperCase().includes(value.toUpperCase())){
            names[i].parentElement.style.display = "block"
        } else {
            names[i].parentElement.style.display = "none";
        }
    }

}