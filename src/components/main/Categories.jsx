import { useState } from "react";
import { StyledCategories } from "./styled/Categories.styled";
import { Link } from "react-router-dom";

export default function Categories() {
  const [category, setCategory] = useState("light");

  return (
    <StyledCategories>
      <div className="category-btns">
        <button onClick={() => setCategory("light")} className="category-btn">Light Requirements</button>
        <button onClick={() => setCategory("care")} className="category-btn">Care Needs</button>
      </div>

      {
        category === "light" ? (
          <div className="category">
            <div className="category-option">
              image
              <Link className="nav-link" to="/">High Light</Link>
            </div>
            <div className="category-option">
              image
              <Link className="nav-link" to="/">Medium Light</Link>
            </div>
            <div className="category-option">
              image
              <Link className="nav-link" to="/">Low Light</Link>
            </div>
            <div className="category-option">
              image
              <Link className="nav-link" to="/">Shop All</Link>
            </div>
          </div>
        ) : null
      }
      
      {
        category === "care" ? (
          <div className="category">
            <div className="category-option">
              image
              <Link className="nav-link" to="/">Easy</Link>
            </div>
            <div className="category-option">
              image
              <Link className="nav-link" to="/">Hard</Link>
            </div>
            <div className="category-option">
              image
              <Link className="nav-link" to="/">Shop All</Link>
            </div>
          </div>
        ) : null
      }

        
    </StyledCategories>
  )
}
