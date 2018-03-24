import Register from "../components/Register";
import Login from "../components/Login";
import PizzaList from "../components/PizzaList";
import User from "../components/User";
import AddPizza from "../components/AddPizza";

const routes = [
    {
        href: '/',
        component: PizzaList,
        /*onEnter: handleRedirect => {
            if(true){
                window.location.hash = "/login";
            }
        }*/
    },
    {
        href: '/login',
        component: Login
    },
    {
        href: '/register',
        component: Register
    },
    {
        href: '/profile',
        component: User
    },
    {
        href: '/addpizza',
        component: AddPizza
    }
];

export default routes;
