import type {IUser} from "./IUser.ts";

export interface IUserDummyResponse {
    users: IUser[],
    total: number,
    skip: number,
    limit: number

}