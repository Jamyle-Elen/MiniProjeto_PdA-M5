import {useState, useEffect} from 'react'
import { ForestSession, Forest, ForestInfo, ForestImg, Session, Span, P, Description } from '../SecondContainer/SecondContainer.styles'
import { ForestImgBig, ForestTitle, Border, About } from './SessionDark.styles'
import Images from '../../assets/images'
import axios from 'axios'

const SessionDark = ({ selectedIndex }) => {
    const [forestData, setForestData] = useState(null)

    useEffect(() => {
        const getForestData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/getForestData');
                    setForestData(response.data.data[selectedIndex]);
            } catch (error) {
                console.error('Erro ao buscar dados da floresta:', error);
            }
        };
        getForestData();
    }, [selectedIndex]);
  return (
    <>
      <ForestSession>
        <Border>
        <Forest>
        <ForestImgBig src={
    selectedIndex === 0 
      ? Images.MataIgapoImg 
      : selectedIndex === 1 
      ? Images.MataTerraFirmeImg
      : selectedIndex === 2 
      ? Images.SemihumidForestImg 
      : Images.MataVarzeaImg
  } 
         alt="Mata da Floresta Amazonica" />
        </Forest>
        </Border>
        <Border>
            <ForestInfo>
                <ForestTitle>{forestData ? forestData.forestName : 'Loading...' }</ForestTitle>
                <Session>
                <Span>
                    <ForestImg src={Images.fire} alt="Área" />
                    <h3>Área</h3>
                </Span>
                    <P>{forestData ? forestData.forestArea : 'Loading...'} km²</P>
                </Session>
                <Session>
                <Span>
                    <ForestImg src={Images.animals} alt="Espécies Endêmicas" />
                    <h3>Espécies Endêmicas</h3>
                </Span>
                    <P>{forestData ? forestData.endemicSpecies : 'Loading...'}+</P>
                </Session>
                <About>
                {forestData ? forestData.forestDescription : 'Loading...'}
                </About>
            </ForestInfo>
        </Border>
      </ForestSession>
    </>
  );
};

export default SessionDark;