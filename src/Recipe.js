const Recipe = ({title, calories, image, ingredients}) => {
    return ( 
        <div className="bg-slate-700">
            <h1>{title}</h1>
            <ol>
                {
                    ingredients.map(ingredient => {
                        <li>{ingredient.text}</li>
                    })
                }
            </ol>
            <p> Calories: {calories}</p>
            <img src={image} alt="failed"></img>
        </div>
     );
}
 
export default Recipe;