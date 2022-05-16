package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuildYourOwnComputerPage extends Utility {

    private static final Logger log = Logger.getLogger(BuildYourOwnComputerPage.class.getName());

    public BuildYourOwnComputerPage() {

        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Build your own computer')]")
    WebElement buildYourOwnComputerText;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement processorDropdown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement ramDropdown;

    @CacheLookup
    @FindBy(xpath = "//input[@name='product_attribute_3']")
    WebElement selectHdd;

    @CacheLookup
    @FindBy(xpath = "//input[@name='product_attribute_4']")
    WebElement selectOperatingSystem;

    @CacheLookup
    @FindBy(xpath = "//input[@name='product_attribute_5']")
    WebElement selectSoftware;

    @CacheLookup
    @FindBy(id = "add-to-cart-button-1")
    WebElement addToCartButton;

    @CacheLookup
    @FindBy(xpath = "//p[contains(.,'The product has been added to your shopping cart')]")
    WebElement productAddedToCartMessage;


    public void clickOnAddToCartButton() {
        clickOnElement(addToCartButton);
    }

    public String verifyProductAddedToCartMessage() {
        log.info("Verifying Product added to cart message: " + productAddedToCartMessage.toString());
        return getTextFromElement(productAddedToCartMessage);
    }

    public void buildConfigurationFromList(String processor, String ram, String hdd, String os, String software) {
        selectByVisibleTextFromDropDown(processorDropdown, processor);
        selectByVisibleTextFromDropDown(ramDropdown, ram);
        clickOnElement(selectHdd, hdd);
        clickOnElement(selectOperatingSystem, os);
        clickOnElement(selectSoftware, software);
        log.info("configuration selected as per various options available: ");
    }


}
