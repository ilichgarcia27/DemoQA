import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page';
import 'chai/register-should.js';

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://demoqa.com/${page}`);
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.userName.clearValue();
    await LoginPage.password.clearValue();
    await LoginPage.userName.setValue(username);
    await LoginPage.password.setValue(password);
    await LoginPage.login.click();
});

When(/^I delete book (.*)$/, async (book) => {
    await LoginPage.book1.should.exist;
    (await LoginPage.book1.getText()).should.be.equal(book);
    await LoginPage.delete.should.exist;
    await LoginPage.delete.click();
    await LoginPage.closeModal.should.exist;
    await LoginPage.closeModal.click();
});

Then(/^I should see the following list of books (.*), (.*)$/, async (book1, book2) => {
    await LoginPage.book1.should.exist;
    (await LoginPage.book1.getText()).should.be.equal(book1);
    await LoginPage.book2.should.exist;
    (await LoginPage.book2.getText()).should.be.equal(book2);
    await LoginPage.logout.click();
});

Then(/^I should see the following message (.+)$/, async (message) => {
    await LoginPage.invalidUserMessage.should.exist;
    (await LoginPage.invalidUserMessage.getText()).should.be.equal(message);
});

Then(/^I should see an invalid-form error$/, async () => {
    await LoginPage.userName.should.exist;
    (await LoginPage.userName.getText()).should.be.empty;
});

Then(/^I shouldn't be able to see the book I previously deleted$/, async () => {
    await LoginPage.book1.should.exist;
});