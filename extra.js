const handleCategory = async () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((x) => x.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    // console.log('data list');
    // const response = await fetch ('https://openapi.programming-hero.com/api/news/categories');
    // const data = await response.json();
    // console.log(data);
    // console.log('End')
}
handleCategory()
{ "status": true, "data": { "news_category": [{ "category_id": "01", "category_name": "Breaking News" }, { "category_id": "02", "category_name": "Regular News" }, { "category_id": "03", "category_name": "International News" }, { "category_id": "04", "category_name": "Sports" }, { "category_id": "05", "category_name": "Entertainment" }, { "category_id": "06", "category_name": "Culture" }, { "category_id": "07", "category_name": "Arts" }, { "category_id": "08", "category_name": "All News" }] } }