import { ForestSession, Forest, ForestInfo, ForestImg, Session, Span, P, ForestHutImg, Description } from "./SecondContainer.styles";
import { ReportButton, Info } from "../Button/Button.style";
import { useEffect, useState } from "react";
import Images from "../../assets/images"; 
import axios from 'axios'


const SecondContainer = () => {
  const [fireData, setFireData] = useState(null)

  
  useEffect(() => {
    const getFireData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getFireData');
        setFireData(response.data.response[0]);
        // console.log(response.data.response[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getFireData();
  }, []);

  return (
    <>
      <ForestSession> {/* section */}
        <Forest> {/* div */}
          <Session>
            <Span>
            <ForestImg src={Images.fire} alt="Queimadas Ativas" />
            <h3>Queimadas Ativas:</h3>
            </Span>
            <P>{fireData ? fireData.fireActive : 'Loading...'} focos de incêndio</P>
          </Session>
          <Session>
            <Span>
            <ForestImg src={Images.destroyed} alt="Área Devastada" />
            <h3>Área Devastada:</h3>
            </Span>
            <P>{fireData ? fireData.devastatedArea : 'Loading...'} hectares</P>
          </Session>
          <Session>
            <Span>
            <ForestImg src={Images.animals} alt="Animais atingidos" />
            <h3>Animais Atingidos:</h3>
            </Span>
            <P>{fireData ? fireData.affectedAnimals : 'Loading...'} espécies em risco</P>
          </Session>
        </Forest>
        <ForestInfo>
          <ForestHutImg src={Images.hut} alt="" />
          <Description>“Enquanto a Amazônia queima, comunidades indígenas e ribeirinhas perdem suas casas, sua cultura e suas vidas. Ajude a protegê-las.”</Description>
          <a href="tel:194"><ReportButton>DENUNCIE</ReportButton></a>
        </ForestInfo>
      </ForestSession>
    </>
  );
};

export default SecondContainer;