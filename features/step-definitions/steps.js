import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';
import BookStorePage from '../pages/book-store';
import 'chai/register-should.js';
import { expect as chaiExpect } from 'chai';

// Givens.

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(browser.config.baseUrl + page);
    browser.maximizeWindow();
});

// Whens.

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.userName.clearValue();
    await LoginPage.password.clearValue();
    await (await LoginPage.userName).setValue(username);
    await (await LoginPage.password).setValue(password);
    await LoginPage.login.click();
});

When(/^I delete all books$/, async () => {
    (await ProfilePage.deleteAllBooks).scrollIntoView();
    await ProfilePage.deleteAllBooks.click();
    await ProfilePage.confirmDelete.click();
});

When(/^I search for the following book: (.*)$/, async (book) => {
    await (await ProfilePage.searchBox).setValue(book);
    //await ProfilePage.understandingECMABook.should.exist;
    //(await ProfilePage.understandingECMABook.getText()).should.include(book);
});

When(/^I add (.*) and (.*) to my collection$/, async (book1, book2) => {
    //await ProfilePage.loggedUser.should.exist;
    (await ProfilePage.bookStore).scrollIntoView();
    (await ProfilePage.bookStore).scrollIntoView();
    await ProfilePage.bookStore.click();
    (await BookStorePage.programmingJSBook).scrollIntoView();
    await BookStorePage.programmingJSBook.click();
    (await BookStorePage.addBook).scrollIntoView();
    await BookStorePage.addBook.click();
    (await BookStorePage.goBack).scrollIntoView();
    await BookStorePage.goBack.click();
    (await BookStorePage.understandingECMABook).scrollIntoView();
    await BookStorePage.understandingECMABook.click();
    (await BookStorePage.addBook).scrollIntoView();
    await BookStorePage.addBook.click();
    (await ProfilePage.profile).scrollIntoView();
    await ProfilePage.profile.click();
});

When(/^I place the following search inside the search box: ing$/, async () => {
    await (await ProfilePage.bookStore).scrollIntoView();
    await (await ProfilePage.bookStore).click();
    //(await BookStorePage.searchBox).scrollIntoView();
    await (await BookStorePage.searchBox).setValue("ing"); // No aparece .-.
});

// Thens.

Then(/^I should see the following list of books (.*), (.*)$/, async (book1, book2) => {
    chaiExpect(await ProfilePage.programmingJSBook).to.exist;
    (await ProfilePage.programmingJSBook.getText()).should.be.equal(book1);
    chaiExpect(await ProfilePage.understandingECMABook).to.exist;
    chaiExpect(await ProfilePage.understandingECMABook.getText()).to.be.equal(book2);
    await ProfilePage.logout.click();
});

Then(/^I should see the following message (.+)$/, async (message) => {
    chaiExpect(await LoginPage.invalidUserMessage).to.exist;
    chaiExpect(await LoginPage.invalidUserMessage.getText()).to.be.equal(message);
});

Then(/^I should see an invalid-form error$/, async () => {
    chaiExpect(await LoginPage.userName).to.exist;
    chaiExpect(await LoginPage.userName.getText()).to.be.empty;
});

Then(/^I shouldn't be able to see any book on my books collection$/, async () => {
    chaiExpect((await ProfilePage.programmingJSBook).error.error).to.equal('no such element'); // Validating undefined element.
    chaiExpect((await ProfilePage.understandingECMABook).error.error).to.equal('no such element'); // Validating undefined element.
    //chaiExpect(x).to.be.undefined;
    //chaiExpect(await ProfilePage.understandingECMABook).to.be.undefined;
});

Then(/^I should be able to see the following book: Understanding ECMAScript 6$/, async () => { // NO FUNCIONA .-.
    chaiExpect(await ProfilePage.understandingECMABook).to.exist;
});