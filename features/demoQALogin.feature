Feature: Demo QA Login

  Scenario Outline: As a user, I can log in to the demo QA page

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see the following list of books <book1>, <book2>

    Examples:
      | username           | password    | book1                               | book2                      |
      | Kiarra.Satterfield | Testing123! | Programming JavaScript Applications | Understanding ECMAScript 6 |
      | Sonia_Rath95       | Testing123! | Programming JavaScript Applications | Understanding ECMAScript 6 |

  Scenario Outline: As a non-existing user, I can't log in to the demo QA page

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see the following message <message>

    Examples:
      | username           | password     | message                       |
      | fakeUserName       | fakePassword | Invalid username or password! |
      | I-dont-exist       | neither-Do-I | Invalid username or password! |