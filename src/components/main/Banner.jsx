import { StyledBanner } from "./styled/Banner.styled";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <StyledBanner>
        <div className=" banner-content">
          <h2 className="banner-headline">Interested in adding plants to your indoor space but not sure where to start?</h2>
          <Link className="banner-link global-btn" to="/">Browse low maintenance plants</Link>
          <Link className="banner-link global-btn" to="/Products">Shop All</Link>
        </div>
        <div className="banner-img" aria-hidden="true"></div>
        
    </StyledBanner>
  )
}