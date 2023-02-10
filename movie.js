const myurl = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";
const myMovies = async () => {
  try {
    const response = await fetch(myurl);
    const data = await response.json();
    const mappedData = data.Search.map((movie) => {
      return `<div>
            <img src="${movie.Poster}" alt="my movie array">
            <h2>${movie.Title}</h2>
            </div>`;
    });

    document.querySelector("#my-img").innerHTML = mappedData;
  } catch (error) {
    console.log(error);
  }
};
document.addEventListener("load", myMovies());

// this function searches for the movies
const button = document.querySelector("#button");
const search = document.querySelector("#search");

const myResult = async (e) => {
  e.preventDefault();

  try {
    const searchResult = search.value;
    console.log(searchResult);
    const url = `https://www.omdbapi.com/?s=${searchResult}&apikey=4a3b711b`;

    if (searchResult === "") {
      alert("please input a value");
    } else {
      console.log(searchResult);
      const response = await fetch(url);
      const data = await response.json();
      const mappedData = data.Search.map((movie) => {
        return `
                  <div>
              <img src="${movie.Poster}" alt= "my movie array">
              <h2>${movie.Title}</h2>
              </div>`;
      });
      document.querySelector("#my-img").innerHTML = mappedData;
    }
  } catch (error) {
    console.log("not found", error);
  }
};
button.addEventListener("click", myResult);