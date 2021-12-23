import React, { useState } from 'react'

const CreateRecipe = (props) => {
  const Create = props.Create

  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredient: '',
    instructions: '',
    nutrition: '',
  })

  const createSubmitHandler = (e) => {
    e.preventDefault()

    Create(recipe)
  }
  return (
    <div className="Create-Inner">
      <form className="Create-Recipe-Form" onSubmit={createSubmitHandler}>
        <div className="Create-Form-Group">
          <input
            id="recipe-title"
            type="text"
            placeholder="Recipe Title"
            name="recipe title"
            onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
            value={recipe.title}
          />
        </div>
        <div className="Create-Form-Group">
          <input
            id="recipe-description"
            type="text"
            placeholder="Please write a brief description for your recipe..."
            name="recipe description"
            onChange={(e) =>
              setRecipe({ ...recipe, description: e.target.value })
            }
            value={recipe.description}
          />
        </div>
        <div className="Create-Form-Group">
          <input
            id="recipe-ingredients"
            type="text"
            placeholder="Ingredient"
            name="recipe ingredient"
            onChange={(e) =>
              setRecipe({ ...recipe, ingredient: e.target.value })
            }
            value={recipe.ingredient}
          />
        </div>
        <div className="Create-Form-Group">
          <input
            id="recipe-instructions"
            type="text"
            placeholder="Please enter instructions for making your recipe..."
            name="recipe instructions"
            onChange={(e) =>
              setRecipe({ ...recipe, instructions: e.target.value })
            }
            value={recipe.instructions}
          />
        </div>
        <div className="Create-Form-Group">
          <input
            id="recipe-nutrition"
            type="text"
            placeholder="Nutrition Info"
            name="recipe nutrition"
            onChange={(e) =>
              setRecipe({ ...recipe, nutrition: e.target.value })
            }
            value={recipe.nutrition}
          />
        </div>
        <div className="Create-Form-Group">
          <input id="create" type="submit" value="CREATE" />
        </div>
      </form>
    </div>
  )
}

export default CreateRecipe
