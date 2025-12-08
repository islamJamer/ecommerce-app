const NAVBAR_ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  ABOUT: "/about",
  CONTACT: "/contact",
  CART: "/cart",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
};

export const navbarItems = [
  { title: "Products", path: NAVBAR_ROUTES.PRODUCTS },
  { title: "About", path: NAVBAR_ROUTES.ABOUT },
  { title: "Contact", path: NAVBAR_ROUTES.CONTACT },
];

const authMenuItems = [
  { label: "Login", path: NAVBAR_ROUTES.LOGIN },
  { label: "Register", path: NAVBAR_ROUTES.REGISTER },
];

// const sx = {
//   toolbar: {
//     display: "flex",
//     gap: 2,
//   },
//   centerBox: {
//     flex: 1,
//     display: "flex",
//     gap: 2,
//     justifyContent: "center",
//   },
//   cartIcon: {
//     mr: 1,
//   },
// };
