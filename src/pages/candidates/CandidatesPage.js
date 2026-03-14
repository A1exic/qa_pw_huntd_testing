import { BasePage } from "../base/BasePage";

export class CandidatesPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.getByRole("heading", {
      name: "Candidates",
      exact: true,
    });
    this.candidatesCount = page
      .locator("div")
      .filter({ hasText: "Filters2712 anonymous" })
      .nth(4);
    this.freeSignUpButton = page
      .getByRole("link", { name: "Free sign up" })
      .nth(1);
    this.signInLink = page.getByRole("link", { name: "Sign In" }).nth(1);
    this.roleFilter = page.getByText("Select roles");
    this.technologiesFilter = page.getByPlaceholder(
      "Type or select technologies",
    );
  }

  url() {
    return "/candidates";
  }

  async assertHeadingVisible() {
    await this.heading.waitFor({ state: "visible" });
  }

  async assertFreeSignUpButtonVisible() {
    await this.freeSignUpButton.waitFor({ state: "visible" });
  }

  async clickFreeSignUp() {
    await this.freeSignUpButton.click();
  }

  async clickSignIn() {
    await this.signInLink.click();
  }
}
