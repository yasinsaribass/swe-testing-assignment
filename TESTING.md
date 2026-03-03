## Testing Strategy
The project uses a testing strategy that includes both unit testing and integration testing.
The unit tests were created to ensure that the correctness of the different arithmetic operations such as addition, subtraction, multiplication, and division is correct.
The integration tests were created to ensure that the different operations are performed sequentially.
The edge cases were also considered in this project to ensure that the program is robust and reliable. These edge cases include division by zero, negative values, decimal values, and large values.

## Testing Pyramid
The testing strategy adopted in this project is based on the Testing Pyramid principle. Most of the tests that have been incorporated in this project are unit tests, which lie at the base of the testing pyramid.
Integration tests have also been incorporated in this project to ensure that the overall functionality of the calculator is correct when different components are used in combination.
The project has adopted a balanced testing strategy by incorporating unit tests along with integration tests.

## Black-box vs White-box Testing

This project uses aspects of both black-box and white-box testing.

Aspects of white-box testing are incorporated through the unit tests, where the internal implementation of the functions being tested is directly tested. Since the structure of the code is known, the test cases are designed to test the specific implementation of the functions, including boundary condition testing such as division by zero.

Aspects of black-box testing are also incorporated through the integration test cases, where the expected output of the operations performed by the functions being tested is considered without any specific consideration of the internal implementation of the functions. From the user's point of view, the system can be considered a "black box," where inputs are provided, and the output is considered for testing purposes.

## Regression Testing
Regression testing is performed to ensure that the previously developed code continues to run without any issues after making any alterations or additions to the code.
In this project, regression testing is facilitated through the execution of the automated tests developed using Jest. When any modifications are made to the implementation of the calculator, the command `npm test` is run to ensure that all the previously developed unit and integration tests continue to pass.
This ensures that any unwanted side effects are not introduced in the code during future modifications, thus maintaining the reliability of the project.

## Test Summary

| Test Name | Type | Status |
|-----------|------|--------|
| Addition Test | Unit | Passed |
| Subtraction Test | Unit | Passed |
| Multiplication Test | Unit | Passed |
| Division Test | Unit | Passed |
| Division by Zero Test | Unit | Passed |
| Negative Numbers Test | Unit | Passed |
| Decimal Numbers Test | Unit | Passed |
| Large Numbers Test | Unit | Passed |
| Sequential Operations Test | Integration | Passed |
| Clear Function Test | Integration | Passed |