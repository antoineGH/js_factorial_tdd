## Factorial Feature TDD with Mocha

## Table of contents

-   [General info](#general-info)
-   [Details](#setails)
-   [Process](#process)
-   [Technologies](#technologies)
-   [Setup](#setup)

## General info

This project will use test-driven development to build a factorial method. This project includes the use of the assert module and mocha testing library to drive development using tests that follow the phases: setup, exercise, and verification.

## Process

The development process is guided by the red-green-refactor cycle.

1.  Write The Test: _Start with a test describing the functionality we’d like to see._
2.  Fail The Test: _Write code in response to the test that fails._
3.  Pass The Test: _The tests fail and communicate feedback through error messages._
4.  Refactor The Code: _Clean up the code, reducing any duplication_

## Details

### 1. Red

Write a test that covers the functionality to implement. You don’t have to know what your code looks like at this point, you just have to know what it will do. Run the test. You should see it fail.

### 2. Green

Read the error message from the failing test, and write as little code as possible to fix the current error message. By only writing enough code to see our test pass, we tend to write less code as a whole. Continue this process until the test passes.

### 3. Refactor

Clean up your code, reducing any duplication you may have introduced. This includes your code as well as your tests.

![Image Test](https://github.com/antoineratat/js_factorial_tdd/blob/main/screenshots/1.PNG?raw=true)

## Technologies

Project is created with:

-   JavaScript
-   mocha V8.3.2

## Setup

To run this project, clone it and start index.html

```bash
$ git clone https://github.com/antoineratat/js_factorial_tdd.git
$ cd js_factorial_tdd
$ npm install
$ npm test
```
