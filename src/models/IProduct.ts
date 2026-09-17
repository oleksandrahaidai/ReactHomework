import type {IReview} from "./IReview.ts";
import type {IMeta} from "./IMeta.ts";
import type {IDimensions} from "./IDimensions.ts";

export interface IProduct {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: [string, string],
    brand: string,
    sku: string,
    weight: number,
    dimensions:IDimensions,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews:IReview[],
    returnPolicy: string
    minimumOrderQuantity: number,
    meta: IMeta,
    images: [string],
    thumbnail: string
}