const Recipe = ({title, calories, image, ingredients}) => {
    return ( 
        <div className="w-96
        text-center bg-slate-300 p-3 m-2
        border-solid border-black border-2 rounded-xl
        flex flex-col justify-center
        ">
            <h1 className="font-bold text-xl">{title}</h1>
            <ol>
                {
                    ingredients.map(ingredient => (
                        <li>- {ingredient.text}</li>
                    ))
                }
            </ol>
            <p> Calories: {calories}</p>
            <img src={image} alt=""></img>
        </div>
     );
}
 
export default Recipe;