const getItemsFromLS = () => {
  const bookStrings = localStorage.getItem("Book");
  if (bookStrings) {
    const bookData = JSON.parse(bookStrings);
    return bookData;
  }
  return [];
};

const saveBookItemsLs = (id) => {
  const books = getItemsFromLS();

  if (books.includes(id)) {
    alert("this data already exist");
  } else {
    books.push(id);

    // save to local store**
    const data = JSON.stringify(books);
    localStorage.setItem("Book", data);
  }
};

export { saveBookItemsLs, getItemsFromLS };
