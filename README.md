# Quick-Calc

Quick-Calc is a simple calculator application developed for the Advanced Software Engineering course. It demonstrates the fundamental principles of software testing. It covers the testing concepts of unit testing, integration testing, and the usage of version control systems like Git and GitHub.

Quick-Calc supports basic arithmetic operations like addition, subtraction, multiplication, and division. It also handles the edge cases for division by zero.

## Features

- Addition of two numbers
- Subtraction of two numbers
- Multiplication of two numbers
- Division with error handling for division by zero
- Unit testing using Jest
- Integration testing for workflow validation

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/yasinsaribass/swe-testing-assignment.git

```bash
cd swe-testing-assignment

```bash
npm install

## How to Run Tests

To execute the complete test suite, run the following command:

```bash
npm test

## Testing Framework Research

For this project, Jest was chosen as the primary testing framework. However, prior to this, a comparison was made between Jest and Mocha, two of the leading testing frameworks for JavaScript.

Jest is a full-featured testing framework for React and other libraries. It comes with built-in support for assertions, mocking, and test runners. Moreover, it requires minimal setup and provides a clean and simple syntax for tests. Additionally, Jest provides automatic detection of tests and output reports. This makes it very convenient for small to medium-sized projects.

Mocha, on the other hand, is a well-featured testing framework for Node.js. This allows users to easily select their preferred assertion libraries and mocking tools. However, this flexibility comes with some additional setup and configuration. For small to medium-sized projects, this might add unnecessary complexity to the project.

For this project, Jest was chosen over other frameworks for its all-in-one solution and ease of setup and development. Additionally, its built-in features and ease of use make it perfect for demonstrating the basics of software testing.