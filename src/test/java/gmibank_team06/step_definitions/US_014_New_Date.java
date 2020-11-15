package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_010_Address_Page;
import gmibank_team06.pages.US_011_Date_Page;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import java.text.SimpleDateFormat;
import java.util.Date;

public class US_014_New_Date {

//    WebDriver driver;
//    US_011_Date_Page us_011_date = new US_011_Date_Page();
//    US_010_Address_Page us_010_address_page = new US_010_Address_Page();
//
//    @Given("user click calendar icon")
//    public void user_click_calendar_icon() {
//        us_011_date.dateBox.click();
//
//    }
//
//    @Given("user Select previous day")
//    public void user_Select_previous_day() {
//        us_011_date.dateBox.click();
//        us_011_date.dateBox.sendKeys("11/11/2020");
//
//        SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
//        Assert.assertFalse(us_011_date.dateBox.getAttribute("value").contains(f.format(new Date())));
//        us_010_address_page.save.click();
//
//    }
//
//
//    @Given("Click Save")
//    public void click_Save() {
//        us_010_address_page.save.click();
//    }
//
//    @Then("system should give error message")
//    public void system_should_give_error_message() {
//        SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
//        System.out.println("bSYStem Date: " +f.format(new Date()));
//        System.out.println("Web Page Date: "+us_011_date.dateBox.getAttribute("value"));
//    }
//
//
//    @Given("system should give Selected current date")
//    public void system_should_give_Selected_current_date() {
//        SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
//        System.out.println("bSYStem Date: " +f.format(new Date()));
//    }
//
//    @Then("verify current date and system date")
//    public void verify_current_date_and_system_date() {
//        SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm");
//        Assert.assertFalse(us_011_date.dateBox.getAttribute("value").contains(f.format(new Date())));
//
//    }
//
//
//    @Given("user leave userTextBox blank")
//    public void user_leave_userTextBox_blank() {
//        us_011_date.userBox.click();
//        us_010_address_page.save.click();
//    }
//
//    @Given("User gets error message")
//    public void user_gets_error_message() {
//        us_011_date.userBox.click();
//        us_010_address_page.save.click();
//    }
//
//    @Then("user select valid date")
//    public void user_select_valid_date() {
//        Select select = new Select(us_011_date.userBox);
//        select.selectByVisibleText("emre ali can");
//
//    }
//
//    @Then("verify valid data")
//    public void verify_valid_data() {
//
//        Assert.assertTrue(us_011_date.userBox.getText().contains("emre ali can"));
//
//
//    }
//
//    @Given("user leave accountTextBox blank")
//    public void user_leave_accountTextBox_blank() {
//        us_011_date.accountBox.getText().contains("");
//
//    }
//
//    @Then("User gets error message1")
//    public void user_gets_error_message1() {
//        Select select = new Select(us_011_date.accountBox);
//        select.selectByVisibleText("Saving Account");
//        Assert.assertTrue(us_011_date.accountBox.getText().contains("Saving Account"));
//
//    }
//
//    @Given("user doesn't click")
//    public void user_do_not_click() {
//        us_011_date.zelle.click();
//        us_011_date.zelle.click();
//    }
//
//    @Then("user verify radio button")
//    public void user_verify_radio_button() {
//        Assert.assertFalse(us_011_date.zelle.isSelected());
//    }
//
//    @Given("user click Zelle button")
//    public void user_click_Zelle_button() {
//        us_011_date.zelle.click();
//    }
//
//    @Then("User verify radio button")
//    public void user_verify_radio_button1() {
//        Assert.assertTrue(us_011_date.zelle.isSelected());
//    }


}


