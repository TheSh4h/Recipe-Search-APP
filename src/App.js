import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const App = () => {
    const APP_ID = "bb1d8da3";
    const APP_KEY = "7bb5aa3b8c7e357dbad4baa93ba0c027";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        getRecipes();
    }, [query])

    const getRecipes = async () => {
        const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        
        try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Network response was not ok')
        }

        const { hits } = await response.json();
        setRecipes(hits);
        //console.log(hits);
        } catch (error) {
            console.log('Error:', error.message);
        }
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }
    return ( 
        <div className="p-4 font-mono text-center
         flex flex-col items-center justify-center"
        >

            <h1 className="text-5xl font-bold text-gray-200 m-5">Recipe Search API</h1>
            <form onSubmit={getSearch}>
                <input type="text"
                placeholder="Enter recipe"
                value={search}
                onChange={updateSearch}
                className="bg-gray-200 m-2 p-1 h-10 w-60 border rounded-xl
                outline-none"
                />
                <button className="bg-gray-500 m-2 h-10 p-1 rounded-xl 
                hover:bg-slate-200 transition"
                type="submit" > Search </button>
            </form>

            {
                recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))
            }

        </div>
     );
}
 
export default App;