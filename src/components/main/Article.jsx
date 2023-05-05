import { StyledArticle } from "./styled/Article.styled"
import { Link } from "react-router-dom";

export default function Article() {
  function scrollToTop() {
    window.scrollTo(0,0);
  }

  return (

    <StyledArticle className="article">
        <h2 className="article-title">The main thing to take into consideration when you select a new plant is their light requirements.</h2>
        <Link to="/lightRequirements" onClick={scrollToTop}> Identify the light your space receives</Link>
    </StyledArticle>
  )
}
