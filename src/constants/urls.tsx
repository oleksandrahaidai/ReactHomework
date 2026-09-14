export const baseUrl = 'https://dummyjson.com';

export const urls = {
    users: {
        allUsers: baseUrl + '/users'
    },
    carts: {
        allCartsByUserId:(userId:number) => baseUrl + '/carts/user/'+ userId
    }
}