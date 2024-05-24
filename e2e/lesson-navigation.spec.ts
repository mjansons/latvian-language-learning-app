import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Level 1' }).click();
  await page.getByRole('button', { name: 'Module 1' }).click();
  await page.getByRole('button', { name: 'How verbs are made' }).click();
  await expect(page.getByRole('link', { name: 'exit button' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'settings' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Back' })).not.toBeVisible();

  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next' })).not.toBeVisible();
  await expect(page.getByRole('button', { name: 'Finish' })).toBeVisible();

  await page.getByRole('button', { name: 'Back' }).click();
  await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Back' })).not.toBeVisible();

  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Next' })).not.toBeVisible();
  await expect(page.getByRole('button', { name: 'Finish' })).toBeVisible();

  await page.getByRole('button', { name: 'Finish' }).click();
  await expect(page.getByRole('button', { name: 'How verbs are made' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Lesson 1' })).toBeVisible()

});