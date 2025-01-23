// Declaring Variables
const foodNameInp = document.querySelector(".foodNameInp");
const searchBtn = document.querySelector(".searchBtn");
const recipeTxt = document.querySelector(".recipeTxt");
const titleTxt = document.querySelector(".contentTitle")

var ingredients = "";


// When Clicked, It Executes The Get Data Function
searchBtn.addEventListener("click", ()=>{
    getData();
});

// Fetches A Random Recipe
async function randomRecipe(){
    // Define URL
    const url = `https://www.themealdb.com/api/json/v1/1/random.php?`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

  
      const json = await response.json();
        if(json.meals[0].strIngredient1 != ""){
            ingredients += json.meals[0].strMeasure1 + " " + json.meals[0].strIngredient1 + "<br>";
        }
        if(json.meals[0].strIngredient2 != ""){
            ingredients += json.meals[0].strMeasure2 + " " + json.meals[0].strIngredient2 + "<br>";
        }
        if(json.meals[0].strIngredient3 != ""){
            ingredients += json.meals[0].strMeasure3 + " " + json.meals[0].strIngredient3 + "<br>";
        }
        if(json.meals[0].strIngredient4 != ""){
            ingredients += json.meals[0].strMeasure4 + " " + json.meals[0].strIngredient4 + "<br>";
        }
        if(json.meals[0].strIngredient5 != ""){
            ingredients += json.meals[0].strMeasure5 + " " + json.meals[0].strIngredient5 + "<br>";
        }
        if(json.meals[0].strIngredient6 != ""){
            ingredients += json.meals[0].strMeasure6 + " " + json.meals[0].strIngredient6 + "<br>";
        }
        if(json.meals[0].strIngredient7 != ""){
            ingredients += json.meals[0].strMeasure7 + " " + json.meals[0].strIngredient7 + "<br>";
        }
        if(json.meals[0].strIngredient8 != ""){
            ingredients += json.meals[0].strMeasure8 + " " + json.meals[0].strIngredient8 + "<br>";
        }
        if(json.meals[0].strIngredient9 != ""){
            ingredients += json.meals[0].strMeasure9 + " " + json.meals[0].strIngredient9 + "<br>";
        }
        if(json.meals[0].strIngredient10 != ""){
            ingredients += json.meals[0].strMeasure10 + " " + json.meals[0].strIngredient10 + "<br>";
        }
        if(json.meals[0].strIngredient11 != ""){
            ingredients += json.meals[0].strMeasure11 + " " + json.meals[0].strIngredient11 + "<br>";
        }
        if(json.meals[0].strIngredient12 != ""){
            ingredients += json.meals[0].strMeasure12 + " " + json.meals[0].strIngredient12 + "<br>";
        }
        if(json.meals[0].strIngredient13 != ""){
            ingredients += json.meals[0].strMeasure13 + " " + json.meals[0].strIngredient13 + "<br>";
        }
        if(json.meals[0].strIngredient14 != ""){
            ingredients += json.meals[0].strMeasure14 + " " + json.meals[0].strIngredient14 + "<br>";
        }
        if(json.meals[0].strIngredient15 != ""){
            ingredients += json.meals[0].strMeasure15 + " " + json.meals[0].strIngredient15 + "<br>";
        }
        if(json.meals[0].strIngredient16 != ""){
            ingredients += json.meals[0].strMeasure16 + " " + json.meals[0].strIngredient16 + "<br>";
        }
        if(json.meals[0].strIngredient17 != ""){
            ingredients += json.meals[0].strMeasure17 + " " + json.meals[0].strIngredient17 + "<br>";
        }
        if(json.meals[0].strIngredient18 != ""){
            ingredients += json.meals[0].strMeasure18 + " " + json.meals[0].strIngredient18 + "<br>";
        }
        if(json.meals[0].strIngredient19 != ""){
            ingredients += json.meals[0].strMeasure19 + " " + json.meals[0].strIngredient19 + "<br>";
        }
        if(json.meals[0].strIngredient20 != ""){
            ingredients += json.meals[0].strMeasure20 + " " + json.meals[0].strIngredient20 + "<br>";
        }
      
      recipeTxt.innerHTML = "<img src=" + json.meals[0].strMealThumb + " /> <br><br> Ingredients: " + ingredients + "<br><br>" + json.meals[0].strInstructions + "<br><br>For more help here is a tutorial: <a href=" + json.meals[0].strYoutube + " target='_blank'>" + json.meals[0].strYoutube +"</a>";
    } catch (error) {
      console.error(error.message);
    }
}

async function getData() {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodNameInp.value}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

  
      const json = await response.json();
      if(json.meals.length > 1){
        titleTxt.innerHTML = "Choose A Food:";
        var index = 1
        recipeTxt.innerHTML = ""
        json.meals.forEach(item => {
            recipeTxt.innerHTML += index + ". " + item.strMeal + "<br>";
            console.log(item.strMeal)
            index++;
        });
      }
      if(json.meals.length == 1){
        titleTxt.innerHTML = "Recipe:";
        ingredients = "";
        console.log(json.meals[0]);
        
        if(json.meals[0].strIngredient1 != ""){
            ingredients += json.meals[0].strMeasure1 + " " + json.meals[0].strIngredient1 + "<br>";
        }
        if(json.meals[0].strIngredient2 != ""){
            ingredients += json.meals[0].strMeasure2 + " " + json.meals[0].strIngredient2 + "<br>";
        }
        if(json.meals[0].strIngredient3 != ""){
            ingredients += json.meals[0].strMeasure3 + " " + json.meals[0].strIngredient3 + "<br>";
        }
        if(json.meals[0].strIngredient4 != ""){
            ingredients += json.meals[0].strMeasure4 + " " + json.meals[0].strIngredient4 + "<br>";
        }
        if(json.meals[0].strIngredient5 != ""){
            ingredients += json.meals[0].strMeasure5 + " " + json.meals[0].strIngredient5 + "<br>";
        }
        if(json.meals[0].strIngredient6 != ""){
            ingredients += json.meals[0].strMeasure6 + " " + json.meals[0].strIngredient6 + "<br>";
        }
        if(json.meals[0].strIngredient7 != ""){
            ingredients += json.meals[0].strMeasure7 + " " + json.meals[0].strIngredient7 + "<br>";
        }
        if(json.meals[0].strIngredient8 != ""){
            ingredients += json.meals[0].strMeasure8 + " " + json.meals[0].strIngredient8 + "<br>";
        }
        if(json.meals[0].strIngredient9 != ""){
            ingredients += json.meals[0].strMeasure9 + " " + json.meals[0].strIngredient9 + "<br>";
        }
        if(json.meals[0].strIngredient10 != ""){
            ingredients += json.meals[0].strMeasure10 + " " + json.meals[0].strIngredient10 + "<br>";
        }
        if(json.meals[0].strIngredient11 != ""){
            ingredients += json.meals[0].strMeasure11 + " " + json.meals[0].strIngredient11 + "<br>";
        }
        if(json.meals[0].strIngredient12 != ""){
            ingredients += json.meals[0].strMeasure12 + " " + json.meals[0].strIngredient12 + "<br>";
        }
        if(json.meals[0].strIngredient13 != ""){
            ingredients += json.meals[0].strMeasure13 + " " + json.meals[0].strIngredient13 + "<br>";
        }
        if(json.meals[0].strIngredient14 != ""){
            ingredients += json.meals[0].strMeasure14 + " " + json.meals[0].strIngredient14 + "<br>";
        }
        if(json.meals[0].strIngredient15 != ""){
            ingredients += json.meals[0].strMeasure15 + " " + json.meals[0].strIngredient15 + "<br>";
        }
        if(json.meals[0].strIngredient16 != ""){
            ingredients += json.meals[0].strMeasure16 + " " + json.meals[0].strIngredient16 + "<br>";
        }
        if(json.meals[0].strIngredient17 != ""){
            ingredients += json.meals[0].strMeasure17 + " " + json.meals[0].strIngredient17 + "<br>";
        }
        if(json.meals[0].strIngredient18 != ""){
            ingredients += json.meals[0].strMeasure18 + " " + json.meals[0].strIngredient18 + "<br>";
        }
        if(json.meals[0].strIngredient19 != ""){
            ingredients += json.meals[0].strMeasure19 + " " + json.meals[0].strIngredient19 + "<br>";
        }
        if(json.meals[0].strIngredient20 != ""){
            ingredients += json.meals[0].strMeasure20 + " " + json.meals[0].strIngredient20 + "<br>";
        }

        recipeTxt.innerHTML = "<img src=" + json.meals[0].strMealThumb + " /> <br><br> Ingredients: " + ingredients + "<br><br>" + json.meals[0].strInstructions + "<br><br>For more help here is a tutorial: <a href=" + json.meals[0].strYoutube + " target='_blank'>" + json.meals[0].strYoutube +"</a>";
      }
      foodNameInp.value = "";
    } catch (error) {
      console.error(error.message);
    }
}
