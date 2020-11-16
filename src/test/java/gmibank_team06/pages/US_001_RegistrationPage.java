package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_001_RegistrationPage {

    public US_001_RegistrationPage(){
       PageFactory.initElements(Driver.getDriver(),this);
}

    @FindBy (xpath = "//a[@aria-haspopup='true']")
    public WebElement userIcon;

    @FindBy (xpath = "//*[text()='Register']")
    public WebElement registerSelect;

    @FindBy (xpath ="//input[@name='ssn']")
    public WebElement ssnTextBox;

    @FindBy (xpath = "//input[@name='firstname']")
    public WebElement nameTextBox;

    @FindBy (xpath = "//input[@name='lastname']")
    public WebElement lastnameTextBox;

    @FindBy (xpath = "//input[@name='address']")
    public WebElement address;

    @FindBy (xpath = "//input[@name='mobilephone']")
    public WebElement mobilePhone;

    @FindBy (xpath = "//input[@name='username']")
    public WebElement username;

    @FindBy (xpath = "//input[@name='email']")
    public WebElement email;

    @FindBy (xpath = "//input[@name='firstPassword']")
    public WebElement newPassword;

    @FindBy (xpath = "//input[@name='secondPassword']")
    public WebElement confirmationPassword;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement registerButton;

    @FindBy (xpath = "//*[text()='Registration saved! Please check your email for confirmation.']")
    public WebElement Regist_successMessage;

    @FindBy(xpath = "//*[@class = 'Toastify__toast-body']")
    public WebElement Regist_successMessage2;

    @FindBy (xpath = "//*[text()='translation-not-found[error.ssnexists]']")
    public WebElement failureMessage;

    @FindBy(xpath = "//*[@class = 'Toastify__toast-body']")
    public WebElement failureMessage2;
//
//    public void select_list(String Register){
//        Select statusDropdown=new Select(userIcon);
//        statusDropdown.selectByVisibleText("Register");
//    }
}
