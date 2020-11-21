package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import io.cucumber.java.en_lol.WEN;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.List;

public class US_012_ManageCustomers_Page {

    public US_012_ManageCustomers_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//*[@class='info jhi-item-count']")
    public WebElement ItemsCountText;
    @FindBy(xpath = "(//a[@class='d-flex align-items-center dropdown-toggle nav-link'])[2]")
    public WebElement sign2;

    @FindBy(xpath = "//td[1]")
    public WebElement id;

    @FindBy(xpath = "//td[2]")
    public List<WebElement> firstName;

    @FindBy(xpath = "//td[3]")
    public List<WebElement> lastName;

    @FindBy(xpath = "//td[4]")
    public List<WebElement> middleInitial;

    @FindBy(xpath = "//td[5]")
    public List<WebElement> email;

    @FindBy(xpath = "//td[6]")
    public List<WebElement> mobilePhoneNumber;

    @FindBy(xpath = "//td[7]")
    public List<WebElement> phoneNumber;

    @FindBy(xpath = "//td[8]")
    public List<WebElement> address;

    @FindBy(xpath = "//td[9]")
    public List<WebElement> createDate;

    @FindBy(xpath = "//*[text()='View']")
    public WebElement viewButton;

    @FindBy(xpath = "//*[text()='Edit']")
    public WebElement editButton;

    @FindBy(xpath = "(//*[text()='Edit'])[2]")
    public WebElement editButton2;


    @FindBy(xpath = "(//*[text()='Delete'])[2]")
    public WebElement deleteButton;

    public List<String> getStringList (List<WebElement> weList){
        List<String> strList = new ArrayList<>();
        for(WebElement w : weList){
            strList.add(w.getText());
        }
        return strList;
    }

}
