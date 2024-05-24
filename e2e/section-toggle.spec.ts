import { test, expect} from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Level 1' }).click();
  await expect(page.getByText('LearnPractice')).toBeVisible();
  await page.getByText('Practice').click();
  await expect(page.getByText('Test - Present')).toBeVisible();
  await page.getByText('Learn').click();
  await expect(page.getByText('Module 1')).toBeVisible();

  await page.getByRole('button', { name: 'Module 1' }).click();
  await expect(page.getByText('Lesson 1')).toBeVisible();
  await page.getByText('Practice').click();
  await expect(page.getByText('Test - Present')).toBeVisible();
  await page.getByText('Learn').click();
  await expect(page.getByText('Lesson 1')).toBeVisible();
});