import { BasePage } from "../base/BasePage";

export class SignInPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.submitButton = page.locator('button[type="submit"]');
    this.wrongCredentialsError = page.getByText("Wrong credentials");
    this.passwordRequiredError = page.getByText("Password is required");
  }

  url() {
    return "/sign-in";
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }

  async assertWrongCredentialsErrorVisible() {
    await this.wrongCredentialsError.waitFor({ state: "visible" });
  }

  async assertPasswordRequiredErrorVisible() {
    await this.passwordRequiredError.waitFor({ state: "visible" });
  }
}
