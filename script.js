

blogContainer=document.querySelector('#blog-container');
const apikey="c3a43dd0e4b7b19e5708386cf434b2af";

async function asd(search){
    try{
    const url=`https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=`+ apikey;
    const response = await axios.get(url);
    console.log(response)
    console.log(response.data.articles)
    return response.data.articles;
    } catch(error){
        console.log("url");
        console.log(error);
        return [];
    }
}

function card(articles){
    blogContainer.innerHTML="";
    articles.forEach((article) => {
        const blogcard=document.createElement('div');
        blogcard.classList.add('blog-card');
        const image=document.createElement('img');
        image.src=article.image;
        image.alt=article.title;
        const Title=document.createElement('h2');
        Title.textContent=article.title.length>30 ? article.title.slice(0,30)+'...' : article.title ;
        const paragraph=document.createElement('p');
        paragraph.textContent=article.description.length>120 ? article.description.slice(0,120)+'...':article.description;

        blogcard.appendChild(image);
        blogcard.appendChild(Title);
        blogcard.appendChild(paragraph);
        blogcard.addEventListener('click',()=>{
            window.open(article.url,'_blank')
        })
        blogContainer.appendChild(blogcard);
    });
}

let a=async ()=>{
    try{
    info=await asd('olympics');
    console.log(info);
    card(info);
    }
    catch(error){
        console.log(error);
    }
}

a();

button=document.querySelector('#search-button');
input=document.querySelector('#search-input');
button.addEventListener('click',async ()=>{
    search=input.value;
    console.log(search)
    data=await asd(search);
    card(data)

})