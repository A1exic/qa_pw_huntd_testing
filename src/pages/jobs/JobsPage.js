import { BasePage } from "../base/BasePage";

export class JobsPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.getByRole("heading", { name: "Jobs", exact: true });
    this.postAJobButton = page.getByRole("button", { name: "Post a job" });
    this.topCompaniesLink = page.getByRole("link", { name: "Top companies" });
    this.backendFilter = page.locator("div").filter({ hasText: /^Backend$/ });
    this.frontendFilter = page.locator("div").filter({ hasText: /^Frontend$/ });
    this.mobileFilter = page.locator("div").filter({ hasText: /^Mobile$/ });
    this.fullStackFilter = page
      .locator("div")
      .filter({ hasText: /^Full-Stack$/ });
    this.reactFilter = page.locator("div").filter({ hasText: /^React$/ });
    this.defiFilter = page.locator("div").filter({ hasText: /^Defi$/ });
  }

  url() {
    return "/jobs";
  }

  async assertHeadingVisible() {
    await this.heading.waitFor({ state: "visible" });
  }

  async assertPostAJobButtonVisible() {
    await this.postAJobButton.waitFor({ state: "visible" });
  }

  async assertTopCompaniesLinkVisible() {
    await this.topCompaniesLink.waitFor({ state: "visible" });
  }

  async clickBackendFilter() {
    await this.backendFilter.click();
  }

  async clickFrontendFilter() {
    await this.frontendFilter.click();
  }
}
