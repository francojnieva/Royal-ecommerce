import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import FormContact from './pages/FormContact/FormContact'
import { Routes, Route } from 'react-router-dom'
import ItemList from './pages/ItemList/ItemList'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'



function App() {

	return (
		<>
			<NavBar></NavBar>
			<Routes>
				<Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>} />
				<Route path='/contact' element={<FormContact />}></Route>
				<Route path='/category/:category' element={<ItemList />}></Route>
				<Route path="producto/:id" element={<ItemDetailsContainer/>}/>
			</Routes>
			<Footer></Footer>
		</>
	)
}

export default App
