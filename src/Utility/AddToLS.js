const getBookFromStored = () => {
  const storeBook = localStorage.getItem("readList");
  if (storeBook) {
    const storedBookData = JSON.parse(storeBook);
    return storedBookData;
  }
  return [];
};

const addToLGStored = (id) => {
  const storeList = getBookFromStored();
  if (storeList.includes(id)) {
    alert("this data already exist");
  } else {
    storeList.push(id);
    // console.log(storeList);
    const data = JSON.stringify(storeList);
    localStorage.setItem("readList", data);
  }
};
export { addToLGStored };
