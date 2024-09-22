import { useState } from 'react'
import Images from "../../assets/images";
import { Square, SquareImg } from "./SquareDark.styles";

const SquareDark = ({ setSelectedIndex }) => {

  const handleSquareClick = (index) => {
    console.log(index);
    setSelectedIndex(index);
  };
  return (
    <>
      <Square>
        <SquareImg onClick={() => handleSquareClick(0)} src={Images.MataIgapo} alt="Mata de Igapó" />
        <SquareImg onClick={() => handleSquareClick(1)} src={Images.MataVarzea} alt="Mata de Várzea" />
        <SquareImg onClick={() => handleSquareClick(2)} src={Images.MataTerraFirme} alt="Mata de Terra Firme" />
        <SquareImg onClick={() => handleSquareClick(3)} src={Images.MataSemiumida} alt="Mata Semiúmida" />
      </Square>
    </>
  );
};

export default SquareDark;
