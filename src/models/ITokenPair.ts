export interface ITokenPair { // модель даних, що повертається в результаті відпрацювання асинхронної функції refresh та виконання запиту на 'https://dummyjson.com/auth/refresh',
	accessToken: string;  // типізація об'єкту з оновленими рефреш та аксес токенами
	refreshToken: string;
}

