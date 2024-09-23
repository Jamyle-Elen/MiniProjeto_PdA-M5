import { useState } from 'react'
import Images from "../../assets/images";
import { SessionSquare, Square, SquareImg } from "./SquareDark.styles";

const SquareDark = ({ setSelectedIndex }) => {

  const handleSquareClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <>
    <SessionSquare>
          <Square><SquareImg onClick={() => handleSquareClick(0)} src={Images.MataIgapo} alt="Mata de Igapó" /></Square>
          <Square><SquareImg onClick={() => handleSquareClick(1)} src={Images.MataVarzea} alt="Mata de Várzea" /></Square>
          <Square><SquareImg onClick={() => handleSquareClick(2)} src={Images.MataTerraFirme} alt="Mata de Terra Firme" /></Square>
          <Square><SquareImg onClick={() => handleSquareClick(3)} src={Images.MataSemiumida} alt="Mata Semiúmida" /></Square>
    </SessionSquare>
    </>
  );
};

export default SquareDark;
