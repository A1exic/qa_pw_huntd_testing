import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class CandidatesPage extends BasePage {
  readonly heading: Locator;
  readonly freeSignUpButton: Locator;
  readonly signInLink: Locator;
  readonly roleFilter: Locator;
  readonly technologiesFilter: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole("heading", {
      name: "Candidates",
      exact: true,
    });
    this.freeSignUpButton = page
      .getByRole("link", { name: "Free sign up" })
      .nth(1);
    this.signInLink = page.getByRole("link", { name: "Sign In" }).nth(1);
    this.roleFilter = page.getByText("Select roles");
    this.technologiesFilter = page.getByPlaceholder(
      "Type or select technologies",
    );
  }

  url(): string {
    return "/candidates";
  }

  async assertHeadingVisible(): Promise<void> {
    await this.heading.waitFor({ state: "visible" });
  }

  async assertFreeSignUpButtonVisible(): Promise<void> {
    await this.freeSignUpButton.waitFor({ state: "visible" });
  }

  async clickFreeSignUp(): Promise<void> {
    await this.freeSignUpButton.click();
  }

  async clickSignIn(): Promise<void> {
    await this.signInLink.click();
  }
}
