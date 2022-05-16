Feature: Test computer page
  As a user i want to access computer page

  @sanity @smoke @regression
  Scenario: User should navigate to computer page successfully
    When I am on homepage
    And I click on computer tab
    Then i should navigate to computer page successfully

  @smoke @regression
  Scenario: User should navigate to desktops page successfully
    When I am on homepage
    And I click on computer tab
    And I click on desktops link
    Then i should navigate to desktops page successfully
  @regression
  Scenario: User should build your own computer and add them to cart successfully
    When I am on homepage
    And I click on computer tab
    And I click on desktops link
    And I click on build your own computer link
    And I select my configuration from available options
    And I click on add to cart button
    Then I should be able to add the product to shopping cart successfully





