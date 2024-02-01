import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import FormContact from './pages/FormContact/FormContact'
import { Routes, Route } from 'react-router-dom'
import ItemList from './pages/ItemList/ItemList'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import NotFound from './pages/NotFound/NotFound'
import { CartContextProvider } from './context/CartContext'
import Cart from './pages/Cart/Cart'
import AboutUs from './pages/AboutUs/AboutUs'
import Checkout from './pages/Checkout/Checkout'


function App() {

	return (
		<CartContextProvider>
			<NavBar></NavBar>
			<Routes>
				<Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}></ItemListContainer>} />
				<Route path='/contact' element={<FormContact />}></Route>
				<Route path='/category/:category' element={<ItemList />}></Route>
				<Route path="producto/:id" element={<ItemDetailsContainer/>}/>
				<Route path="/cart" element={<Cart />}/>
				<Route path="*" element={<NotFound />}/>
				<Route path="/about-us" element={<AboutUs />}/>
				<Route path="/checkout" element={<Checkout />}/>
			</Routes>
			<Footer></Footer>
		</CartContextProvider>
	)
}

export default App
