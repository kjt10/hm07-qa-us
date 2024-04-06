# Sprint 7 project: Urban Grocers API testing

## Project description:
This project is designed to test the API for the Urban Grocers app. Tests were created for the GET, POST, PUT and DELETE requests using JavaScript to test response status codes and to check that the response body contained the expected data.

## Setup:
Before running the tests, make sure you have the following software installed:
1. Git
2. Visual Studio Code
3. Postman

## Configuration:
1. Clone the repository to your local directory.
2. In the terminal in this directory run: `npm install`
3. Start the Urban Grocers server and copy the server URL.
4. Add the server URL to `config.js` file in the `API_URL` variable value.
5. Run all the tests: `npx jest` or run individual tests `npx jest {testName.test.js}`

## Running Tests:
1. Use swagger UI or API Urban Grocers to test the API for the Urban Grocers app
2. In postman insert the URL with endpoint and send to check status code and response body
3. In VS code use the templates provided to create tests for the requests GET, POST, PUT and DELETE for Urban Grocers app
4. Give the test a name that would help you identify what you are testing
5. Paste the endpoint used in Postman on the test in VS code where it says `/your/endpoint`
6. Declare the variable by using let and naming it `actualStatusCode` if you're testing the code or `actualResponseBody` if you're testing the response body
7. To extract the response code and response body use the specific command for testing the `code` or `response body` as follows `actualStatusCode = response.status` or `actualResponseBody = await response.json()`
8. Use the `expect` and `toBe` commands to verify the expected result
9. Save your tests before running the tests
10. When you're ready to run the test use the command `npx jest` or `npx jest {testName.test.js}`
11. Check if the test passed or failed and what the expected and received results are supposed to be

## Test Cases:
1. GET requests:
    Should return 200 OK status code - PASSED
    Should return kit name in response body - PASSED
2. POST requests:
    Should return 201 status code - PASSED
    Should return warehouse name in response body - PASSED
3. PUT requests:
    Should return 200 OK status code - PASSED
    Should return courier service name in response body - PASSED
4. DELETE requests:
    Should return 200 OK status code - PASSED
    Should return "true" in response body - PASSED