import React, { useState } from 'react'

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({ title: '' })
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
      </form>
    </div>
  )
}

export default CreateRecipe
