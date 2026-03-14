import { test, expect } from "@playwright/test";
import { CandidatesPage } from "../../src/pages/candidates/CandidatesPage";
import { HomePage } from "../../src/pages/home/HomePage";

test.describe("Candidates", () => {
  test.describe("Candidates Page", () => {
    test("Candidates page has correct heading", async ({ page }) => {
      const candidatesPage = new CandidatesPage(page);
      await candidatesPage.open();
      await candidatesPage.assertHeadingVisible();
    });

    test("Free Sign Up button is visible in not authorized modal", async ({
      page,
    }) => {
      const candidatesPage = new CandidatesPage(page);
      await candidatesPage.open();
      await candidatesPage.assertFreeSignUpButtonVisible();
    });

    test("Free Sign Up button navigates to sign-up page", async ({ page }) => {
      const candidatesPage = new CandidatesPage(page);
      await candidatesPage.open();
      await candidatesPage.clickFreeSignUp();
      await expect(page).toHaveURL(/sign-up/);
    });

    test("Sign In link in modal navigates to sign-in page", async ({
      page,
    }) => {
      const candidatesPage = new CandidatesPage(page);
      await candidatesPage.open();
      await candidatesPage.clickSignIn();
      await expect(page).toHaveURL(/sign-in/);
    });

    test("Candidates link in header navigates to Candidates page", async ({
      page,
    }) => {
      const homePage = new HomePage(page);
      await homePage.open();
      await homePage.header.clickCandidates();
      await expect(page).toHaveURL(/candidates/);
    });
  });
});
