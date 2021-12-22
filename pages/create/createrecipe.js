import React, { useState } from 'react'

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({ title: '', description: '' })
  return (
    <div className="Create-Inner">
      <form className="Create-Recipe-Form">
        <div className="Create-Form-Group">
          <input
            id="recipe-title"
            type="text"
            placeholder="Recipe Title"
            name="recipe title"
            onChange={(e) => setRecipe({ ...recipe, title: e.target.vlaue })}
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
              setRecipe({ ...recipe, description: e.target.vlaue })
            }
            value={recipe.description}
          />
        </div>
      </form>
    </div>
  )
}

export default CreateRecipe
