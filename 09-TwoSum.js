function twoSum(numArray,sum){
  var pairs=[];
  var hashtable=[];

  for(var i=0;i<numArray.length;i++){
    var currnum=numArray[i];
    var counterpart=sum-currnum;
    if(hashtable.indexOf(counterpart) !== -1){
      pairs.push([currnum,counterpart]);
    }
    hashtable.push(currnum);
  }
  return pairs;
}
twoSum([1,4,6,-1,3,2],5);
