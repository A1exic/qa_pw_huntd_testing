export class Header {
  constructor(page) {
    this.page = page;
    this.signInLink = page.getByRole("link", { name: "Sign In" }).first();
    this.signUpLink = page.getByRole("link", { name: "Sign up" }).first();
    this.candidatesLink = page.getByRole("link", { name: "Candidates" });
    this.jobsLink = page.getByRole("link", { name: "Jobs", exact: true });
  }

  async clickSignIn() {
    await this.signInLink.click();
  }

  async clickSignUp() {
    await this.signUpLink.click();
  }

  async clickCandidates() {
    await this.candidatesLink.click();
  }

  async clickJobs() {
    await this.jobsLink.click();
  }

  async assertSignInVisible() {
    await this.signInLink.waitFor({ state: "visible" });
  }

  async assertSignUpVisible() {
    await this.signUpLink.waitFor({ state: "visible" });
  }
}
