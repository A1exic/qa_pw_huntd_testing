import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class SignUpPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly repeatPasswordInput: Locator;
  readonly submitButton: Locator;
  readonly welcomeHeading: Locator;
  readonly createAccountText: Locator;
  readonly alreadyHaveAccountLink: Locator;
  readonly signInWithGoogleButton: Locator;
  readonly signInWithLinkedInButton: Locator;
  readonly signInWithGithubButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.repeatPasswordInput = page.getByRole("textbox", {
      name: "Repeat password",
    });
    this.submitButton = page.locator('button[type="submit"]');
    this.welcomeHeading = page.getByRole("heading", {
      name: "Welcome aboard!",
    });
    this.createAccountText = page.getByText("Create an account");
    this.alreadyHaveAccountLink = page
      .getByRole("paragraph")
      .filter({ hasText: "Already have an account? Sign" })
      .getByRole("link");
    this.signInWithGoogleButton = page
      .getByRole("button", { name: "Sign in with" })
      .first();
    this.signInWithLinkedInButton = page
      .getByRole("button", { name: "Sign in with" })
      .nth(1);
    this.signInWithGithubButton = page
      .getByRole("button", { name: "Sign in with" })
      .nth(2);
  }

  url(): string {
    return "/sign-up";
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async fillRepeatPassword(password: string): Promise<void> {
    await this.repeatPasswordInput.fill(password);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async clickAlreadyHaveAccount(): Promise<void> {
    await this.alreadyHaveAccountLink.click();
  }

  async assertWelcomeHeadingVisible(): Promise<void> {
    await this.welcomeHeading.waitFor({ state: "visible" });
  }

  async assertCreateAccountTextVisible(): Promise<void> {
    await this.createAccountText.waitFor({ state: "visible" });
  }
}
