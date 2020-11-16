package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class US_002_Invalid_Register {
    public US_002_Invalid_Register(){PageFactory.initElements(Driver.getDriver(), this); }

    @FindBy(xpath = "//a[@aria-haspopup='true']")
    public WebElement userIcon;

    @FindBy (xpath = "//*[text()='Register']")
    public WebElement registerSelect;

    @FindBy(id = "ssn")
    public WebElement ssnTextBox;

    @FindBy(id = "firstname")
    public WebElement nameTextBox;

    @FindBy(id = "lastname")
    public WebElement lastnameTextBox;

    @FindBy(id = "address")
    public WebElement address;

    @FindBy(id = "mobilephone")
    public WebElement mobilePhone;

    @FindBy(id = "username")
    public WebElement username;

    @FindBy(id = "email")
    public WebElement email;

    @FindBy(id = "firstPassword")
    public WebElement newPassword;

    @FindBy(id = "secondPassword")
    public WebElement confirmationPassword;

    @FindBy(id = "register-submit")
    public WebElement registerButton;

    @FindBy(xpath = "(//div[@class='invalid-feedback'])[1]")
    public WebElement failureMessage;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement failureMessageName;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement failureMessageLastName;

    @FindBy(xpath = "//div[@class='invalid-feedback']")  // Bug1
    public WebElement message4;

    @FindBy(xpath = "//div[@class='invalid-feedback']")  //Bug2
    public WebElement message5;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement message6;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement message7;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement message8;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement message9;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement message10;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement message13;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public WebElement message16;

}