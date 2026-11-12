import { test, expect } from "@playwright/test";

const slugs = ["evalops", "nexus", "task-manager", "weather-search"];

test.describe("portfolio", () => {
  test("home page shows the name and hero buttons", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("ABDULWAHAB TESLIM");
    await expect(page.getByRole("link", { name: "Explore My Work" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact Me" })).toBeVisible();
  });

  test("resume link points to the PDF in /public", async ({ page }) => {
    await page.goto("/");
    const link = page.getByRole("link", { name: "Download Resume" }).first();
    await expect(link).toHaveAttribute("href", "/Abdulwahab_Teslim_Resume_Final.pdf");
  });

  test("page does not scroll sideways", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth
    );
    expect(overflow).toBe(false);
  });

  for (const slug of slugs) {
    test(`case study page opens: ${slug}`, async ({ page }) => {
      await page.goto(`/projects/${slug}`);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.getByRole("link", { name: "Live demo" })).toHaveAttribute("href", /^https:\/\//);
    });
  }

  test("QA test case filter shows only failed cases", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Fail", exact: true }).click();
    await expect(page.locator("#qa tbody tr")).toHaveCount(1);
  });

  test("theme toggle switches to dark mode", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Switch to dark mode" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);
  });

  test("mobile menu opens on a phone-sized screen", async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.goto("http://localhost:3000/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile" })).toBeVisible();
    await context.close();
  });
});
