const axios = require("axios");

const searchQuery = "the lord of the rings";
const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(
  searchQuery
)}`;

axios
  .get(url)
  .then((response) => {
    const books = response.data.docs;

    books.forEach((book) => {
      const title = book.title;
      const author = book.author_name
        ? book.author_name.join(", ")
        : "Unknown author";
      const coverId = book.cover_i;
      const coverUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
        : "No cover available";

      console.log(`Title: ${title}`);
      console.log(`Author: ${author}`);
      console.log(`Cover: ${coverUrl}`);
      console.log("---");
    });
  })
  .catch((error) => {
    console.error("Error fetching data from Open Library:", error);
  });
