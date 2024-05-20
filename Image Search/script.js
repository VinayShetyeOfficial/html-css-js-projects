const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResults = document.getElementById("search-results");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
let searched_keyword = "";

async function searchImages() {
    keyword = searchBox.value;
    accessKey = '9u-KEGLLIg4gxkBCnL1QVXfdTLmDrC2x6kN292BqaAI';
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(response);
    console.log(data);

    const results = data.results;

    if (keyword != searched_keyword) {
        // Clear the previous search results
        searchResults.innerHTML = "";
    }

    searched_keyword = keyword;

    if (results.length === 0) {
        // If no results found, display a message
        searchResults.innerHTML = "<div class='no-results'><p>No results found.</p></div>";

    } else {
        results.map((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;

            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            searchResults.appendChild(imageLink);
        })

        showMoreBtn.style.display = "block";

    }

}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;

    if (searched_keyword == "") {
        searchImages();
    }
    else if(searchBox.value != searched_keyword){
        searchImages();
    }
})

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})
