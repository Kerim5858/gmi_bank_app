package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_003_NewPassword_Page {

        public US_003_NewPassword_Page(){
            PageFactory.initElements(Driver.getDriver(),this);
        }

        @FindBy(xpath = "//a[@href='#']")
        public WebElement userIcon;

        @FindBy(xpath = "//span[.='Register']")
        public WebElement register;

        @FindBy(id = "firstPassword")
        public WebElement newPassword;

        @FindBy(xpath = "//div[.='Your password is required.']")
        public WebElement passwordRequaredErrorMessage;

        @FindBy(xpath = "//div[.='Your password is required to be at least 4 characters.']")
        public WebElement passwordRequaredAtLeast4CharErrorMessage;

        @FindBy(xpath = "(//li[@class='point'])[1]")
        public WebElement strengthLevel_1;

        @FindBy(xpath = "(//li[@class='point'])[5]")
        public WebElement strengthLevel_5;

        @FindBy(xpath = "(//li[@class='point'])[4]")
        public WebElement strengthLevel_4;

        @FindBy(xpath = "(//li[@class='point'])[2]")
        public WebElement strengthLevel_2;

        @FindBy(id = "secondPassword")
        public  WebElement newPasswordConfirmationBox;

        @FindBy(xpath = "//*[.='Your confirmation password is required.']")
        public WebElement confirEmpthMessage;

        @FindBy(xpath = "//*[.='Your confirmation password is required to be at least 4 characters.']")
        public WebElement confirLessThen4Message;

        @FindBy(xpath = "//*[.='The password and its confirmation do not match!']")
        public WebElement dosentMatchErrorMessage;


    }
