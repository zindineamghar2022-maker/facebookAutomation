import { test, expect } from '@playwright/test';

test('Facebook homepage has Facebook in title', async ({ page }) => {
 await page.goto('https://www.facebook.com/');
await page.getByRole('textbox', { name: 'email' }).pressSequentially('wiwou');
await page.getByRole('textbox', { name: 'Password' }).pressSequentially('alloBonjojur1!');
await page.pause();

});