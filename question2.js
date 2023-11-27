// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

function filterWordsWithLetterA(words) {
  var newArray = [];
  
  for(var i = 0; i < words.length; i++) {
    if(words[i].indexOf("a") !== -1) {
      newArray.push(words[i]); 
    }
  }
  
  return newArray;
}

console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]
