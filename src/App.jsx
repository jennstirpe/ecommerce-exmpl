import GlobalStyles from "./components/Global";
import Header from "./components/header/Header";
import Banner from "./components/main/Banner";
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />

      <main>
        <Banner />
      </main>

      

      <section className="categories light">
        <div>
          <h2>Light Requirements</h2>
          <div>
            image
            <Link className="nav-link" to="/">High Light</Link>
          </div>
          <div>
            image
            <Link className="nav-link" to="/">Medium Light</Link>
          </div>
          <div>
            image
            <Link className="nav-link" to="/">Low Light</Link>
          </div>
          <div>
            image
            <Link className="nav-link" to="/">Shop All</Link>
          </div>
        </div>

        <div>
          <h2>Care Needs</h2>
          <div>
            image
            <Link className="nav-link" to="/">Easy</Link>
          </div>
          <div>
            image
            <Link className="nav-link" to="/">Hard</Link>
          </div>
          <div>
            image
            <Link className="nav-link" to="/">Shop All</Link>
          </div>
        </div>
      </section>

      
      <section className="featured">
        <h2>Not sure what light your space offers?</h2>
        <span>NESW directions</span><span>distance from window</span>
        <button>Learn more!</button>
      </section>

      <section className="categories care">
        
      </section>
    </>
  )
}

export default App
