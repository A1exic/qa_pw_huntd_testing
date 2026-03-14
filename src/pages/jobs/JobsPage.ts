import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";

export class JobsPage extends BasePage {
  readonly heading: Locator;
  readonly postAJobButton: Locator;
  readonly topCompaniesLink: Locator;
  readonly backendFilter: Locator;
  readonly frontendFilter: Locator;
  readonly mobileFilter: Locator;
  readonly fullStackFilter: Locator;
  readonly reactFilter: Locator;
  readonly defiFilter: Locator;

  constructor(page: Page) {
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

  url(): string {
    return "/jobs";
  }

  async assertHeadingVisible(): Promise<void> {
    await this.heading.waitFor({ state: "visible" });
  }

  async assertPostAJobButtonVisible(): Promise<void> {
    await this.postAJobButton.waitFor({ state: "visible" });
  }

  async assertTopCompaniesLinkVisible(): Promise<void> {
    await this.topCompaniesLink.waitFor({ state: "visible" });
  }
}
