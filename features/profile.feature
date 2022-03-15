Feature: Demo QA Profile

  Scenario Outline: As a logged user with correct credentials, I can go to my Profile page and delete my books collection

    Given I am on the login page
    When I login with <username> and <password>
    And I delete all books
    Then I shouldn't be able to see any book on my books collection

    Examples:
      | username           | password    |
      | Anibal.Schmitt79   | Testing123! |

  Scenario Outline: As a logged user, I can go to my Profile page and logout from the app

    Given I am on the login page
    When I login with <username> and <password>
    And I click on the logout button
    Then I should get redirected to the login page

    Examples:
      | username           | password    |
      | Anibal.Schmitt79   | Testing123! |
  
  Scenario Outline: As an existing user with correct credentials, I can delete my own account from the app

    Given I am on the login page
    When I login with <username> and <password>
    And I delete my account from the app
    Then I should get redirected to the login page

    Examples:
      | username           | password    |
      | test1              | Testing123! |