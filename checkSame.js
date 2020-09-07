function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const counter = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    counter[letter] ? counter[letter] += 1 : counter[letter] = 1;
  }
  console.log(counter)
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if(!counter[letter]){
        return false
    }else{
        counter[letter] -= 1
    }
  }
  return true;
}

console.log(anagram('anagram','nagaram'))
