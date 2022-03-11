Feature: Demo QA Login

  Scenario Outline: As a user, I can log into the demo QA page

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see the following list of books <book1>, <book2>

    Examples:
      | username           | password    | book1                               | book2                      |
      | Kiarra.Satterfield | Testing123! | Programming JavaScript Applications | Understanding ECMAScript 6 |
      | Sonia_Rath95       | Testing123! | 