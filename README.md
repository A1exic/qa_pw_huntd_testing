# Task Description

To see the description of the task assignment [follow the link](https://github.com/mate-academy/qa_pw_huntd_testing/blob/main/TaskDescription.md).

# Repository Overview

This repository contains a test automation framework for the [Huntd](https://huntd.tech/) application testing.

# Huntd Testing Framework

Playwright test automation framework for [Huntd](https://huntd.tech/) application.

## Tech Stack

- [Playwright](https://playwright.dev/) - test framework
- [TypeScript](https://www.typescriptlang.org/) - language
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

### 1. Install dependencies

```bash
npm ci
```

### 2. Install Playwright browsers

```bash
npx playwright install
```

### 3. Run all tests

```bash
npm run test
```

### 4. Run in Docker

```bash
docker build -t huntd-tests .
docker run huntd-tests
```

## How to generate report

### 1. Run tests with Allure reporter

```bash
npx playwright test --reporter=allure-playwright
```

### 2. Generate Allure report

```bash
npx allure generate allure-results --clean -o allure-report
```

### 3. Open Allure report

```bash
npx allure open allure-report
```

### Or use the npm script (generates and opens automatically)

```bash
npm run test:report
```
