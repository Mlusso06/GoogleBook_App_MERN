import axios from "axios";

// Pulling the api from google to perform the search
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";


//export an object with a "Search" to search books
export default {
    search: function(query) {
        return axios.get(BASEURL + query)
    },
// saving book information when the button is clicked, and place info into DB
    save: function(bookData) {
        console.log("bookData is Below")
        console.log(bookData.title)
        return axios.post("/api/books", bookData);

    },
    //Now you get the books when you click saved books page to get books to render from db
    getBooks: function() {
        console.log("getBooks from API.js");
        return axios.get("/api/books")
    },
// delete books from the page and
    deleteBook: function(id) {
        console.log(id.id)
        return axios.delete("/api/books/" + id.id);
    }

}