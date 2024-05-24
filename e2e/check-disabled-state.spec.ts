import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Level 1' }).click();
  await page.getByRole('button', { name: 'Module 1' }).click();

  // check disabled state for next button
  let isLesson1Disabled = await page.getByRole('button', { name: 'Lesson 1' }).isDisabled();
  expect(isLesson1Disabled).toBe(true);
  await page.getByRole('button', { name: 'How verbs are made' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();
  isLesson1Disabled = await page.getByRole('button', { name: 'Lesson 1' }).isDisabled();
  expect(isLesson1Disabled).toBe(false);

  await page.getByRole('button', { name: 'Lesson 1' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();

});