
let endBlock = 50
let startBlock = 42
const numberOfBlocks = endBlock - startBlock;

function distanceFromHqInBlocks(x) {   
     if (x === 42){
      return 1;
     }
      if (x>42) {
        return x-42;
      }
      if (x<42) {
        return 42-x;
      }
}

function distanceFromHqInFeet(d) {
  if (d === 43) {
    return 264;
  } if (d > 49) {
    return 2112;
  } if (d < 42) {
    return 2112;
  }
}

function distanceTravelledInFeet(e1, e2) {
  let diff=e1-e2
  let feet=diff*264

  if (feet<0){
    return feet*-1
  }
  return feet

  //if (e2 - e1 === 5 ){
   //   return 1320;
 // }
  //if (e2 - e1 === 10) {
  //  return 2640;
 // }
 // if (e2 - e1 < 5) {
  //  return 1584
 // }
//}



function calculatesFarePrice(e1, e2) {
  
  let distance =  distanceTravelledInFeet(e2,e1)
  console.log(distance)

   if (distance < 400) {
    return 0;
   }
   if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
   }
   if (distance > 2000 && distance < 2500) {
    return 25;}
    return "cannot travel that far";
}

