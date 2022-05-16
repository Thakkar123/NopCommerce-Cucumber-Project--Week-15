Feature: Login Test
  As user I want to login into nop commerce website

  @sanity @smoke @regression
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully

  @smoke @regression
  Scenario: User should login successfully with valid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "MaheshPatel2828@gmail.com"
    And I enter password "Temp12345"
    And I click on login button
    Then I should login successfully

  @regression
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"
    Examples:
      | email              | password | errorMessage                                                                                |
      | abcd123@gmail.com  | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | xyz123@gmail.com   | abc123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | adfafasd@gmail.com | xyz123   | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |

  @regression
  Scenario: Verify that user should logout successfully
    Given I am on homepage
    When I click on login link
    And I enter email "MaheshPatel2828@gmail.com"
    And I enter password "Temp12345"
    And I click on login button
    And i click on logout button
    Then I should see the log in link visible


