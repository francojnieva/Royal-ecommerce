import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import BannerSection from './components/BannerSection/BannerSection'


function App() {

	return (
		<section>
			<NavBar></NavBar>
			<BannerSection></BannerSection>
			<ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>
		</section>
	)
}

export default App
