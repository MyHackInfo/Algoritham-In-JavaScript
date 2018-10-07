function reverseWords(string){
  var wordsArr=string.split(' ');
  var reverseWordsArr=[];
  wordsArr.forEach(word =>{
    var reverseword='';
    for(var i=word.length -1;i>=0;i--){
      reverseword +=word[i];
    }
    reverseWordsArr.push(reverseword);
  });
  return reverseWordsArr.join(' ');
}
console.log(reverseWords('this is good'));
