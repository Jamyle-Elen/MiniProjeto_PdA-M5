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
                console.log(response.data); // Verifique a estrutura dos dados no console
                if (response.data && response.data.data && response.data.data.length > 0) {
                    // Acessa o primeiro item no array data
                    setForestData(response.data.data[selectedIndex]);
                } else {
                    console.error('Dados de floresta não encontrados ou response malformada');
                }
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
        <ForestImgBig src={forestData ? forestData.forestImg : null} alt="Mata de Igapó" />
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