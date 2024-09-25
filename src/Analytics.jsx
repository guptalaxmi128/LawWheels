import {useEffect} from 'react'
import ReactGA from "react-ga4";

const Analytics = () => {
    useEffect(() => {
        ReactGA.initialize("G-1KL3CR7ML4");
    }, [])
  return null
}

export default Analytics
