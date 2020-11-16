package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_012_CU_Customer_Page {
    public US_012_CU_Customer_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//h2")
    public WebElement title;

    @FindBy(id="tp-customer-firstName")
    public WebElement firstName;

    @FindBy(id="tp-customer-lastName")
    public WebElement lastName;

    @FindBy(id="tp-customer-middleInitial")
    public WebElement middleInitial;

    @FindBy(id="tp-customer-email")
    public WebElement email;

    @FindBy(id="tp-customer-mobilePhoneNumber")
    public WebElement mobilePhoneNumber;

    @FindBy(id="tp-customer-phoneNumber")
    public WebElement phoneNumber;

    @FindBy(id="tp-customer-zipCode")
    public WebElement zipCode;

@FindBy(id="tp-customer-address")
    public WebElement address;

@FindBy(id="tp-customer-city")
    public WebElement city;

@FindBy(id="tp-customer-ssn")
    public WebElement ssn;

    @FindBy(id = "tp-customer-createDate")
    public WebElement createDate;

    @FindBy(id="tp-customer-country")
    public WebElement countryDD;


    @FindBy(id= "tp-customer-state")
    public WebElement state;

    @FindBy(id = "tp-customer-user")
    public WebElement userDD;

    @FindBy(id = "tp-customer-account")
    public WebElement account;

    @FindBy(id = "tp-customer-zelleEnrolled")
    public WebElement zelleEnrolled;

    @FindBy(id = "save-entity")
    public WebElement saveButton;


}
