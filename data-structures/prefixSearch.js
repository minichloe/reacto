const book = {
  id: 1,
  text: `Once upon a time, there was a book with words. The book had not been catalogued, but would catch the eyes of onlookers nonetheless.`,
};

// function findWordsStartingWith(book, word) {
//   const bookText = book.text.toLowerCase();
//   const wordL = word.length;
//   const results = [];
//   let i = 0;
//   while (i < bookText.length - wordL) {
//     if (i === 0 || bookText[i - 1] === ' ') {
//       const fragment = bookText.slice(i, i + wordL);
//       if (fragment === word) results.push(i);
//     }
//     i++;
//   }
//   console.log(results);
// }

const tries = {};

function buildtrie(text) {
  const trie = {};
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    let node = trie;
    const starting = i;
    while (text[i] !== ' ' && text[i] !== ',' && text[i] !== '.') {
      const char = text[i];
      node[char] = node[char] || { indexes: [] };
      node[char].indexes.push(starting);
      node = node[char];
      i++;
    }
  }
  return trie;
}

// function findOrCreateTrie(book) {
//   if (tries[book.id]) return tries[book.id];
//   else {
//     const trie = buildtrie(book.text);
//     tries[book.id] = trie;
//     return trie;
//   }
// }

function findOrCreateTrie(book) {}
