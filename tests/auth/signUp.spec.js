import { test, expect } from "@playwright/test";
import { HomePage } from "../../src/pages/home/HomePage";
import { SignUpPage } from "../../src/pages/auth/SignUpPage";

test.describe("Authentication", () => {
  test.describe("Sign Up", () => {
    test("Sign Up page has correct heading", async ({ page }) => {
      const signUpPage = new SignUpPage(page);
      await signUpPage.open();
      await signUpPage.assertWelcomeHeadingVisible();
      await signUpPage.assertCreateAccountTextVisible();
    });

    test("Sign Up page has social sign in buttons", async ({ page }) => {
      const signUpPage = new SignUpPage(page);
      await signUpPage.open();
      await expect(signUpPage.signInWithGoogleButton).toBeVisible();
      await expect(signUpPage.signInWithLinkedInButton).toBeVisible();
      await expect(signUpPage.signInWithGithubButton).toBeVisible();
    });

    test("Already have account link navigates to Sign In", async ({ page }) => {
      const signUpPage = new SignUpPage(page);
      await signUpPage.open();
      await signUpPage.clickAlreadyHaveAccount();
      await expect(page).toHaveURL(/sign-in/);
    });

    test("Sign Up page opens from header", async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.open();
      await homePage.header.clickSignUp();
      await expect(page).toHaveURL(/sign-up/);
    });
  });
});
