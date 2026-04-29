import axios from "axios";
import type {ICar} from "../models/ICar.ts";

const axiosInstance =axios.create({
    baseURL:'http://owu.linkpc.net/carsAPI/v1/doc',
    headers:{'Content-Type': 'application/json'},
})

export const getCars = async() :Promise<ICar[]> => {
    const axionResponse = await axiosInstance.get<ICar[]>('/cars');
    const cars = axionResponse.data;
    return cars
}

export const addCar = async (car:ICar) => {
    await axiosInstance.post('/cart', car)
}
