export interface ICart {
    discountedTotal: number;
    total: number;
    totalQuantity: number;
    totalProducts: number;
    id: number;
    userId: number;
    products: Array<productsItem>;
}

interface productsItem {
	discountPercentage: number;
	discountedTotal: number;
	total: number;
	thumbnail: string;
	quantity: number;
	price: number;
	id: number;
	title: string;
}



