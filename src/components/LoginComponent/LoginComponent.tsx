import {useEffect} from "react";
import {login} from "../../services/api.service.tsx";

const LoginComponent = () => {  //викликає функцію login з захаркодженими даними користувача, яка міститься всередині useEffect для
    useEffect(() => {  // забезпечення її одноразового відпрацювання - виконується один раз після першого рендеру (за це відповідає пустий масив dependencies)
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        })
    }, []);

    return (
        <div>

        </div>
    );
};

export default LoginComponent;