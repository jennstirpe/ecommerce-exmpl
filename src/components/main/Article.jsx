import { StyledArticle } from "./styled/Article.styled"
import { Link } from "react-router-dom";

export default function Article() {
  function scrollToTop() {
    window.scrollTo(0,0);
  }

  return (

    <StyledArticle className="article">
      <div className="container">
        <h2 className="article-title">The main thing to take into consideration when you select a new plant is their light requirements.</h2>
        <p className="article-desc">Not sure what kind of light your space offers?</p>
        <Link className="global-btn article-link" to="/lightRequirements" onClick={scrollToTop}>Learn More</Link>
      </div>
        
    </StyledArticle>
  )
}
