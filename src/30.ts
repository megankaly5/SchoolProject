function findShortWords(text: string): { words: string[], length: number } {
  const words = text.split(' ');
  let maxLength = 0;
  
  words.forEach(word => {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  });
  
  return { words, length: maxLength };
}

console.log(findShortWords("The quick brown fox jumps over the lazy dog"));
