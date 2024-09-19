import Images from "../../assets/images";
import Image from "../../assets/images";
import { Square, SquareImg } from "./SquareButton.styles";

const SquareButton = () => {
  return (
    <>
      <Square>
        <SquareImg src={Images.MataIgapo} alt="Mata de Igapó" />
        <SquareImg src={Images.MataVarzea} alt="Mata de Várzea" />
        <SquareImg src={Images.MataTerraFirme} alt="Mata de Terra Firme" />
        <SquareImg src={Images.MataSemiumida} alt="Mata Semiúmida" />
      </Square>
    </>
  );
};

export default SquareButton;
