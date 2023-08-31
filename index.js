const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    for(datt of data.data.news_category){
        console.log(datt)
    }


}
handleCategory()