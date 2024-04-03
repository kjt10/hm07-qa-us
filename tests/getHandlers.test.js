// eslint-disable-next-line no-undef
const config = require('../config');

test('Return 200 OK status code', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

test('Return an array in the response body', async () => {
	let responseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		responseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(typeof responseBody).toBe('object');
	expect(responseBody.length).toBeGreaterThanOrEqual(1);
});