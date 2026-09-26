import * as axios from "axios";
import type {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: 'https://bigbird.space/carsAPI/v1',
    headers: {}
})

export const getCars = async () => {
    const response = await axiosInstance.get('/cars');
    return response.data;
}

export const addCar = async (car: ICar): Promise<ICar> => {
    const {data} =  await axiosInstance.post('/cars', car);
    return data
}