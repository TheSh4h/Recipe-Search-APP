import useFetch from "./useFetch";
import Recipe from "./Recipe";
import { useState } from "react";

const App = () => {
    const APP_ID = "bb1d8da3";
    const APP_KEY = "7bb5aa3b8c7e357dbad4baa93ba0c027";
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState();

    const { recipes, error, loading } = useFetch(query, APP_ID, APP_KEY);

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

            {loading && <div className="text-gray-200 text-lg">Loading...</div>}
            {error && <div className="text-gray-200 text-lg">Error: {error.message}</div>}

            {Array.isArray(recipes) && recipes.length > 0 ? (
                recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))
            ) : recipes.length === 0 && !loading ?  (
                <div className="text-gray-200 text-lg">No recipes found</div>
            ) : null
            }

        </div>
     );
}
 
export default App;