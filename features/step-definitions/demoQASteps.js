import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://demoqa.com/${page}`);
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await $('#userName').setValue(username);
    await $('#password').setValue(password);
    await $('#login').click();
});

Then(/^I should see the following list of books (.*), (.*)$/, async (book1, book2) => {
    await expect($('//*[@id="see-book-Programming JavaScript Applications"]')).toBeExisting();
    await expect($('//*[@id="see-book-Programming JavaScript Applications"]')).toHaveTextContaining(book1);
    await expect($('//*[@id="see-book-Understanding ECMAScript 6"]')).toBeExisting();
    await expect($('//*[@id="see-book-Understanding ECMAScript 6"]')).toHaveTextContaining(book2);
});