import { Given, When, And, Then } from '@wdio/cucumber-framework';

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://demoqa.com/${page}`);
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await $('#userName').setValue("");
    await $('#password').setValue("");
    await $('#userName').setValue(username);
    await $('#password').setValue(password);
    await $('#login').click();
});

When(/^I delete book (.*)$/, async (book) => {
    await expect($('//*[@id="see-book-Programming JavaScript Applications"]')).toBeExisting();
    await expect($('//*[@id="see-book-Programming JavaScript Applications"]')).toHaveTextContaining(book);
    await expect($('#delete-record-undefined')).toBeExisting();
    await $('#delete-record-undefined').click();
    await expect($('#closeSmallModal-ok')).toBeExisting();
    await $('#closeSmallModal-ok').click();
});

Then(/^I should see the following list of books (.*), (.*)$/, async (book1, book2) => {
    await expect($('//*[@id="see-book-Programming JavaScript Applications"]')).toBeExisting();
    await expect($('//*[@id="see-book-Programming JavaScript Applications"]')).toHaveTextContaining(book1);
    await expect($('//*[@id="see-book-Understanding ECMAScript 6"]')).toBeExisting();
    await expect($('//*[@id="see-book-Understanding ECMAScript 6"]')).toHaveTextContaining(book2);
    await $('#submit').click();
});

Then(/^I should see the following message (.+)$/, async (message) => {
    await expect($('#name')).toBeExisting();
    await expect($('#name')).toHaveTextContaining(message);
});

Then(/^I should see an invalid-form error$/, async () => {
    await expect($('//*[@id="userName"]')).toBeExisting();
    await expect($('//*[@id="userName"]')).toHaveTextContaining("");
});

Then(/^I shouldn't be able to see the book I previously deleted$/, async () => {
    await !expect($('//*[@id="see-book-Programming JavaScript Applications"]')).toBeExisting();
});