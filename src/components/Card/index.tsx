// import Button from "../Button";
// import { useState } from "react";
import { ItemLiContainer } from "./style";
// import Box from "@material-ui/core/Box";
// import {
//   Modal,
//   Radio,
//   Typography,
//   RadioGroup,
//   FormControlLabel,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
// import { GiClick, GiLovers, GiPartyPopper } from "react-icons/gi";
// import { FaGraduationCap } from "react-icons/fa";
import hamburger from "../../assets/hamburger.png";

export const Card = () => {
  //   const { image_url, name, first_brewed, description, volume } = beer;
  //   const [open, setOpen] = useState(false);
  //   const [radioValue, setRadioValue] = useState("");

  //   const handleClickOpenDescrip = () => {
  //     setOpen(true);
  //   };
  //   const handleClickCloseDescrip = () => {
  //     setOpen(false);
  //   };

  //   const handleChange = (e) => {
  //     setRadioValue(e.target.value);
  //   };

  //   const useStyles = makeStyles(() => ({
  //     box: {
  //       position: "absolute",
  //       top: "50%",
  //       left: "50%",
  //       transform: "translate(-50%, -50%)",
  //       width: 300,
  //       backgroundColor: "#ff9800",
  //       border: "2px solid black",
  //       boxShadow: 24,
  //       padding: 4,
  //     },
  //     textMain: {
  //       marginTop: 5,
  //     },
  //     radioGroup: {
  //       textAlign: "center",
  //       justifyContent: "center",
  //     },
  //   }));

  //   const classes = useStyles();

  return (
    <ItemLiContainer>
      <div>
        <img src={hamburger} alt="hamburger" />
      </div>
      <h3>Hamburguer</h3>
      <h5>Sanduiches</h5>
      <p>R$ 14.00</p>

      <button>Adicionar</button>
    </ItemLiContainer>
  );
};
