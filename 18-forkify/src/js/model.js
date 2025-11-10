import { async } from 'regenerator-runtime';

export const state = { //with export we can use in the controller
    recipe: {},
};

export const loadRecipe = async function (id) {   
   try{
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );
     const data = await res.json();

    if(!res.ok) throw new Error(`${data.message} (${res.status})`);
   console.log("FULL api response data", data);
   console.log("Recipe object:", data.recipe);
    const { recipe } = data;
     state.recipe = {
      recipe_id: recipe.recipe_id,
      title: recipe.title,
      publisher: recipe.publisher_url,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cookingTime,
      ingredients:recipe.ingredients, 
    
    };


   }catch(err){
    alert(err);
   }
};