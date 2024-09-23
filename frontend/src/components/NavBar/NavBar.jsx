import { useState, useEffect } from "react";
import axios from 'axios'
import Images from "../../assets/images";
import { format } from 'date-fns'
import { NavBarContainer, LastUpdate, ImgTheme } from "./NavBar.styles";

const NavBar = ({theme, setTheme}) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const [lastUpdate, setLastUpdate] = useState(null)

  useEffect(() => {
    getLastUpdate()
  }, [])

  const getLastUpdate = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getLastUpdate')
      setLastUpdate(response.data.response[0].createdAt)
      const lastUpdate = response.data.response[0].createdAt
    }catch (error) {
      console.error(error)
    }
  }
  const lastUpdateFormatted = format(new Date(lastUpdate), 'dd/MM/yyyy')
  return (
    <>
      <header>
        <NavBarContainer>
          {theme === 'light' ? <div></div> : <LastUpdate>Última atualização: {lastUpdate ? lastUpdateFormatted : 'Loading...'}</LastUpdate>}
            
            <ImgTheme onClick={()=>{toggle_mode()}} src={theme === 'light' ? Images.sun_icon_dark : Images.moon_icon_light} alt="Mudar tema" />
        </NavBarContainer>
    </header>
    </>
  );
};

export default NavBar;
