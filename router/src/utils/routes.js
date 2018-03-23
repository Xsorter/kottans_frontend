import Register from "../components/Register";
import Login from "../components/Login";
import PizzaList from "../components/PizzaList";
import User from "../components/User";

const routes = [
    {
        href: '/',
        component: PizzaList,
        onEnter: handleRedirect => {
            if(true){
                window.location.hash = "/login";
            }
        }
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
    }
];

export default routes;