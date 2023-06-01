import { useEffect, useState } from "react";

const useFetch = (query, APP_ID, APP_KEY) => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRecipe = async () => {
            const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
            
            try {
                setLoading(true);
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('Network Response Error')
                }

                const { hits } = await response.json();
                setRecipes(hits);
                console.log(hits);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchRecipe();
    }, [query, APP_ID, APP_KEY]);

    return { recipes, error, loading };
}
 
export default useFetch;