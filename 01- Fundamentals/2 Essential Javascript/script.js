const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const books = getBooks();
/*
//////// -Destructuring
const book = getBook(2);

book;
const { title, author, pages, genres, publicationDate } = book;
console.log(title, author, pages, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre] = genres;

// console.log(primaryGenre, secondaryGenre);

///// -Rest and spread operators
//rest operator
const [primaryGenr, secondaryGenr, ...otherGenres] = genres;

console.log(primaryGenr, secondaryGenr, otherGenres);

//spread operator
const newGneres = [...genres, "sci-fi"];

// console.log(newGneres);

const updatedBook = {
  ...book,
  moviePublishedDate: "2020-01-01",
  pages: 1234, // override existing value
};

// console.log(updatedBook);


////// -Template literals

const summary = `${title}, a ${pages} page book by ${author} and published in ${primaryGenre} on ${publicationDate}`;
// console.log(summary);

//////-Ternaries Operators

const pagerange = pages > 1000 ? console.log("over a thousand") : console.log("less than 1000");

console.log(`This book is ${pagerange} pages long`);

////// -Arrow function

function getYear(str) {
  return str.split("_")[0];
}
console.log(getYear(publicationDate));
// af
// (str) => str.split("_")[0];
const getYear2 = (str) => str.split("_")[0];

////// -Short - Circuting  And logical operators

console.log(true && "Some text");
console.log(false && "Some text");
console.log(hasMovieAdaptation && "has movie adaptation");

// falsy: 0, '', null, undefined, NaN
console.log('jonas' && 'some text');
console.log(0 && 'Some text');

console.log(true || "Some text");
console.log(false || "Some text");

console.log(book.translations.spanish || "No translation");

//
const countWrong = book.reviews.librarything.reviewsCount || "no data";
console.log(countWrong);
//


// nullish: null, undefined
const count = book.reviews.librarything.reviewsCount ?? "no data";


////// -Optional chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

///// -Array Map

/*
const books = getBooks();

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => el * 2);
console.log(x);

//
const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  }
});

console.log(essentialData);

// Array filter
const longBooks = books.filter((book) => book.pages > 500);

console.log(logBooks);

const longBooksAdapt = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

console.log(longBooksAdapt);
//
const adventureBooks = books
  .filter((book) => book.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

// Array reduce

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);

console.log(pagesAllBooks);

// Sort

const arr = [3, 7, 1, 9, 6];

const sorted = arr.slice().sort((a, b) => a - b);
console.log(sorted);
console.log(arr);

//
const sortedPages = books.slice.sort((a, b) => a.pages - b.pages);

console.log(sortedPages);

// Immutable Arrays

//Add a book
const newBooks = {
  id: 6,
  title: "Harry Poter and the Chamber of Secrets",
  author: "J. K Rowling",
}

const booksAfterAdd = [...books, newBooks];

console.log(booksAfterAdd);
// Delete a book
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 6);
console.log(booksAfterDelete);

// Update book

const updatedBook = booksAfterDelete.map((book) => book.id == 1 ? { ...book, title: "Update The Hobbit" } : book);

console.log(updatedBook);

*/


fetch("https://api.themoviedb.org/3/movie/popular?api_key=895306465e0545d17584712e1822184a&language=en-US&page=1")
  .then(res => res.json())
  .then(data => console.log(data));

console.log("run");

// Async await

async function getMovies() {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=895306465e0545d17584712e1822184a&language=en-US&page=1");
  const data = await res.json();
  console.log(data);
}







