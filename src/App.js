
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Login from './components/login/Login';
import SignUp from './components/signup/Signup';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
        <Home></Home>
        </Route>
        <Route  path="/products">
        <Products></Products>
        </Route>
        <Route  path="/services">
        <Services></Services>
        </Route>
        <PrivateRoute  path="/contact">
        <Contact></Contact>
        </PrivateRoute>
        <Route  path="/login">
        <Login></Login>
        </Route>
        <Route  path="/signup">
        <SignUp></SignUp>
        </Route>
        
        <PrivateRoute  path="/details/:serviceId">
        <ServiceDetails></ServiceDetails>
        </PrivateRoute>

        <Route  path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>


      </BrowserRouter>
      </AuthProvider>
        
    </div>
  );
}

export default App;
