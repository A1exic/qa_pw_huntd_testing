import { test, expect } from "@playwright/test";
import { HomePage } from "../../src/pages/home/HomePage";
import { SignInPage } from "../../src/pages/auth/SignInPage";
import { UserFactory } from "../../src/factories/UserFactory";

test.describe("Authentication", () => {
  test.describe("Sign In", () => {
    test("Sign In page opens from header", async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.open();
      await homePage.header.clickSignIn();
      await expect(page).toHaveURL(/sign-in/);
    });

    test("Sign In with invalid credentials shows error", async ({ page }) => {
      const signInPage = new SignInPage(page);
      const invalidUser = UserFactory.create();
      await signInPage.open();
      await signInPage.fillEmail(invalidUser.email);
      await signInPage.fillPassword(invalidUser.password);
      await signInPage.submit();
      await signInPage.assertWrongCredentialsErrorVisible();
    });

    test("Sign In with empty password shows error", async ({ page }) => {
      const signInPage = new SignInPage(page);
      await signInPage.open();
      await signInPage.fillEmail("test@test.com");
      await signInPage.submit();
      await signInPage.assertPasswordRequiredErrorVisible();
    });
  });

  test.describe("Sign Up", () => {
    test("Sign Up page opens from header", async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.open();
      await homePage.header.clickSignUp();
      await expect(page).toHaveURL(/sign-up/);
    });
  });
});
