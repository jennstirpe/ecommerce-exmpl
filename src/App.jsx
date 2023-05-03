import GlobalStyles from "./components/Global";
import Header from "./components/header/Header";
import Banner from "./components/main/Banner";
import Categories from "./components/main/Categories";


function App() {

  return (
    <>
      <GlobalStyles />
      <Header />

      <main>
        <Banner />
        <Categories />
      </main>

      

        
    </>
  )
}

export default App
