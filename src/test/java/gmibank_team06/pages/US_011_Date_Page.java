package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_011_Date_Page {

    public US_011_Date_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(id = "tp-customer-createDate")
    public WebElement dateBox;
    @FindBy(xpath = "(//button[@type='button'])[2]")
    public WebElement search_11;
    @FindBy(id= "tp-customer-user")
    public WebElement userBox;
    @FindBy(id = "tp-customer-account")
    public WebElement accountBox;
    @FindBy(id = "tp-customer-zelleEnrolled")
    public WebElement zelle;
}
