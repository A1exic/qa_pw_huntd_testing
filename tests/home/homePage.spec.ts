import { test, expect } from "@playwright/test";
import { HomePage } from "../../src/pages/home/HomePage";

test.describe("Home Page", () => {
  test.describe("Navigation", () => {
    test("Sign In link is visible on home page", async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.open();
      await homePage.header.assertSignInVisible();
    });

    test("Sign Up link is visible on home page", async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.open();
      await homePage.header.assertSignUpVisible();
    });

    test("GET OFFERS button is visible on home page", async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.open();
      await expect(homePage.getOffersButton).toBeVisible();
    });
  });
});
