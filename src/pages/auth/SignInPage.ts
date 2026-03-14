import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class SignInPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly wrongCredentialsError: Locator;
  readonly passwordRequiredError: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.submitButton = page.locator('button[type="submit"]');
    this.wrongCredentialsError = page.getByText("Wrong credentials");
    this.passwordRequiredError = page.getByText("Password is required");
  }

  url(): string {
    return "/sign-in";
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  async assertWrongCredentialsErrorVisible(): Promise<void> {
    await this.wrongCredentialsError.waitFor({ state: "visible" });
  }

  async assertPasswordRequiredErrorVisible(): Promise<void> {
    await this.passwordRequiredError.waitFor({ state: "visible" });
  }
}
