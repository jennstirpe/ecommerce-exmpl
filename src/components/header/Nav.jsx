import { useState } from "react";
import { StyledNav } from "./styled/Nav.styled";
import { Link } from "react-router-dom";

export default function Nav() {
    const [menuActive, setMenuActive] = useState(false);
    const [subMenuActive, setSubMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);

    
  return (
    <StyledNav>
        
        {
            menuActive ? (
                <button className="mobile-menu-btn" onClick={() => setMenuActive(false)} aria-label="Close menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F7CAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            ) : (
                <button className="mobile-menu-btn" onClick={() => setMenuActive(true)} aria-label="Open menu">
                    <svg aria-label xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F7CAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-right"><line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line></svg>
                </button>
            )
        }

        <div className={ menuActive ? "nav-section main-menu" : "nav-section main-menu menu-closed"}>
            
            <Link className="nav-link" to="/">Home</Link>

            <button onClick={() => setSubMenuActive(!subMenuActive)}>Shop</button>
            {
                subMenuActive ? (
                <ul>
                    <li>Low Light</li>
                    <li>Medium Light</li>
                    <li>High Light</li>
                    <li>Shop All</li>
                </ul>
                ) : null
            }

            <button onClick={() => setSearchActive(!searchActive)} aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F7CAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
            {
                searchActive ? (
                    <input type="text" placeholder="Search..." />
                ) : null
            }
                    
        </div>

        <div className="nav-section">
            <button aria-label="Wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F7CAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>

            <button aria-label="Cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F7CAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </button>
            <button aria-label="Account">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7F7CAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
        </div>

    </StyledNav>
  )
}
