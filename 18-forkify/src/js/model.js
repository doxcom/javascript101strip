import { async } from 'regenerator-runtime';
import  { API_URL} from './config.js';
import { getJSON } from './helpers.js';


export const state = { //with export we can use in the controller
    recipe: {},
};

export const loadRecipe = async function (id) {   
   try{
     
      const data = await getJSON(`${API_URL}${id}`);
 

    const { recipe } = data;
     state.recipe = {
      recipe_id: recipe.recipe_id,
      title: recipe.title,
      publisher: recipe.publisher_url,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients, 
    
    };

   }catch(err){
    console.error(`${err} `);
   }
};