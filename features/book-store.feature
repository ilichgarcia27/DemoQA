Feature: Demo QA Book Store

  #Scenario Outline: As an existing user with correct credentials, I can add books to my books collection
#
  #  Given I am on the login page
  #  When I login with <username> and <password>
  #  And I add <book1> and <book2> to my collection
  #  Then I should see the following list of books <book1>, <book2>
#
  #  Examples:
  #    | username           | password    | book1                               | book2                      |
  #    | Kiarra.Satterfield | Testing123! | Programming JavaScript Applications | Understanding ECMAScript 6 |
      #| Sonia_Rath95       | Testing123! | Programming JavaScript Applications | Understanding ECMAScript 6 |

  Scenario Outline: As an existing user with correct credentials, I can look for books/authors in the book store

   Given I am on the login page
   When I login with <username> and <password>
   And I place the following search inside the search box: ing
   Then I should see the following list of books <book1>, <book2>, <book3>, <book4>, <book5>

   Examples:
     | username           | password    | book1                               | book2                      | book3                               | book4               | book5                                     |
     | Kiarra.Satterfield | Testing123! | Programming JavaScript Applications | Understanding ECMAScript 6 | Learning JavaScript Design Patterns | Speaking JavaScript | Designing Evolvable Web APIs with ASP.NET |
      #| Sonia_Rath95       | Testing123! | Programming JavaScript Applications | Understanding ECMAScript 6 |

#  Scenario Outline: As a non-specified user, I can't log in to the demo QA page
#
#    Given I am on the login page
#    When I login with <username> and <password>
#    Then I should see an invalid-form error
#
#    Examples:
#      | username           | password     |
#      |                    |              |