import Beranda from "../views/Root/Beranda";
import Desa from "../views/Root/Profil/Desa";
import Demografi from "../views/Root/Profil/Demografi";
import SignIn from "../views/Auth/SignIn";
import SignUp from "../views/Auth/SignUp";

const routes = [
  {
    name: "Beranda",
    layout: "/",
    path: "",
    component: <Beranda />,
  },
  {
    name: "Desa",
    layout: "/profil",
    path: "desa",
    component: <Desa />,
  },
  {
    name: "Demografi",
    layout: "/profil",
    path: "demografi",
    component: <Demografi />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    component: <SignUp />,
  },
];

export default routes;
