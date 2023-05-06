import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import GlobalStyles from "../components/Global"
import { StyledLightArticle } from "./styled/LightRequirementsArticle.styled"

import distance from "../assets/article/distance.png"
import northFacing from "../assets/article/north-facing.png"
import southFacing from "../assets/article/south-facing.png"
import eastFacing from "../assets/article/east-facing.png"
import westFacing from "../assets/article/west-facing.png"

export default function LightRequirementsArticle() {
  return (

    <>
    <GlobalStyles />
      <div>
          <Header />

          <StyledLightArticle className="article">
              <section className="article-section">
                <img className="article-img" src={distance} alt="The type of light different areas of a room receive based on their distance from the window" />
                <h3 className="article-section-header">What Kinds of Light Are There?</h3>
                <ul className="article-list">
                  <li className="list-item">
                    <h4 className="list-item-header" >Direct Light</h4>
                    <p className="list-item-desc">Direct light is the most intense light that indoor spaces receive and exposes plants directly to the sun's rays. Be cautious, because many houseplants will burn if left in direct sunlight for too long.</p>
                  </li>
                  <li className="list-item">
                    <h4 className="list-item-header">Bright Indirect Light</h4>
                    <p className="list-item-desc">Bright indirect light is found in areas that receive steady, bright light but little to no direct light. Generally these areas are directly next to a window and around the areas that direct light hits.</p>
                  </li>
                  <li className="list-item">
                    <h4 className="list-item-header">Medium Light</h4>
                    <p className="list-item-desc">Areas that receive steady light but never direct light, usually about half the distance between a window and opposite wall, are considered to offer medium light.</p>
                  </li>
                  <li className="list-item">
                    <h4 className="list-item-header">Low Light</h4>
                    <p className="list-item-desc">Any spaces that are more than 8 feet from windows or spots that receive no natural light, like bathrooms or some office spaces, get low light.</p>
                  </li>
                </ul>
              </section>

              <section className="article-section">
                <h3 className="article-section-header">Light Based on Window Direction</h3>
                <ul className="article-list">
                  <li className="list-item">
                    <h4 className="list-item-header">North-facing windows</h4>
                    <p className="list-item-desc">North-facing windows, at least in the northern hemisphere, receive the least amount of light and are the weakest. If your window is facing north, northeast or northwest, it may get one to two hours of sunlight a day, so it's best for plants that thrive in low light.</p>
                    <img className="article-img" src={northFacing} alt="Different types of light around a north-facing window" />
                  </li>
                  <li className="list-item">
                    <h4 className="list-item-header">South-facing windows</h4>
                    <p className="list-item-desc"> South-facing windows receive the most consistent bright light throughout the day and are great for plants that thrive in bright direct or indirect light.</p>
                    <img className="article-img" src={southFacing} alt="Different types of light around a south-facing window" />
                  </li>
                  <li className="list-item">
                    <h4 className="list-item-header">East-facing windows</h4>
                    <p className="list-item-desc">East-facing windows receive direct light in the morning, and because it's generally a soft light, most plants will tolerate direct sunlight from east-facing windows. They're great for plants that require medium light.</p>
                    <img className="article-img" src={eastFacing} alt="Different types of light around a east-facing window" />
                  </li>
                  <li className="list-item">
                    <h4 className="list-item-header">West-facing windows</h4>
                    <p className="list-item-desc">Because they get the afternoon and evening sun, the light from west-facing windows is strong and hot. Most plants should be placed outside spaces where direct sunlight hits to avoid burning.</p>
                    <img className="article-img" src={westFacing} alt="Different types of light around a west-facing window" />
                  </li>
                </ul>
              </section>

              <section className="article-section light-test">
                <h3 className="article-section-header">Use the hand test to determine what kind of light your space receives:</h3>
                
                <p className="light-test-inst">Take a piece of paper or any flat, plain surface and stand in the spot you'd like to test. Hold your hand about a foot away from the paper, between it and your light source.</p>

                <ul className="light-test-results">
                  <li className="light-test-result">
                    <p className="result-desc">If you can't see a shadow, or it's very faint, that spot is getting <span>low light</span>.</p>
                  </li>
                  <li className="light-test-result">
                    <p className="result-desc">If you see a shadow but it's edges are fuzzy, that spot is receiving <span>medium light</span>.</p>
                  </li>
                  <li className="light-test-result">
                    <p className="result-desc">If you see a shadow that is crisp with clear edges, that spot gets <span>bright/high light</span>.</p>
                  </li>
                </ul> 
              </section>
          </StyledLightArticle>

          <Footer />
      </div>
    </>
  )
}
