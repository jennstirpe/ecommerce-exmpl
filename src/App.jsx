import GlobalStyles from "./components/Global";
import Header from "./components/header/Header";
import Banner from "./components/main/Banner";
import Article from "./components/main/Article";
import Categories from "./components/main/Categories";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <>
      <GlobalStyles />
      <Header />

      <main>
        <Banner />

        <Article />

        <Categories />
      </main>

      <Footer />
        
    </>
  )
}

export default App
