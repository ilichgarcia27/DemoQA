class LoginPage {
    get userName() {
        return $('#userName');
    }

    get password() {
        return $('#password');
    }

    get login() {
        return $('#login');
    }

    get invalidUserMessage() {
        return $('#name');
    }
}

export default new LoginPage();