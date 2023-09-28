function distanceFromHqInBlocks(pickuplocation) {
    const headquartersLocation = 42;
    const distanceInBlocks = Math.abs(pickuplocation-headquartersLocation);
    return distanceInBlocks;
}

function distanceFromHqInFeet(destination) {
    const blockLengthInFeet = 264; // Length of one block in feet
    const hqLocation = 42; // Scuber headquarters location
    const distanceInBlocks = Math.abs(destination - hqLocation);
    const distanceInFeet = distanceInBlocks * blockLengthInFeet;
    return distanceInFeet;
  }
  

  function distanceTravelledInFeet(startBlock,endBlock){
    const blockLengthInFeet = 264;
    const distanceInBlocks = Math.abs(endBlock-startBlock);
    const distanceInFeet = distanceInBlocks * blockLengthInFeet;
    return distanceInFeet;

  }

  // console.log(distanceTravelledInFeet(43,48))

  
  function calculatesFarePrice (start, destination) {
  const distanceInFeet = distanceTravelledInFeet (start, destination);
  
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <=2000) {
    return (distanceInFeet - 400) * 0.02; 
  } else if (distanceInFeet >2000 && distanceInFeet <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }

}
  