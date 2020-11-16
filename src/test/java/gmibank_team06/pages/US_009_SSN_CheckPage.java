package gmibank_team06.pages;
import gmibank_team06.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_009_SSN_CheckPage<snnText> {
    public US_009_SSN_CheckPage(){

        PageFactory.initElements(Driver.getDriver(),this);
    }


        @FindBy(id = "search-ssn")
        public WebElement SSN_search;

    @FindBy(xpath = "//button[@class='btn btn-secondary']")
    public WebElement searchButton;

        @FindBy(id = "tp-customer-firstName")
        public WebElement nameText;

    @FindBy(id = "tp-customer-lastName")
    public WebElement lastName;
    @FindBy(id = "tp-customer-email")
    public WebElement emailText;
    @FindBy(id = "tp-customer-mobilePhoneNumber")
    public WebElement mobileText;
    @FindBy(id = "tp-customer-address")
    public WebElement addressText;






}
