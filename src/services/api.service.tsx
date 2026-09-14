import type {IUser} from "../models/users/IUser.ts";
import type {IUserDummyResponse} from "../models/users/IUserDummyResponse.ts";
import type {ICart} from "../models/carts/ICart.ts";
import type {ICartDummyResponse} from "../models/carts/ICartDummyResponse.ts";
import {urls} from "../constants/urls.tsx";

export const userService = {
    getAllUsers: async():Promise<IUser[]> => {
        const response: IUserDummyResponse = await fetch(urls.users.allUsers)
            .then(res => res.json())
        return response.users;
    }
}

export const cartService = {
    getAllCartsByUserId: async(userId: number):Promise<ICart[]> => {
        const response:ICartDummyResponse = await fetch(urls.carts.allCartsByUserId(userId))
        .then(res => res.json())
        return response.carts;
    }
}