package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class RegisterSteps {
    @And("^I click on Register link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
        new HomePage().clickOnRegisterLink();
        String expectedMessage = "Register";
        String actualMessage = new RegisterPage().verifyRegisterText();
        Assert.assertEquals("Register not displayed", expectedMessage, actualMessage);
    }

    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();

    }

    @Then("^I should see first name is required message$")
    public void iShouldSeeFirstNameIsRequiredMessage() {
        String expectedMessage = "First name is required.";
        String actualMessage = new RegisterPage().verifyFirstNameRequiredErrorText();
        Assert.assertEquals("First name message not displayed", expectedMessage, actualMessage);
    }

    @And("^I should see last name is required message$")
    public void iShouldSeeLastNameIsRequiredMessage() {
        String expectedMessage = "Last name is required.";
        String actualMessage = new RegisterPage().verifyLastNameRequiredErrorText();
        Assert.assertEquals("Last name message not displayed", expectedMessage, actualMessage);
    }

    @And("^I should see email is required message$")
    public void iShouldSeeEmailIsRequiredMessage() {
        String expectedMessage = "Email is required.";
        String actualMessage = new RegisterPage().verifyEmailRequiredErrorText();
        Assert.assertEquals("Email message not displayed", expectedMessage, actualMessage);
    }

    @And("^I should see password is required message$")
    public void iShouldSeePasswordIsRequiredMessage() {
        String expectedMessage = "Password is required.";
        String actualMessage = new RegisterPage().verifyPasswordRequiredErrorText();
        Assert.assertEquals("password message not displayed", expectedMessage, actualMessage);
    }

    @And("^i should see confirm password is required message$")
    public void iShouldSeeConfirmPasswordIsRequiredMessage() {
        String expectedMessage = "Password is required.";
        String actualMessage = new RegisterPage().verifyConfirmPasswordRequiredErrorText();
        Assert.assertEquals("password message not displayed", expectedMessage, actualMessage);
    }

    @And("^I enter first name in first name field\"([^\"]*)\"$")
    public void iEnterFirstNameInFirstNameField(String firstname) {
        new RegisterPage().inputFirstName(firstname);

    }

    @And("^I enter last name in last name field\"([^\"]*)\"$")
    public void iEnterLastNameInLastNameField(String lastname) {
        new RegisterPage().inputLastName(lastname);
    }

    @And("^I enter email in email field\"([^\"]*)\"$")
    public void iEnterEmailInEmailField(String email) {
        new RegisterPage().inputEmail(email);
    }

    @And("^I enter password in password field \"([^\"]*)\"$")
    public void iEnterPasswordInPasswordField(String password) {
        new RegisterPage().inputPassword(password);
    }

    @And("^I enter confirm password in confirm password field\"([^\"]*)\"$")
    public void iEnterConfirmPasswordInConfirmPasswordField(String confirmpassword) {
        new RegisterPage().inputConfirmPassword(confirmpassword);

    }

    @Then("^I should see registration completed message\"([^\"]*)\"$")
    public void iShouldSeeRegistrationCompletedMessage(String message) {
        Assert.assertEquals("registration completed message not displayed", message, new RegisterPage().verifyRegistrationCompletedText());

    }
}
