import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductsScreen from './screens/ProductsScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'
import Footer from './components/Footer'
import LandingScreen from './screens/LandingScreen'
import LoginScreen from './screens/LoginScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import ProfileScreen from './screens/ProfileScreen'
import AdminConsoleScreen from './screens/AdminConsoleScreen'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<LandingScreen />}></Route>
            <Route path='/products' element={<ProductsScreen />}></Route>
            <Route path='/products/:id' element={<ProductScreen />}></Route>
            <Route path='/cart' element={<CartScreen />}></Route>
            <Route path='/login' element={<LoginScreen />}></Route>
            <Route path='/registration' element={<RegistrationScreen />}></Route>
            <Route path='/profile' element={<ProfileScreen />}></Route>
            <Route path='/admin-console' element={<AdminConsoleScreen />}></Route>
          </Routes>
        </main>

        <Footer />
      </Router>
    </ChakraProvider>
  )
}

export default App
