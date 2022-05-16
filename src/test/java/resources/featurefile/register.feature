Feature: Register Test
  As a user i want to register into nop commerce website

  @sanity @smoke @regression
  Scenario: User should navigate to register page successfully
    Given I am on homepage
    And I click on Register link
    Then I should navigate to register page successfully

  @smoke @regression
  Scenario: Verify that FirstName LastName Email Password And ConfirmPassword Fields Are Mandatory
    Given I am on homepage
    And I click on Register link
    And I click on Register button
    Then I should see first name is required message
    And I should see last name is required message
    And I should see email is required message
    And I should see password is required message
    And i should see confirm password is required message
  @regression
  Scenario Outline: User should create account successfully
    Given I am on homepage
    When I click on Register link
    And I enter first name in first name field"<first name>"
    And I enter last name in last name field"<last name>"
    And I enter email in email field"<email>"
    And I enter password in password field "<password>"
    And I enter confirm password in confirm password field"<confirm password>"
    And I click on Register button
    Then I should see registration completed message"<message>"
    Examples:

      | first name | last name  | email          | password | confirm password | message                     |
      | Jay        | Vaghani    | jay@gmail.com  | Temp123  | Temp123          | Your registration completed |
      | Amit       | Kathrotiya | amit@gmail.com | Temp123  | Temp123          | Your registration completed |
      | Aum        | Vaghani    | aum@gmail.com  | Temp123  | Temp123          | Your registration completed |
