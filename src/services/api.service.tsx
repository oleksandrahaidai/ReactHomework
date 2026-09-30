import * as axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductDummyResponse} from "../models/IProductDummyResponse.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";
import {retrieveLocalStorage} from "./helpers.tsx";

type LoginData = {    //типізація даних для логіна
    username: string;
    password: string;
    expiresInMins:number
}

const axiosInstance = axios.create({     //створення константи/axios-сутності для подальшої відправки HTTP-запитів
    baseURL: 'https://dummyjson.com/auth',
    headers:{}
})

axiosInstance.interceptors.request.use( (requestObject) => {     //використання інтерсептора, який перехоплює реквест на сервер
    if (requestObject.method?.toUpperCase() === "GET") {     //у випадку, якщо перехоплений запит зроблений методом GET,
        requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken;     //додаємо до реквеста хедер Autorization зі знвченням Bearer + accessToken взятий з об'єкта в localStorage за допомогою функції-хелпера
          }
    return requestObject; //повертаємо реквест обджект
})

export const login =async ({username, password, expiresInMins}: LoginData):Promise<IUserWithTokens> => {   //створення асинхронної функії з запитом на логін, яка приймає у якості аргумента об'єкт, що деструктуризується на 3 змінні
    const {data} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins})     //запит методои POST на ендпойнт /login, передаючи тіло запиту(payload)                                            і повертає Promise з типом IUserWithPromise
    localStorage.setItem('user', JSON.stringify(data))     //збереження об'єкта data у LocalStorage після його попереднього перетворення у формат json
    console.log(data) //вивід у консоль
    return data     //повернення об'єкта data, що дає можливість його подальшого використання будь-яким іншим компонентом додатка
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {     //створення асинхронної функії з запитом на отримання продуктів, що повертає Promise з типом IProduct[]
    const {data} = await axiosInstance.get<IProductDummyResponse>('/products');     //запит методом GET на ендпойнт /products з типізацією отриманого респонсу (IProductDummyResponse)
        console.log(data.products)     //вивід у консоль
        return data.products     //повернення продуктів з об'єкта data
}

export const refresh = async () => {     //створення асинхронної функії з запитом на оновлення сторінки, що повертає об'єкт з новою парою токенів accessToken та refreshToken
   const userWithTokens = retrieveLocalStorage<IUserWithTokens>('user');    //виклик допоміжної функції retrieveLocalStorage, яка дістає об'єкт 'user' з localStorage і зберігає його у константу userWithTokens
    const {data: {accessToken, refreshToken}} =  await axiosInstance.post<ITokenPair>('/refresh', {refreshToken: userWithTokens.refreshToken, expiresInMins:1});     //запит методом POST на ендпойнт /refresh з типізацією отриманого респонсу (ITokenPair)
    userWithTokens.refreshToken = refreshToken     //оновлення об'єкту отриманого з localStorage за допомогою нового refreshToken
    userWithTokens.accessToken = accessToken     //оновлення об'єкту отриманого з localStorage за допомогою нового accessToken
    localStorage.setItem('user', JSON.stringify(userWithTokens))     // перезапис оновленого userWithTokens після попереднього його переформатування у формат json
 }