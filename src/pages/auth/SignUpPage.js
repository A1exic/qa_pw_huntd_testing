import { BasePage } from "../base/BasePage";

export class SignUpPage extends BasePage {
  constructor(page) {
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

  url() {
    return "/sign-up";
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async fillRepeatPassword(password) {
    await this.repeatPasswordInput.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }

  async clickAlreadyHaveAccount() {
    await this.alreadyHaveAccountLink.click();
  }

  async assertWelcomeHeadingVisible() {
    await this.welcomeHeading.waitFor({ state: "visible" });
  }

  async assertCreateAccountTextVisible() {
    await this.createAccountText.waitFor({ state: "visible" });
  }
}
