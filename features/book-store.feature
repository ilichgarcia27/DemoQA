Feature: Demo QA Book Store

  Scenario Outline: As an existing user with correct credentials, I can add books to my books collection

   Given I am on the login page
   When I login with <username> and <password>
   And I add <book1> and <book2> to my collection
   Then I should see the following list of books <book1>, <book2>

   Examples:
     | username           | password    | book1                               | book2                      |
     | Anibal.Schmitt79   | Testing123! | Programming JavaScript Applications | Understanding ECMAScript 6 |

  Scenario Outline: As an existing user with correct credentials, I can look for books/authors in the book store

   Given I am on the login page
   When I login with <username> and <password>
   And I place the following search inside the search box: learning
   Then I should see the following book: <book>

   Examples:
     | username           | password    | book                                |
     | Kiarra.Satterfield | Testing123! | Learning JavaScript Design Patterns |
  
  Scenario Outline: As an existing user with correct credentials, I can see information from any book

   Given I am on the login page
   When I login with <username> and <password>
   And I access <book> book to see its information
   Then an information view should be displayed showing: <book>, <isbn>

   Examples:
     | username     | password    | book                                      | isbn          |
     | Sonia_Rath95 | Testing123! | Designing Evolvable Web APIs with ASP.NET | 9781449337711 |