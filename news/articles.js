const key = 'b3f5802fe53f4a1e80cbd158e2353f1e';
const container = document.querySelector('#blog-container');
const searchIn = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-button')

async function fetchRandomNews(){
    try{
        //create url to fetch random data
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apikey=${key}`
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    }catch(error){
        console.error("Error accesing requested information", error);
        return[] //returns empty empty message if no errors found
    }
}

searchBtn.addEventListener('click', async () => {
    const info = searchIn.value.trim()//trim removes whitespace
    try {
        const articles =await fetchInfo(info)
        displayBlogs(articles)
    }catch(error){
        console.log('data aytfolakali', error)
    }
})

async function fetchInfo(info) {
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=${info}&pageSize=50&apikey=${key}`
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    }catch(error){
        console.error("Error accesing requested information", error);
        return[] //returns empty empty message if no errors found
    }
}

//generate to display on page
function displayBlogs(articles){
    container.innerHTML = "" //clear html
    articles.forEach(article => {
        //create div for a card
        const blogCard = document.createElement('div');
        //add class to created div
        blogCard.classList.add('blog-card');
        const img = document.createElement('img');
        //add image source
        img.src = article.urlToImage //src found on news apn page
        //img.alt = article.title;
        const title = document.createElement('h2');
        //add content to h2
        //truncated title with 20chars + ... in a shorthand if and else statement
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "...!" : article.title;
        title.textContent = truncatedTitle;
        const description = document.createElement('p');
        description.textContent = article.description;

        blogCard.appendChild(img)
        blogCard.appendChild(title)
        blogCard.appendChild(description)

        //open card on new window
        blogCard.addEventListener('click', () => {
            window.open(article.url, '_blank')
        })

        container.appendChild(blogCard)
    });
}


//to initiate fetchrandom function
(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    }catch(error){
        console.error("Error fetching info", error)
    }
})();
