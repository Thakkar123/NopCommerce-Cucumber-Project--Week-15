package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by Jay Vaghani
 */
public class LoginSteps {


    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().verifyWelcomeText();
        Assert.assertEquals("Login page not displayed", expectedMessage, actualMessage);
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new LoginPage().enterEmailId(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        String expectedMessage = "Log out";
        String actualMessage = new HomePage().verifyLogoutLinkVisible();
        Assert.assertEquals("log out link not visible", expectedMessage, actualMessage);
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage) {
        Assert.assertEquals("Error message not displayed", errorMessage, new LoginPage().getErrorMessage());
    }

    @And("^i click on logout button$")
    public void iClickOnLogoutButton() {
        new HomePage().clickOnLogoutLink();
    }

    @Then("^I should see the log in link visible$")
    public void iShouldSeeTheLogInLinkVisible() {
        String expectedMessage = "Log in";
        String actualMessage = new HomePage().verifyLoginLinkVisible();
        Assert.assertEquals("log in link not visible", expectedMessage, actualMessage);

    }
}
