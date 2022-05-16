package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());


    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement computerTab;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Electronics')]")
    WebElement electronicsTab;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Apparel')]")
    WebElement apparelTab;
    @CacheLookup
    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Digital downloads']")
    WebElement digitalDownloadsTab;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Books')]")
    WebElement BooksTab;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Jewelry')]")
    WebElement jewelryTab;
    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Gift Cards')]")
    WebElement giftCardsTab;
    @CacheLookup
    @FindBy(linkText = "Log in")
    WebElement getLoginLink;
    @CacheLookup
    @FindBy(linkText = "Register")
    WebElement getRegisterLink;
    @CacheLookup
    @FindBy(xpath = "//img[@alt='nopCommerce demo store']")
    WebElement getNopCommerceLogo;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'My account')]")
    WebElement getmyAccountLink;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement getlogoutLink;

    public HomePage() {

        PageFactory.initElements(driver, this);
    }

    public void clickOnLoginLink() {
        clickOnElement(getLoginLink);
        log.info("Click on login link: " + getLoginLink.toString());
    }

    public void clickOnRegisterLink() {
        clickOnElement(getRegisterLink);
    }

    public void verifyNopCommerceLogoVisible() {
        verifyLogoVisible(getNopCommerceLogo);

    }

    public void clickOnLogoutLink() {
        clickOnElement(getlogoutLink);
        log.info("click on log out link: " + getlogoutLink.toString());

    }

    public String verifyLogoutLinkVisible() {
        log.info("Verifying logout link is displayed : " + getlogoutLink.toString());
        return getTextFromElement(getlogoutLink);

    }

    public String verifyLoginLinkVisible() {
        log.info("Verifying login link is displayed : " + getLoginLink.toString());
        return getTextFromElement(getLoginLink);
    }

    public void selectMenu(String menu) {
        List<WebElement> topMenuNames = driver.findElements(By.xpath("//div[@class='header-menu']//li"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(menu)) {
                names.click();
                break;
            }
        }
    }


}
