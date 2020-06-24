// set values for all the ID in the HTML file.
var form = document.getElementById("sizePicker");
var rows = document.getElementById("inputHeight");
var cells = document.getElementById("inputWidth");
var color = document.getElementById("colorPicker");
var canvas = document.getElementById("pixelCanvas");

// sets up a function that will be called whenever the submit is clicked and will run the function.
form.addEventListener("submit", function(event) {
    // the innerHTML is to cleare the canves from the old table, reset it.
    canvas.innerHTML = "";
    // The preventDefault() method cancels the default action that belongs to the event will not occur.
    event.preventDefault();
    // to call the function that make the table.
    makeGrid();
});

// to Create a Grid in the canvas first for loop for hight the second is for the number of cell.
function makeGrid() {
    var row = "";
    for (var n = 0; n < rows.value; n++) {
        // The insertRow() method creates an empty row element and adds it to a canvas.
        row = canvas.insertRow(0);
        for (var m = 0; m < cells.value; m++) {
            // The insertCell() method inserts a cell into the current row.
            row.insertCell(0);
            // sets up a function that will be called whenever you click a cell in the canvas.
            canvas.addEventListener("click", function(event) {
                // The HTML <td> element defines a cell of a table that contains data.
                if (event.target.nodeName === "TD") {
                    // if he select the Cell, it will add style change a backgrond color with the same value as the color picker.
                    event.target.style.backgroundColor = color.value;
                }
            });
            // sets up a function that will be called whenever you dblclick a cell in the canvas.
            canvas.addEventListener("dblclick", function(event) {
                if (event.target.nodeName === "TD") {
                    // if he select the Cell, it will add style change a backgrond color to white.
                    event.target.style.backgroundColor = "#ffffff";
                }
            });
        }
    }
}
