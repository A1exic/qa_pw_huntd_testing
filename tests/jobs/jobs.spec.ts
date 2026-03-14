import { test, expect } from "@playwright/test";
import { JobsPage } from "../../src/pages/jobs/JobsPage";
import { HomePage } from "../../src/pages/home/HomePage";

test.describe("Jobs", () => {
  test.describe("Jobs Page", () => {
    test("Jobs page has correct heading", async ({ page }) => {
      const jobsPage = new JobsPage(page);
      await jobsPage.open();
      await jobsPage.assertHeadingVisible();
    });

    test("Jobs page has Post a job button", async ({ page }) => {
      const jobsPage = new JobsPage(page);
      await jobsPage.open();
      await jobsPage.assertPostAJobButtonVisible();
    });

    test("Jobs page has Top companies link", async ({ page }) => {
      const jobsPage = new JobsPage(page);
      await jobsPage.open();
      await jobsPage.assertTopCompaniesLinkVisible();
    });

    test("Jobs page has technology filters", async ({ page }) => {
      const jobsPage = new JobsPage(page);
      await jobsPage.open();
      await expect(jobsPage.backendFilter).toBeVisible();
      await expect(jobsPage.frontendFilter).toBeVisible();
      await expect(jobsPage.mobileFilter).toBeVisible();
      await expect(jobsPage.fullStackFilter).toBeVisible();
      await expect(jobsPage.reactFilter).toBeVisible();
      await expect(jobsPage.defiFilter).toBeVisible();
    });

    test("Jobs link in header navigates to Jobs page", async ({ page }) => {
      const homePage = new HomePage(page);
      await homePage.open();
      await homePage.header.clickJobs();
      await expect(page).toHaveURL(/jobs/);
    });
  });
});
