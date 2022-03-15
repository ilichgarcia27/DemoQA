class BookStorePage {
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
    
    get searchBox() {
        return $('#searchBox');
    }

    get logout() {
        return $('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/button');
    }

    get goBack() {
        return $('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/div[9]/div[1]/button');
    }

    get addBook() {
        return $('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/div[9]/div[2]/button');
    }

    get isbn() {
        return $('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/div[2]/label');
    }

    get designingEvolvableTitle() {
        return $('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/label');
    }

    get bookLogout() {
        return $('/html/body/div[2]/div/div/div[2]/div[2]/div[2]/div[1]/div/button');
    }
}

export default new BookStorePage();