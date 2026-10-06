export interface IUserWithTokens { //модель даних, що повертається з промісі в результаті відпрацювання асинхронної функції login та виконання запиту на 'https://dummyjson.com/auth/login'
	firstName: string;
	lastName: string;
	image: string;
	gender: string;
	id: number;
	accessToken: string;
	email: string;
	username: string;
	refreshToken: string;
}

