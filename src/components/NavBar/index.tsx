import { AppBar, Toolbar, MenuItem, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { red } from "@material-ui/core/colors";
// import { useContext } from "react";
// import { CartContext } from "../../providers/cart";

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "var(--gray-scale-0)",
    fontFamily: "var(--main-font)",
    minHeight: "80px",
    color: "#bdbdbd",
  },
  toolbar: {
    minHeight: "80px",
  },
  title: {
    fontSize: "22px",
    color: "#000",
    fontWeight: "bold",
    position: "fixed",
    left: "10px",
  },
  span: {
    color: "var(--color-secondary)",
    fontSize: "17px",
  },
  itemcart: {
    fontSize: "25px",
    lineHeight: "1",
    height: "25px",
    position: "fixed",
    right: "45px",

    "@media (min-width: 1024px)": { fontSize: "25px" },
  },
  itemlogout: {
    fontSize: "25px",
    lineHeight: "1",
    height: "25px",
    position: "fixed",
    right: "2px",
  },
}));

export const NavBar = () => {
  //   const { cartFiltered, cartWedFiltered, cartGatherFiltered } =
  // useContext(CartContext);
  const classes = useStyles();

  const history = useHistory();

  const sendTo = (path: string) => {
    history.push(path);
  };
  //   let totalCart = "";
  //   if (cartFiltered) {
  //     totalCart = cartFiltered.reduce((acc, item) => acc + item.quantity, 0);
  //   }
  //   let totalCartWed = cartWedFiltered.reduce(
  //     (acc, item) => acc + item.quantity,
  //     0
  //   );
  //   let totalCartGather = cartGatherFiltered.reduce(
  //     (acc, item) => acc + item.quantity,
  //     0
  //   );
  return (
    <>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <MenuItem className={classes.title} onClick={() => sendTo("/")}>
            Burguer<span className={classes.span}>Kenzie</span>
          </MenuItem>
          <MenuItem className={classes.itemcart} onClick={() => sendTo("/")}>
            {/* <Badge badgeContent={totalCart} color="secondary"> */}
            <FaShoppingCart />
            {/* </Badge> */}
          </MenuItem>
          <MenuItem className={classes.itemlogout} onClick={() => sendTo("/")}>
            {/* <Badge badgeContent={totalCartWed} color="secondary"> */}
            <MdLogout />
            {/* </Badge> */}
          </MenuItem>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
