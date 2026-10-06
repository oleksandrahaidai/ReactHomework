import LoginComponent from "../components/LoginComponent/LoginComponent.tsx";

const LoginPage = () => { //сторінка логіну підтягує LoginComponent, який містить виклик функції логіну
    return (
        <div>
            Login Page
            <LoginComponent/>
        </div>
    );
};
export default LoginPage;