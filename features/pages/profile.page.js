class ProfilePage {
    get programmingJSBook() {
        return $('//*[@id="see-book-Programming JavaScript Applications"]');
    }

    get speakingJSBook() {
        return $('//*[@id="see-book-Speaking JavaScript"]');
    }

    get learningJSBook() {
        return $('//*[@id="see-book-Learning JavaScript Design Patterns"]');
    }

    get designingEvolvableBook() {
        return $('//*[@id="see-book-Designing Evolvable Web APIs with ASP.NET"]');
    }

    get understandingECMABook() {
        return $('//*[@id="see-book-Understanding ECMAScript 6"]');
    }

    get logout() {
        return $('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div[3]/button');
    }
    
    get confirmDelete() {
        return $('#closeSmallModal-ok');
    }
    
    get searchBox() {
        return $('#searchBox');
    }
    
    get goToStore() {
        return $('#gotoStore');
    }
    
    get deleteAccount() {
        return $('.text-center button');
    }

    get deleteAllBooks() {
        return $('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[3]/div[3]/button');
    }

    get bookStore() {
        return $('#gotoStore');
    }

    get loggedUser() {
        return $('#userName-value');
    }

    get profile() {
        return $('/html/body/div[2]/div/div/div[2]/div[1]/div/div/div[6]/div/ul/li[3]/span');
    }
}

export default new ProfilePage();