import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'

function Map() {
    const [searchParams, setSeachParams] = useSearchParams();
    const navigate = useNavigate();

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    return (
        <div className={styles.mapContainer} onClick={()=>navigate("form")}>
          <h1>Map</h1>
          <h1>Position: {lat},  {lng}</h1>
          <button onClick={()=> {setSeachParams({lat:32, lng:22})}}>CLick</button>
        </div>
    )
}

export default Map
