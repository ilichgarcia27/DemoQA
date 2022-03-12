import Page from './page';

class LoginPage extends Page {
    open() {
        super.open('https://demoqa.com');
    }

    get userName() {
        return $('//*[@id="userName"]');
    }

    get password() {
        return $('//*[@id="password"]');
    }

    get login() {
        return $('#login');
    }

    get book1() {
        return $('//*[@id="see-book-Programming JavaScript Applications"]');
    }

    get book2() {
        return $('//*[@id="see-book-Understanding ECMAScript 6"]');
    }

    get logout() {
        return $('#submit');
    }

    get delete() {
        return $('#delete-record-undefined');
    }

    get closeModal() {
        return $('#closeSmallModal-ok');
    }

    get invalidUserMessage() {
        return $('#name');
    }
}

export default new LoginPage();