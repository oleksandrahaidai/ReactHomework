import type {IUserWithTokens} from "../models/IUserWithTokens.ts";

export const retrieveLocalStorage = <T,>(key:string ) => {     //створення стрілочної універсальної функції, що приймає аргумент key, що є ключем в localStorage
    const object = localStorage.getItem(key) || '';     //повертає запис з localStorage за заданим ключем або порожню стрінгу (якщо не існує object за такими ключем)
    if (!object) {     //за відсутності об'єкта,
        return {} as T;     //повернеться порожній об'єкт
    }
    const parse: IUserWithTokens = JSON.parse(object);     //перетворення JSON-рядка ы об'єкт Javascript
    return parse as T;     //повернення джаваскріптового об'єкта
}
// Дженерік використовується для того, щоб мати можливість працювати з різними типами даних з одночасним збереженням строгої типізації, дженерік додає гнучкості функції
// Typescript існує лише на етапі розробки, весь код компілюється в Javascript перед запуском в браузер, використовуючи оператор as для приведення типів
// Після цього компілятор видаляє конструкції <T> та as <T>, бо Javascript не має системи типізації Typescript і не знає, що це означає
//У рантаймі рядок return parse as T перетворюється на return parse, браузер не перевіряє, чи дійсно дані з localStorage відповідають очікуваній структурі даних


