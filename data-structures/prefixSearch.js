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
