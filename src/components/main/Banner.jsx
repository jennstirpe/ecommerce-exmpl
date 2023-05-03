import { StyledBanner } from "./styled/Banner.styled"

export default function Banner() {
  return (
    <StyledBanner>
        <h2 className="banner-headline">Interested in adding plants to your indoor space but not sure where to start?</h2>
        <button className="banner-link">Browse low maintenance plants</button>
    </StyledBanner>
  )
}
