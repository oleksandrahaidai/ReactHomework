import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../../services/api.service.tsx";

const ResourcesComponent = () => {

    useEffect(() => {
        loadAuthProducts()    //викликається функція завантаження продуктів
            .then(products => {    //якщо сервер успішно віддає дані по продуктам, то
                console.log(products)    //отримані дані по продуктам виводимо в консоль
            }).catch(reason => {    //якщо ж під час запиту стається помилка
                console.log(reason)    //вона виводиться в консоль
                refresh()    //викликається функція оновлення сесії за допомогою рефреш-токена
                    .then(() => loadAuthProducts())    //якщо рефрещ успіщний, то повторно викликається функція завантаження продуктів
            });

    }, []);

    return (
        <div>

        </div>
    );
};
export default ResourcesComponent;