import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole('button', { name: 'Home' })).toHaveClass("selected")
  await expect(page.getByRole('button', { name: 'Stats' })).not.toHaveClass("selected")
  await expect(page.getByRole('button', { name: 'Settings' })).not.toHaveClass("selected")
  await expect(page.getByRole('button', { name: 'introduction to verbs Level 1' })).toBeVisible();

  await page.getByRole('button', { name: 'Stats' }).click();
  await expect(page.getByRole('button', { name: 'Home' })).not.toHaveClass("selected")
  await expect(page.getByRole('button', { name: 'Stats' })).toHaveClass("selected")
  await expect(page.getByRole('button', { name: 'Settings' })).not.toHaveClass("selected")
  await expect(page.locator('div').filter({ hasText: 'Streak' }).nth(3)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Accuracy' }).nth(3)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Tests Completed' }).nth(3)).toBeVisible();


  await page.getByRole('button', { name: 'Settings' }).click();
  await expect(page.getByRole('button', { name: 'Home' })).not.toHaveClass("selected")
  await expect(page.getByRole('button', { name: 'Stats' })).not.toHaveClass("selected")
  await expect(page.getByRole('button', { name: 'Settings' })).toHaveClass("selected")
  await expect(page.locator('div').filter({ hasText: 'Show hints' }).nth(3)).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Show special characters' }).nth(3)).toBeVisible();
});