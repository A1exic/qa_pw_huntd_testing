import { Page, Locator } from "@playwright/test";

export class Header {
  private page: Page;
  readonly signInLink: Locator;
  readonly signUpLink: Locator;
  readonly candidatesLink: Locator;
  readonly jobsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole("link", { name: "Sign In" }).first();
    this.signUpLink = page.getByRole("link", { name: "Sign up" }).first();
    this.candidatesLink = page.getByRole("link", { name: "Candidates" });
    this.jobsLink = page.getByRole("link", { name: "Jobs", exact: true });
  }

  async clickSignIn(): Promise<void> {
    await this.signInLink.click();
  }

  async clickSignUp(): Promise<void> {
    await this.signUpLink.click();
  }

  async clickCandidates(): Promise<void> {
    await this.candidatesLink.click();
  }

  async clickJobs(): Promise<void> {
    await this.jobsLink.click();
  }

  async assertSignInVisible(): Promise<void> {
    await this.signInLink.waitFor({ state: "visible" });
  }

  async assertSignUpVisible(): Promise<void> {
    await this.signUpLink.waitFor({ state: "visible" });
  }
}
