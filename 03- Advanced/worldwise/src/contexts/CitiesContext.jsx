import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"; 

const CitiesContext = createContext();
const BASE_URL = "http://localhost:9100";
function CitiesProvider({children}){
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});
  
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

    async function getCity(id){
        try {
            setIsLoading(true);
            const resp = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await resp.json();
            // console.log(data);
            setCurrentCity(data);
        } catch (error) {
            alert("There was an error fetching the data...")
        } finally{
            setIsLoading(false);
        }
    }

    return <CitiesContext.Provider value={{
        cities, 
        isLoading,
        currentCity,
        getCity,
    }}>
        {children}
    </CitiesContext.Provider>
}
function useCities(){
    const context = useContext(CitiesContext);
    if(context === undefined) throw Error("Cities Context was used outside of the the cities Provider")
    return context;
}
export {CitiesProvider, useCities}

