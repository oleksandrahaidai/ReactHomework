import type {IUserWithTokens} from "../models/IUserWithTokens.ts";

export const retrieveLocalStorage = <T,>(key:string ) => {     //створення стрілочної універсальної функції, що приймає аргумент key, що є ключем в localStorage
    const object = localStorage.getItem(key) || '';     //повертає завис з localStorage за заданим ключем або порожню стрінгу
    if (!object) {     //за відсутності об'єкта,
        return {} as T;     //повернеться порожній об'єкт приведений до Т
    }
    const parse: IUserWithTokens = JSON.parse(object);     //перетворення JSON-рядка ы об'єкт Javascript
    return parse as T;     //повернення джаваскріптового об'єкта приведеного до Т
}