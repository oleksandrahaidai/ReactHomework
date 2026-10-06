export interface IProduct { //модель описує продукт, що приходить з 'https://dummyjson.com/auth/products'; використовується в подальшому для типізації в промісі,
    id: number,            //що повертає асинхронна функція loadAuthProducts - проміс з масивом об'єктів типу IProduct
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock:number,
    tags: [string, string],
    brand: string,
    sku: string,
    weight: number,
    dimensions: {
        width: number,
        height: number,
        depth: number },
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: [
        {
        rating: number,
        comment: string,
        date: string,
        reviewerName: string,
        reviewerEmail: string
        },
        {
        rating: number,
        comment: string,
        date: string,
        reviewerName: string,
        reviewerEmail: string
        },
        {
        rating:number,
        comment: string,
        date: string,
        reviewerName: string,
        reviewerEmail: string
        }
    ],
    returnPolicy: string,
    minimumOrderQuantity:number,
    meta:
        {
        createdAt: string,
        updatedAt: string,
        barcode: string,
        qrCode: string
    },
    thumbnail: string,
    images: [string, string, string]
}