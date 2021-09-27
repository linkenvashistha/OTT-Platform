import './App.css'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner/>
      <Row title='Trending' fetchUrl={requests.fetchTrending} isLarge/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} isLarge/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Mystery' fetchUrl={requests.fetchMystery} />
      <Row title='Sci-fi' fetchUrl={requests.fetchSciFi} />
      <Row title='Western' fetchUrl={requests.fetchWestern} />
      <Row title='Animation' fetchUrl={requests.fetchAnimation} />
      <Row title='TV' fetchUrl={requests.fetchTV} />
      <Footer />
    </div>
  )
}

export default App
