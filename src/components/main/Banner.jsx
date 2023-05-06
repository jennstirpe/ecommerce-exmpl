import { StyledBanner } from "./styled/Banner.styled";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <StyledBanner>
        <h2 className="banner-headline">Interested in adding plants to your indoor space but not sure where to start?</h2>
        <Link className="banner-link" to="/">Browse low maintenance plants</Link>
        <Link to="/Products">Shop All</Link>
    </StyledBanner>
  )
}
