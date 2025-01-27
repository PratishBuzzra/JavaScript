const books = [
    {
      title: "The Great Gatsby",
      authorName: "F. Scott Fitzgerald",
      releaseYear: 1925
    },
    {
      title: "1984",
      authorName: "George Orwell",
      releaseYear: 1949
    },
    {
      title: "To Kill a Mockingbird",
      authorName: "Harper Lee",
      releaseYear: 1960
    },
    {
      title: "Pride and Prejudice",
      authorName: "Jane Austen",
      releaseYear: 1813
    },
    {
      title: "Moby-Dick",
      authorName: "Herman Melville",
      releaseYear: 1851
    },
    {
      title: "The Catcher in the Rye",
      authorName: "J.D. Salinger",
      releaseYear: 1951
    }
  ];
  function sortByYear(book1, book2){
    if(book1.releaseYear < book2.releaseYear){
      return -1;
    }
    if(book1.releaseYear > book2.releaseYear){
      return 1;
    }
    if(book1.releaseYear === book2.releaseYear){
      return 0;
    }
  
  }
  let filteredBooks = books.filter((book) => {
    return book.releaseYear <= 1950;
  });
  console.log(filteredBooks);
  
  let filteredBooksSorted = filteredBooks.sort(sortByYear);
  console.log(filteredBooksSorted);
  