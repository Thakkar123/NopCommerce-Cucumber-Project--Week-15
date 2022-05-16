package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class ComputerSteps {
    @And("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().selectMenu("Computers");
    }

    @Then("^i should navigate to computer page successfully$")
    public void iShouldNavigateToComputerPageSuccessfully() {
        String expectedMessage = "Computers";
        String actualMessage = new ComputerPage().verifyComputerText();
        Assert.assertEquals("computer text not displayed", expectedMessage, actualMessage);
    }


    @And("^I click on desktops link$")
    public void iClickOnDesktopsLink() {
        new ComputerPage().clickOnDesktopLink();
    }

    @Then("^i should navigate to desktops page successfully$")
    public void iShouldNavigateToDesktopsPageSuccessfully() {
        String expectedMessage = "Desktops";
        String actualMessage = new DesktopsPage().verifyDesktopText();
        Assert.assertEquals("desktops text not displayed", expectedMessage, actualMessage);
    }

    @And("^I click on build your own computer link$")
    public void iClickOnBuildYourOwnComputerLink() {
        new DesktopsPage().selectProductFromDesktopPage("Build your own computer");
    }

    @And("^I select my configuration from available options$")
    public void iSelectMyConfigurationFromAvailableOptions() {
        new BuildYourOwnComputerPage().buildConfigurationFromList("2.2 GHz Intel Pentium Dual-Core E2200", "8GB [+$60.00]", "320 GB", "Vista Premium [+$60.00]", "Microsoft Office [+$50.00]");
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I should be able to add the product to shopping cart successfully$")
    public void iShouldBeAbleToAddTheProductToShoppingCartSuccessfully() {
        String expectedMessage = "The product has been added to your shopping cart";
        String actualMessage = new BuildYourOwnComputerPage().verifyProductAddedToCartMessage();
        Assert.assertEquals("product added to cart message not displayed", expectedMessage, actualMessage);
    }
}
