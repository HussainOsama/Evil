let floors = 4; //how many floors

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
  if(nFloors < 1){
    console.log("You have enter a wrong mu,ber");
  }else{
    let array = createArray(nFloors)
  }
}





function createArray(nFloors){
  let x = 1;
  let array = [1]
  while(nFloors > 1){
    x = x + 2;
    array.push(x)
    nFloors --
  }
  return array
}


function doTheTower(array){
  let newArray = array.map(element => {
    let star = ''
    for(i=0 ; i < element ; i++ ){
      star = star + '*'
    }
    return star
  });
  return newArray
}



console.log(doTheTower([ 1, 3, 5, 7, 9, 11, 13]));

console.log(createArray(6));

console.log(doTheTower([ 1, 3, 5, 7, 9, 11 ]));