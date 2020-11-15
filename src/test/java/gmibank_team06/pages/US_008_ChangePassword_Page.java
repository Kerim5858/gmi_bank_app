package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_008_ChangePassword_Page {

    public US_008_ChangePassword_Page(){ PageFactory.initElements(Driver.getDriver(),this);}

    @FindBy(xpath = "//a[@class='d-flex align-items-center dropdown-toggle nav-link']")
    public WebElement account;
    @FindBy(xpath = "//a[@href='/account/password']")
    public WebElement passwordIcon;
    @FindBy(name = "currentPassword")
    public WebElement currentPassword;
    @FindBy(name = "newPassword")
    public WebElement newPassword;
    @FindBy(name = "confirmPassword")
    public WebElement confirmPassword;
    @FindBy(xpath = "//button[@type='submit']")
    public WebElement saveButton;
    @FindBy(id = "strengthBar")
    public WebElement strengthBar;
    @FindBy(xpath = "//*[.='Password changed!']")
    public WebElement successMessage;
    @FindBy(xpath = "//div[@class='Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar--error']")
    public WebElement errorMessage;

}
