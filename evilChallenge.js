let floors = 8; //how many floors

buildTower(floors); //function call

//print the return using iteration method 😁

/** 
 * 😈 Introduce to you The evil javascript tower 😈
function recieves number of floors to build a tower
the function returns an array as the following

e.g.
*****[tower of 1 floor]*****
[
  '*'
]
*****[tower of 3 floors]*****
[
  '  *  ', 
  ' *** ', 
  '*****'
]
*****[tower of 6 floors]*****
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

function buildTower(nFloors) {
  // Check the input number if exist or not
  if (nFloors < 1) {
    // Input not exist
    console.log("You have enter a wrong mu,ber");
  } else {
    // Input exist
    // create array that contains nFloors of Odd numbers
    let floorsArray = createArray(nFloors);
    let lastelement = floorsArray[floorsArray.length - 1];
    let newArray = floorsArray.map((element) => {
      let stars = "";
      let spaces = createSpaces(lastelement - element);
      for (i = 0; i < element; i++) {
        stars = stars + "*";
      }
      return `${spaces}${stars}${spaces}`;
    });
    console.log(newArray);
  }
}

//This Function will take an integer and return array of odd number
//e.g. createArray(3)  =>  ['1' ,'3', '5']
function createArray(nFloors) {
  let firstFloor = 1;
  let floorsArray = [firstFloor];
  // Check if the nfloors (!= 1) => push the next odd number to the array
  while (nFloors != 1) {
    firstFloor = firstFloor + 2;
    floorsArray.push(firstFloor);
    nFloors--;
  }
  return floorsArray;
}

// This function will create a string of spaces of one side to use it in the tower
function createSpaces(num) {
  var spaces = "";
  for (var i = 0; i < num / 2; ++i) {
    spaces += " ";
  }
  return `${spaces}`;
}
