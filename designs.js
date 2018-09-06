//Assiging the elements to variables
let cellColor = document.getElementById("colorPicker");
let height= document.getElementById ("inputHeight");
let width = document.getElementById("inputWidth");
let pixelCanvas = document.getElementById("pixelCanvas");
let size = document.getElementById("sizePicker");


//When submit button is clicked, the following happens:
size.onsubmit = function(event){
    removeGrid(); //Clears the grid before starting a new one
    makeGrid(); //Make a new grid after the previous is cleared
    event.preventDefault(); //Does not refresh the page when submit is clicked

 };


 //Function to add colors to the cells
function cellColorer (){
    let colorVal = cellColor.value //sets cellColor value to the var colorVal
    cellColor.addEventListener("click", function() {} ); //Adds click as an event type to cellColor
    this.setAttribute("style" , `background-color:${colorVal}`) //Sets the color depending on the color picker on the website
}   

//Functions to create cells based on input height and width
function makeGrid() {
    //Add rows depending on the value of height
   for (let h=0; h<height.value; h++) {
       let tableRows = pixelCanvas.insertRow(h) 
       //Add cells(columns) depending on the value of width
       for (let w=0; w<width.value; w++) {
            let tableCells = tableRows.insertCell(w);
            //Adds the cellColorer function as an event listener to tableCells, with click as the event type
            tableCells.addEventListener("click" , cellColorer);  
          }

      }
 }

//Function to remove grids before making a new one
function removeGrid() {
    //if grid size is bigger than 0, then reset it
    while (pixelCanvas.rows.length > 0) { 
    pixelCanvas.deleteRow(0)
   }
}
         
                




