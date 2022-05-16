package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);

    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement registerText;

    @CacheLookup
    @FindBy(xpath = "//input[@name='Gender']")
    WebElement gender;

    @CacheLookup
    @FindBy(id = "FirstName")
    WebElement firstName;

    @CacheLookup
    @FindBy(id = "LastName")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement dateOfBirthDay;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement dateOfBirthMonth;

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement dateOfBirthYear;

    @CacheLookup
    @FindBy(id = "Email")
    WebElement email;

    @CacheLookup
    @FindBy(id = "Password")
    WebElement password;

    @CacheLookup
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy(id = "register-button")
    WebElement registerButton;

    @CacheLookup
    @FindBy(id = "FirstName-error")
    WebElement firstNameErrorText;

    @CacheLookup
    @FindBy(id = "LastName-error")
    WebElement lastNameErrorText;

    @CacheLookup
    @FindBy(id = "Email-error")
    WebElement emailErrorText;

    @CacheLookup
    @FindBy(id = "Password-error")
    WebElement passwordErrorText;

    @CacheLookup
    @FindBy(id = "ConfirmPassword-error")
    WebElement confirmPasswordErrorText;

    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement registrationCompleted;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continueBtn;


    public String verifyRegisterText() {
        log.info("Verifying 'Register' text on register page  " + registerText.toString());
        return getTextFromElement(registerText);

    }

    public void selectGender(String text) {
        clickOnElement(gender, text);

    }

    public void inputFirstName(String name) {
        sendTextToElement(firstName, name);
        log.info("Entering First Name: " + firstName.toString());

    }

    public void inputLastName(String lname) {
        sendTextToElement(lastName, lname);
        log.info("Entering Last name: " + lastName.toString());

    }

    public void inputEmail(String text) {
        sendTextToElement(email, text);
        log.info("Entering Email: " + email.toString());

    }

    public void selectDateOfBirth(String day, String month, String year) {
        selectByVisibleTextFromDropDown(dateOfBirthDay, day);
        selectByVisibleTextFromDropDown(dateOfBirthMonth, month);
        selectByVisibleTextFromDropDown(dateOfBirthYear, year);
    }

    public void inputPassword(String pswd) {
        sendTextToElement(password, pswd);
        log.info("Selecting Year for Data of Birth: " + dateOfBirthYear.toString());
    }

    public void inputConfirmPassword(String cpassword) {
        sendTextToElement(confirmPassword, cpassword);
        log.info("Entering confirm password: " + cpassword.toString());

    }

    public void clickOnRegisterButton() {
        clickOnElement(registerButton);
        log.info("Clicking on Register button: " + registerButton.toString());

    }

    public String verifyFirstNameRequiredErrorText() {
        log.info("Verifying first Name required error message: " + firstNameErrorText.toString());
        return getTextFromElement(firstNameErrorText);

    }

    public String verifyLastNameRequiredErrorText() {
        log.info("Verifying Last Name required error message: " + lastNameErrorText.toString());
        return getTextFromElement(lastNameErrorText);

    }

    public String verifyEmailRequiredErrorText() {
        log.info("Verifying Email required error message: " + emailErrorText.toString());
        return getTextFromElement(emailErrorText);

    }

    public String verifyPasswordRequiredErrorText() {
        log.info("Verifying Password required error message: " + passwordErrorText.toString());
        return getTextFromElement(passwordErrorText);

    }

    public String verifyConfirmPasswordRequiredErrorText() {
        log.info("Verifying confirm password required error message: " + confirmPasswordErrorText.toString());
        return getTextFromElement(confirmPasswordErrorText);

    }

    public String verifyRegistrationCompletedText() {
        log.info("Verifying Registration completed message: " + registrationCompleted.toString());
        return getTextFromElement(registrationCompleted);

    }

    public void clickOnContinueButton() {
        clickOnElement(continueBtn);
        log.info("Clicking on Continue Button " + continueBtn.toString());

    }


}
