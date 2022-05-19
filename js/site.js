//get values from the user.  We need to get Fizz and the Buzz value.
function getValues() {

    //get the user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        //call fizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);

        // call displayNumbers
        displayData(fbArray);
    } else {
        alert("You must enter Integers only")
    }

    //take the return from fizzBuzz and displayData to write the values to the screen

}
//do fizz buzz
function fizzBuzz(fizzValue, buzzValue) {

    let returnArray = [];

    //write a loop from 1 to 100 (MIC DROP!!!)
    
    for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzValue == 0 ? 'Fizz' : "") + (i % buzzValue == 0 ? 'Buzz' : "") || i)
        returnArray.push(value);
    }
    return returnArray;
}

//loop over the array and create a tablerow for each item.
function displayData(fbArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template itself
    let templateRow = document.getElementById("fbTemplate");

    //clear the table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        //grab just the <td> and put them in an array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];

        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];

        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];

        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }

    //add all the rows to the table.

}