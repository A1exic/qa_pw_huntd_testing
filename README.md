# Task Description

To see the description of the task assignment [follow the link](https://github.com/mate-academy/qa_pw_huntd_testing/blob/main/TaskDescription.md).

# Repository Overview

This repository contains a test automation framework for the [Huntd](https://huntd.tech/) application testing.

# How to use this project

## Installation steps

To install the project follow the next steps:

1. Install Node.js.
2. Run the installation command in the project root.:

```bash
npm ci
```

3. Run the browsers installation in the project root.

```bash
npx playwright install
```

4. Install Allure commandline tool (Allure requires Java 8 or higher).

```bash
npm install -g allure-commandline
```

# Huntd Testing Framework

Playwright test automation framework for [Huntd](https://huntd.tech/) application.

## Tech Stack

- [Playwright](https://playwright.dev/) - test framework
- [Allure](https://allurereport.org/) - test reporting
- Node.js 20+

## Project Structure

```
src/
  components/     # Reusable UI components (Header)
  factories/      # Test data factories (UserFactory)
  pages/
    base/         # BasePage class
    auth/         # SignInPage, SignUpPage
    candidates/   # CandidatesPage
    home/         # HomePage
    jobs/         # JobsPage
tests/
  auth/           # Sign In / Sign Up tests
  candidates/     # Candidates page tests
  home/           # Home page tests
  jobs/           # Jobs page tests
```

## How to run the tests

### Install dependencies

```bash
npm ci
npx playwright install
```

### Run all tests

```bash
npm run test
```

### Run in Docker

```bash
docker build -t huntd-tests .
docker run huntd-tests
```

## How to generate report

### Generate and open Allure report

```bash
npm run test:report
```

Report will open automatically in your browser.
