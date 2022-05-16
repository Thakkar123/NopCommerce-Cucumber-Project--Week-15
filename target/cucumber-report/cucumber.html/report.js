$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Test computer page",
  "description": "As a user i want to access computer page",
  "id": "test-computer-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4960026400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to computer page successfully",
  "description": "",
  "id": "test-computer-page;user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "i should navigate to computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 109675900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 767371400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 39786700,
  "status": "passed"
});
formatter.after({
  "duration": 685696500,
  "status": "passed"
});
formatter.before({
  "duration": 2801017600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate to desktops page successfully",
  "description": "",
  "id": "test-computer-page;user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "i should navigate to desktops page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 653829300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 462589400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateToDesktopsPageSuccessfully()"
});
formatter.result({
  "duration": 36705500,
  "status": "passed"
});
formatter.after({
  "duration": 691430300,
  "status": "passed"
});
formatter.before({
  "duration": 4519508600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should build your own computer and add them to cart successfully",
  "description": "",
  "id": "test-computer-page;user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on computer tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on build your own computer link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select my configuration from available options",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be able to add the product to shopping cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 933391000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 469246000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnBuildYourOwnComputerLink()"
});
formatter.result({
  "duration": 1422948400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectMyConfigurationFromAvailableOptions()"
});
formatter.result({
  "duration": 238337000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 44825900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldBeAbleToAddTheProductToShoppingCartSuccessfully()"
});
formatter.result({
  "duration": 909256900,
  "status": "passed"
});
formatter.after({
  "duration": 638566800,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2510490600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 521875400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 33539500,
  "status": "passed"
});
formatter.after({
  "duration": 672928800,
  "status": "passed"
});
formatter.before({
  "duration": 2900930900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"MaheshPatel2828@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"Temp12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 877156700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaheshPatel2828@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 94453200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temp12345",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 69929100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 643416100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 34902600,
  "status": "passed"
});
formatter.after({
  "duration": 698562700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 28,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 29,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 30,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 31,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2441655700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 708963400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 98292300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 78642600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 436155300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 30867100,
  "status": "passed"
});
formatter.after({
  "duration": 669270200,
  "status": "passed"
});
formatter.before({
  "duration": 3782850800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 70100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 847036200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 86875400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 75475900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 422166500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 30555800,
  "status": "passed"
});
formatter.after({
  "duration": 699044800,
  "status": "passed"
});
formatter.before({
  "duration": 3004845400,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 480719100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 96412800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 77194000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 432330900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 40770600,
  "status": "passed"
});
formatter.after({
  "duration": 714259000,
  "status": "passed"
});
formatter.before({
  "duration": 3533751900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify that user should logout successfully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"MaheshPatel2828@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password \"Temp12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "i click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should see the log in link visible",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 478949200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MaheshPatel2828@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 99660400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temp12345",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 83928700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 639019100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 608212300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheLogInLinkVisible()"
});
formatter.result({
  "duration": 32483400,
  "status": "passed"
});
formatter.after({
  "duration": 676663300,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As a user i want to register into nop commerce website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3266836500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "register-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Register link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 748248800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 458392800,
  "status": "passed"
});
formatter.after({
  "duration": 700253400,
  "status": "passed"
});
formatter.before({
  "duration": 3125181200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify that FirstName LastName Email Password And ConfirmPassword Fields Are Mandatory",
  "description": "",
  "id": "register-test;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Register link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see first name is required message",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I should see last name is required message",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see email is required message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see password is required message",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i should see confirm password is required message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 627492900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 78427200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeFirstNameIsRequiredMessage()"
});
formatter.result({
  "duration": 38718200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeLastNameIsRequiredMessage()"
});
formatter.result({
  "duration": 30921100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeEmailIsRequiredMessage()"
});
formatter.result({
  "duration": 32011200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeePasswordIsRequiredMessage()"
});
formatter.result({
  "duration": 28102800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeConfirmPasswordIsRequiredMessage()"
});
formatter.result({
  "duration": 33790200,
  "status": "passed"
});
formatter.after({
  "duration": 673587300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "User should create account successfully",
  "description": "",
  "id": "register-test;user-should-create-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter first name in first name field\"\u003cfirst name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter last name in last name field\"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter email in email field\"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password in password field \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter confirm password in confirm password field\"\u003cconfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see registration completed message\"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "register-test;user-should-create-account-successfully;",
  "rows": [
    {
      "cells": [
        "first name",
        "last name",
        "email",
        "password",
        "confirm password",
        "message"
      ],
      "line": 33,
      "id": "register-test;user-should-create-account-successfully;;1"
    },
    {
      "cells": [
        "Jay",
        "Vaghani",
        "jay@gmail.com",
        "Temp123",
        "Temp123",
        "Your registration completed"
      ],
      "line": 34,
      "id": "register-test;user-should-create-account-successfully;;2"
    },
    {
      "cells": [
        "Amit",
        "Kathrotiya",
        "amit@gmail.com",
        "Temp123",
        "Temp123",
        "Your registration completed"
      ],
      "line": 35,
      "id": "register-test;user-should-create-account-successfully;;3"
    },
    {
      "cells": [
        "Aum",
        "Vaghani",
        "aum@gmail.com",
        "Temp123",
        "Temp123",
        "Your registration completed"
      ],
      "line": 36,
      "id": "register-test;user-should-create-account-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3259674500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should create account successfully",
  "description": "",
  "id": "register-test;user-should-create-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter first name in first name field\"Jay\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter last name in last name field\"Vaghani\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter email in email field\"jay@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password in password field \"Temp123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter confirm password in confirm password field\"Temp123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see registration completed message\"Your registration completed\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 683073900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jay",
      "offset": 39
    }
  ],
  "location": "RegisterSteps.iEnterFirstNameInFirstNameField(String)"
});
formatter.result({
  "duration": 78571700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vaghani",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.iEnterLastNameInLastNameField(String)"
});
formatter.result({
  "duration": 76056000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jay@gmail.com",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.iEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 78730500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temp123",
      "offset": 36
    }
  ],
  "location": "RegisterSteps.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 91554500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temp123",
      "offset": 51
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPasswordInConfirmPasswordField(String)"
});
formatter.result({
  "duration": 69547000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 868160800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 44
    }
  ],
  "location": "RegisterSteps.iShouldSeeRegistrationCompletedMessage(String)"
});
formatter.result({
  "duration": 30009600,
  "status": "passed"
});
formatter.after({
  "duration": 668982300,
  "status": "passed"
});
formatter.before({
  "duration": 2957138100,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User should create account successfully",
  "description": "",
  "id": "register-test;user-should-create-account-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter first name in first name field\"Amit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter last name in last name field\"Kathrotiya\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter email in email field\"amit@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password in password field \"Temp123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter confirm password in confirm password field\"Temp123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see registration completed message\"Your registration completed\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 613466100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amit",
      "offset": 39
    }
  ],
  "location": "RegisterSteps.iEnterFirstNameInFirstNameField(String)"
});
formatter.result({
  "duration": 77633300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kathrotiya",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.iEnterLastNameInLastNameField(String)"
});
formatter.result({
  "duration": 81904900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amit@gmail.com",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.iEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 80685100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temp123",
      "offset": 36
    }
  ],
  "location": "RegisterSteps.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 96782700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temp123",
      "offset": 51
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPasswordInConfirmPasswordField(String)"
});
formatter.result({
  "duration": 76194800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1126822900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 44
    }
  ],
  "location": "RegisterSteps.iShouldSeeRegistrationCompletedMessage(String)"
});
formatter.result({
  "duration": 26947600,
  "status": "passed"
});
formatter.after({
  "duration": 695894900,
  "status": "passed"
});
formatter.before({
  "duration": 3626187200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should create account successfully",
  "description": "",
  "id": "register-test;user-should-create-account-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter first name in first name field\"Aum\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter last name in last name field\"Vaghani\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter email in email field\"aum@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password in password field \"Temp123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter confirm password in confirm password field\"Temp123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see registration completed message\"Your registration completed\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 583189300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aum",
      "offset": 39
    }
  ],
  "location": "RegisterSteps.iEnterFirstNameInFirstNameField(String)"
});
formatter.result({
  "duration": 77734900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vaghani",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.iEnterLastNameInLastNameField(String)"
});
formatter.result({
  "duration": 81787200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aum@gmail.com",
      "offset": 29
    }
  ],
  "location": "RegisterSteps.iEnterEmailInEmailField(String)"
});
formatter.result({
  "duration": 81153200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temp123",
      "offset": 36
    }
  ],
  "location": "RegisterSteps.iEnterPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 91609600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temp123",
      "offset": 51
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPasswordInConfirmPasswordField(String)"
});
formatter.result({
  "duration": 64503900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1013903300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 44
    }
  ],
  "location": "RegisterSteps.iShouldSeeRegistrationCompletedMessage(String)"
});
formatter.result({
  "duration": 27679400,
  "status": "passed"
});
formatter.after({
  "duration": 714245600,
  "status": "passed"
});
});