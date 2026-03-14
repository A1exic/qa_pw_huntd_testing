import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { Header } from "../../components/Header";

export class HomePage extends BasePage {
  readonly header: Header;
  readonly emailInput: Locator;
  readonly getOffersButton: Locator;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
    this.emailInput = page.locator('input[type="email"]');
    this.getOffersButton = page.getByRole("button", { name: "GET OFFERS" });
  }

  url(): string {
    return "/";
  }
}
