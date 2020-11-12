package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_010_Address_Page {
    public US_010_Address_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[@class='d-flex align-items-center dropdown-toggle nav-link']")
    public WebElement sign;
    @FindBy(id = "login-item")
    public WebElement sign_in;
    @FindBy(id = "username")
    public WebElement username;
    @FindBy(id = "password")
    public WebElement password;
    @FindBy(xpath = "//button[@class='btn btn-primary']")
    public WebElement signButton;
    @FindBy(xpath = "//*[@id=\"entity-menu\"]/a/span")
    public WebElement my_operation;
    @FindBy(xpath = "//a[@class='dropdown-item']")
    public WebElement manage_customer;
    @FindBy(xpath = "//a[@class='btn btn-primary float-right jh-create-entity']")
    public WebElement create_new_customer;
    @FindBy(id = "tp-customer-address")
    public WebElement address;
    @FindBy(id = "save-entity")
    public WebElement save;
    @FindBy(xpath = "(//div[@class='invalid-feedback'])[8]")
    public WebElement address_error_message;
    @FindBy(id = "tp-customer-city")
    public WebElement city;
    @FindBy(xpath = "(//div[@class='invalid-feedback'])[9]")
    public WebElement city_error_message;
    @FindBy(id = "tp-customer-country")
    public WebElement country;
    @FindBy(id = "tp-customer-state")
    public WebElement state;


}
