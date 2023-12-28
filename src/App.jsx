import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import BannerSection from './components/BannerSection/BannerSection'
import AboutRoyal from './components/AboutRoyal/AboutRoyal'
import FormContact from './components/FormContact/FormContact'
import Footer from './components/Footer/Footer'



function App() {

	return (
		<section>
			<NavBar></NavBar>
			<BannerSection></BannerSection>
			<ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>
			<AboutRoyal></AboutRoyal>
			<FormContact></FormContact>
			<Footer></Footer>
		</section>
	)
}

export default App
