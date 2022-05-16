package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DesktopsPage extends Utility {

    private static final Logger log = Logger.getLogger(DesktopsPage.class.getName());


    public DesktopsPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Desktops')]")
    WebElement desktopText;

    @CacheLookup
    @FindBy(id = "products-orderby")
    WebElement sortBy;

    @CacheLookup
    @FindBy(id = "products-pagesize")
    WebElement displayBy;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'List')]")
    WebElement selectProductList;

    @CacheLookup
    @FindBy(xpath = "//div[@class='picture']")
    WebElement selectProduct;

    public String verifyDesktopText() {
        log.info("Verifying desktop text: " + desktopText.toString());
        return getTextFromElement(desktopText);
    }

    public void clickOnSortBy() {
        clickOnElement(sortBy);
        log.info("Clicking on SortBy: " + sortBy.toString());

    }

    public void clickOnDisplayBy() {
        clickOnElement(displayBy);
        log.info("Clicking on DisplayBy: " + displayBy.toString());
    }

    public void clickOnProductList() {
        clickOnElement(displayBy);
        log.info("Clicking on product list: " + displayBy.toString());
    }

    public void selectProductFromDesktopPage(String product) {

        clickOnElement(selectProduct, product);
        log.info("Select product from desktop page: " + selectProduct.toString());

    }

}
