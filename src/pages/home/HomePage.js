import { BasePage } from "../base/BasePage";
import { Header } from "../../components/Header";

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new Header(page);
    this.emailInput = page.locator(
      'input[type="email"], input[placeholder="Email"]',
    );
    this.getOffersButton = page.locator(
      'button:has-text("GET OFFERS"), a:has-text("GET OFFERS")',
    );
  }

  url() {
    return "/";
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async clickGetOffers() {
    await this.getOffersButton.click();
  }

  async assertGetOffersButtonVisible() {
    await this.getOffersButton.isVisible();
  }
}
