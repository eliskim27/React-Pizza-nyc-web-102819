import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Pizza Topping" 
              value={props.currentTopping}
              onChange={props.formChangeTopping}
            />
        </div>
        <div className="col">
          <select 
            value={props.currentSize} 
            className="form-control"
            onChange={props.formChangeSize}
            >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              value="Vegetarian" 
              checked={props.currentVeg? true:false}
              onChange={props.formChangeVeg}
              />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              value="Not Vegetarian" 
              checked={props.currentVeg? false:true}
              onChange={props.formChangeVeg}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button 
            type="submit" 
            className="btn btn-success" 
            onClick={props.formSubmit}
          >
            Submit
          </button>
        </div>
      </div>

  )
}

export default PizzaForm