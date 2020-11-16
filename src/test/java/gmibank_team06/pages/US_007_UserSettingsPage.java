package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_007_UserSettingsPage {
    public US_007_UserSettingsPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(id = "username")
    public WebElement UspUsername;

    @FindBy(id = "password")
    public WebElement UspPassword;

    @FindBy(xpath = ("//button[@type='submit']"))
    public WebElement UspSignInButton;

    @FindBy(xpath = "//li[@id='account-menu']")
    public WebElement username;

    @FindBy(xpath= "//*[text()='User Info']" )
    public WebElement userinfodropdown;

    @FindBy(xpath = "//input[@name='firstName']")
    public WebElement firstname;

    @FindBy(xpath = "//input[@name='lastName']")
    public WebElement lastname;

    @FindBy(xpath = "//input[@type='email']")
    public WebElement email;

    @FindBy(id = "//select[@name='langKey']")
    public WebElement languagedropdown;

    @FindBy(xpath = "//*[@class='Toastify__toast-body']")
    public WebElement Toastify;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement UspAlya;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement UserinfoSaveButton;

    @FindBy(xpath = "//*[.='Your first name is required.']")
    public WebElement firstnameerror;

    @FindBy(xpath = "//*[.='Your last name is required.']")
    public WebElement lastnameerror;

    @FindBy(xpath = "//*[.='This field is invalid']")
    public WebElement emailerror;
}
