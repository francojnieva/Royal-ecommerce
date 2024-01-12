import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import FormContact from './pages/FormContact/FormContact'
import { Routes, Route } from 'react-router-dom'



function App() {

	return (
		<>
			<NavBar></NavBar>
			<Routes>
				<Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>} />
				<Route path='/contact' element={<FormContact />}></Route>
			</Routes>
			<Footer></Footer>
		</>
	)
}

export default App
