import { BrowserRouter,Routes,  Route, Navigate } from "react-router-dom"
import Product from "./Pages/Product"
import Homepage from "./Pages/Homepage"
import Pricing from "./Pages/Pricing"
import PageNotFound from "./Pages/PageNotFound"
import Login from "./Pages/Login"
import AppLayout from "./pages/AppLayout"
import CityList from "./components/CityList"
import CountryList from "./components/CountryList"
import City from "./components/City"
import Form from "./components/Form"
import { useEffect, useState } from "react"
const BASE_URL = "http://localhost:9100";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function(){
  async function fetchCities(){
    try {
      setIsLoading(true);
      const resp = await fetch(`${BASE_URL}/cities`);
      const data = await resp.json();
      // console.log(data);
      setCities(data);
    } catch (error) {
      alert("There was an error fetching the data...")
    } finally{
      setIsLoading(false);
    }
   
  }
  fetchCities();
  }, [])
  return (
   <>
    <BrowserRouter>
       <Routes>
       <Route index element={<Homepage/>} />
         <Route path="product" element={<Product/>} />
         <Route path="pricing" element={<Pricing/>} />
         <Route path="login" element={<Login />} />
         <Route path="app" element={<AppLayout />}> 
            <Route index element={<Navigate replace to="cities"/>}/>
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>}  />
            <Route path="form" element={<Form />}  />
         </Route>
         <Route path="*" element={<PageNotFound/>} />
       </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
