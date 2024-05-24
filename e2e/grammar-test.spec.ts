import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // getting to the test
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Level 1' }).click();
  await page.getByRole('button', { name: 'Module 1' }).click();
  await page.getByRole('button', { name: 'How verbs are made' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();
  await page.getByRole('button', { name: 'Lesson 1' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();

  // test
  await page.getByRole('button', { name: 'Test - Present' }).click();
  await expect(page.getByRole('heading', { name: 'Translate the sentence' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'exit button' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'settings' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Test - Present' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Check' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Need a hint?' })).toBeVisible();
  await expect(page.getByText('āčēģīķļņšūž')).toBeVisible();

  // input validation
  await page.getByPlaceholder('Type here').click();
  await page.getByPlaceholder('Type here').fill('vi');
  await page.getByRole('button', { name: 'ņ' }).click();
  await expect(page.getByPlaceholder('Type here')).toHaveValue('viņ')
  await page.getByPlaceholder('Type here').click();
  await page.getByPlaceholder('Type here').fill('viņi iet');
  await page.getByRole('button', { name: 'Check' }).click();
  await expect(page.getByRole('heading', { name: 'Correct!' })).toBeVisible();
  await expect(page.getByText('viņi iet')).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Correct!' })).not.toBeVisible();
  await expect(page.getByPlaceholder('Type here')).toHaveValue('')
  await page.getByPlaceholder('Type here').click();
  await page.getByPlaceholder('Type here').fill('es dodu');
  await page.getByPlaceholder('Type here').press('Enter');
  await expect(page.getByRole('heading', { name: 'Correct!' })).toBeVisible();
  await page.getByPlaceholder('Type here').press('Enter');
  await expect(page.getByRole('heading', { name: 'Correct!' })).not.toBeVisible();
  await expect(page.getByPlaceholder('Type here')).toHaveValue('')

  // hints
  await page.getByRole('button', { name: 'Need a hint?' }).click();
  await expect(page.getByRole('cell', { name: 'Vietniekvārds' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'close' })).toBeVisible()
  await page.getByRole('button', { name: 'close' }).click();
  await expect(page.getByRole('cell', { name: 'Vietniekvārds' })).not.toBeVisible()

  // settings - hint disable
  await page.getByRole('img', { name: 'settings' }).click();
  await expect(page.getByRole('heading', { name: 'Show hints' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Show special characters' })).toBeVisible()
  await page.locator('span').first().click();
  await page.getByRole('button', { name: 'close' }).click();
  await expect(page.getByRole('heading', { name: 'Show hints' })).not.toBeVisible()
  await expect(page.getByRole('heading', { name: 'Show special characters' })).not.toBeVisible()
  await expect(page.getByRole('button', { name: 'Need a hint?' })).not.toBeVisible()

  // settings - letters disable
  await page.getByRole('img', { name: 'settings' }).click();
  await page.locator('span').nth(1).click();
  await page.getByRole('button', { name: 'close' }).click();
  await expect(page.getByText('āčēģīķļņšūž')).not.toBeVisible();

  // both visible again
  await page.getByRole('img', { name: 'settings' }).click();
  await page.locator('span').first().click();
  await page.locator('span').nth(1).click();
  await page.getByRole('button', { name: 'close' }).click();
  await expect(page.getByRole('button', { name: 'Need a hint?' })).toBeVisible()
  await expect(page.getByText('āčēģīķļņšūž')).toBeVisible();

  // finishing the test
  await page.getByRole('button', { name: 'Check' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Check' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Check' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Check' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('heading', { name: 'Test is over' })).toBeVisible();
  await page.getByRole('button', { name: 'Return' }).click();
  await expect(page.getByRole('heading', { name: 'Test is over' })).not.toBeVisible();
  await expect(page.getByRole('heading', { name: 'Irregular Verbs', exact: true })).toBeVisible();

});