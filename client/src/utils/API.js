import axios from "axios";

// Pulling the api from google to perform the search
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";


//export an object with a "Search" to search books
export default {
    search: function(query) {
        return axios.get(BASEURL + query)
    },
// saving book information
    save: function(bookData) {
        console.log("bookData is Below")
        console.log(bookData.title)
        return axios.post("/api/books", bookData);

    },
    //Now you get the book from the api
    getBooks: function() {
        console.log("getBooks from API.js");
        return axios.get("/api/books")
    },

    deleteBook: function(id) {
        console.log(id.id)
        return axios.delete("/api/books/" + id.id);
    }

}