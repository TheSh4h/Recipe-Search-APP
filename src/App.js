import { useEffect } from "react";
import { useState } from "react";

const App = () => {
    const APP_ID = "bb1d8da3";
    const APP_KEY = "7bb5aa3b8c7e357dbad4baa93ba0c027";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits)
    }
    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }
    return ( 
        <div>
            <form onSubmit={getSearch}>
                <input type="text"
                placeholder="Enter a recipe to search"
                value={search}
                onChange={updateSearch}
                />
                <button type="submit" > Search </button>
            </form>
        </div>
     );
}
 
export default App;