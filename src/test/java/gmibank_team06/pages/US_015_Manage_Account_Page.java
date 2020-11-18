package gmibank_team06.pages;

import gmibank_team06.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_015_Manage_Account {
    public US_015_Manage_Account(){
        PageFactory.initElements(Driver.getDriver(),this);}

        @FindBy(xpath="(//a[@class='btn btn-info btn-sm'])")
        public WebElement viewBox;
        @FindBy(xpath="//a[@class='btn btn-info']")
        public WebElement backBox1;

        @FindBy(xpath="//a[@class='btn btn-primary btn-sm']")
         public WebElement editBox;
        @FindBy(id="cancel-save")
         public WebElement backBox2;

        @FindBy(xpath="//a[@class='btn btn-danger btn-sm']")
         public WebElement deleteBox;
        @FindBy(xpath="//button[@class='btn btn-secondary']")
        public WebElement CancelBox;



}
