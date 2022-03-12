Feature: Demo QA Profile

  Scenario Outline: As an existing user with correct credentials, I can go to my Profile page and delete my books collection

    Given I am on the login page
    When I login with <username> and <password>
    And I delete book <book>
    Then I shouldn't be able to see the book I previously deleted

    Examples:
      | username           | password    | book                               |
      | Anibal.Schmitt79   | Testing123! | Programming JavaScript Applications |