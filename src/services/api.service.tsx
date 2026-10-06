import * as axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductDummyResponse} from "../models/IProductDummyResponse.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";
import {retrieveLocalStorage} from "./helpers.tsx";

type LoginData = {    //типізація даних для логіна
    username: string;
    password: string;
    expiresInMins: number
}

const axiosInstance = axios.create({     //створення константи/axios-сутності для подальшої відправки HTTP-запитів; при подальшому здійсненні API-запитів використовуємо константу axiosInstance,
    baseURL: 'https://dummyjson.com/auth', // яка вже містить у собі baseUrl
    headers:{}
})

axiosInstance.interceptors.request.use( (requestObject) => {     //використання інтерсептора, який перехоплює реквести на сервер
    if (requestObject.method?.toUpperCase() === "GET") {     //у випадку, якщо перехоплений запит зроблений методом GET( ),
        requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken;     //додаємо до реквеста хедер Autorization зі значенням Bearer + accessToken взятий з об'єкта в localStorage за допомогою функції-хелпера
          } //хедер Autorization додаємо лише до запитів з методом GET, бо саме запити з цим методом використовуються для того, що дістати будь-які ресурси з ендпойнту '/products';
    //знак питання після методу в умові (оператор опціональної послідовності) ставиться, щоб запобігти критичної помилки у випадку, якщо значення об'єкту requestObject є null чи undefined або
    // в requestObject відсутнє поле method
    return requestObject; //повертаємо реквест обджект
})

export const login =async ({username, password, expiresInMins}: LoginData):Promise<IUserWithTokens> => {   //створення асинхронної функії з запитом на логін, яка приймає у якості аргумента об'єкт, що деструктуризується на 3 змінні
                                                                                                                                              //і повертає Promise з типом IUserWithPromise
    const {data} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins})     //в результаті запиту методом POST на ендпойнт /login і передачі тіла запиту(payload)
        //отримуємо response.data, яка відповідає моделі IUserWithTokens і з респонсу одразу деструктуризуємо data
    localStorage.setItem('user', JSON.stringify(data))     //збереження об'єкта data у LocalStorage після його попереднього перетворення у формат json
    console.log(data) //вивід у консоль
    return data     //повернення об'єкта data, що дає можливість його подальшого використання будь-яким іншим компонентом додатка
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {     //створення асинхронної функії з запитом на отримання продуктів, що повертає Promise з типом IProduct[]
    const {data: {products}} = await axiosInstance.get<IProductDummyResponse>('/products');     // в результаті запиту методом GET на ендпойнт /products
    //отримуємо відповідь, що відповідає моделі IProductDummyResponse і застосовуємо вкладену деструктуризацію для отримання продуктів ({data: {products}} -  спочатку знаходимо в респонсі властивість data,
    // а потім всередині data знаходимо властивість products
        console.log(products)     //вивід у консоль
        return products     //повернення продуктів з об'єкта data
}

export const refresh = async () => {     //створення асинхронної функії з запитом на оновлення токенів, що повертає об'єкт з новою парою токенів accessToken та refreshToken
   const userWithTokens = retrieveLocalStorage<IUserWithTokens>('user');    //виклик допоміжної функції retrieveLocalStorage, яка дістає об'єкт 'user' з localStorage і зберігає його у константу userWithTokens
    const {data: {accessToken, refreshToken}} =  await axiosInstance.post<ITokenPair>('/refresh', {refreshToken: userWithTokens.refreshToken, expiresInMins:1});     //запит методом POST на ендпойнт /refresh з типізацією отриманого респонсу (ITokenPair)
    userWithTokens.refreshToken = refreshToken     //оновлення об'єкту отриманого з localStorage за допомогою нового refreshToken
    userWithTokens.accessToken = accessToken     //оновлення об'єкту отриманого з localStorage за допомогою нового accessToken
    localStorage.setItem('user', JSON.stringify(userWithTokens))     // перезапис оновленого userWithTokens після попереднього його переформатування у формат json
 }

