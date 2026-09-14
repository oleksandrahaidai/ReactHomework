export interface IUser {
    lastName: string;
    role: string;
    gender: string;
    university: string;
    maidenName: string;
    ein: string;
    ssn: string;
    bloodGroup: string;
    password: string;
    hair: hairItem;
    bank: bankItem;
    eyeColor: string;
    company: companyItem;
    id: number;
    email: string;
    height: number;
    image: string;
    address: addressItem;
    ip: string;
    weight: number;
    userAgent: string;
    birthDate: string;
    crypto: cryptoItem;
    firstName: string;
    macAddress: string;
    phone: string;
    age: number;
    username: string;
}

interface hairItem {
	color: string;
	type: string;
}

interface bankItem {
	iban: string;
	cardExpire: string;
	cardType: string;
	currency: string;
	cardNumber: string;
}

interface addressItem {
	country: string;
	address: addressItem;
	city: string;
	postalCode: string;
	coordinates: coordinatesItem;
	stateCode: string;
	state: string;
}

interface coordinatesItem {
	lng: number;
	lat: number;
}

interface companyItem {
	address: addressItem;
	name: string;
	department: string;
	title: string;
}

interface cryptoItem {
	wallet: string;
	coin: string;
	network: string;
}


