function binarySearch(numArray,key){
  var middleIdx=Math.floor(numArray.length/2);
  var middleElem=numArray[middleIdx];

  if(middleElem ===key) return true;
  else if (middleElem < key && numArray.length >1) {
    return binarySearch(numArray.splice(middleIdx,numArray.length),key);
  }
  else if(middleElem > key && numArray.length > 1){
    return binarySearch(numArray.splice(0,middleIdx),key);
  }
  else return false;
}
binarySearch([1,2,5,34,77,56,3,88,9,7,34,56,78,23,90],88);
