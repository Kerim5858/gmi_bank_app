package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_010_Address_Page;
import gmibank_team06.utilities.ConfigurationReader;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

public class US_010_Address_StepDef {
    US_010_Address_Page us_010_address_page = new US_010_Address_Page();



    @Given("user go to GMI home page")
    public void user_go_to_GMI_home_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("GMI_Url"));
    }

    @Given("user click sig in button")
    public void user_click_sig_in_button() {
        us_010_address_page.sign.click();
        us_010_address_page.sign_in.click();
    }

    @Given("user enter valid username")
    public void user_enter_valid_username() {
        us_010_address_page.username.sendKeys(ConfigurationReader.getProperty("GMI_employee_user"));

    }

    @Given("user enter valid password")
    public void user_enter_valid_password() {
        us_010_address_page.password.sendKeys(ConfigurationReader.getProperty("GMI_employee_password"));
    }

    @Given("user click sign in button")
    public void user_click_sign_in_button() {
        us_010_address_page.signButton.click();
    }

    @Given("user click my operation")
    public void user_click_my_operation() {
        us_010_address_page.my_operation.click();
    }

    @Given("user click manage Customer")
    public void user_click_manage_Customer() {
        us_010_address_page.manage_customer.click();
    }

    @Then("user click Create a new Customer button")
    public void user_click_Create_a_new_Customer_button() {
        us_010_address_page.create_new_customer.click();
    }

    @Given("user click address textbox")
    public void user_click_address_textbox() {
        us_010_address_page.address.sendKeys("");


    }

    @Given("user leave clear textbox")
    public void user_leave_clear_textbox() {
        us_010_address_page.address.clear();
        Assert.assertTrue("".isEmpty());
    }

    @Then("user click save button")
    public void user_click_save_button() {
        us_010_address_page.save.click();
    }

    @Then("verify error message")
    public void verify_error_message() {
        Assert.assertEquals(us_010_address_page.address_error_message.getText(),"This field is required.");
    }

    @Given("user enter valid data for address")
    public void user_enter_valid_data_for_address() {
        us_010_address_page.address.sendKeys("53 Milky Way Rd. No:12");

    }

    @Then("should not see any message for address")
    public void should_not_see_any_message_for_address() {
        Assert.assertTrue(us_010_address_page.address_error_message.isDisplayed());
    }

    @Then("verify error message for city")
    public void verify_error_message_for_city() {
        us_010_address_page.city.clear();
        us_010_address_page.save.click();
        Assert.assertEquals(us_010_address_page.city_error_message.getText(),"This field is required.");
    }

    @Given("user enter valid data for city")
    public void user_enter_valid_data_for_city() {
        us_010_address_page.city.sendKeys("Davis");

    }

    @Then("should not see any message for city")
    public void should_not_see_any_message_for_city() {
        Assert.assertTrue(us_010_address_page.city_error_message.isDisplayed());
    }

    @Given("user leave clear textbox for country")
    public void user_leave_clear_textbox_for_country() {
        Select select = new Select(us_010_address_page.country);
        select.selectByIndex(0);
        us_010_address_page.save.click();

    }

    @Then("verify error message for country")
    public void verify_error_message_for_country() {
        Assert.assertTrue(us_010_address_page.country.getText(),true); // false olacak burasi
    }

    @Given("user enter valid data for country")
    public void user_enter_valid_data_for_country() {
        Select select = new Select(us_010_address_page.country);
        select.selectByIndex(1);
        Assert.assertTrue(us_010_address_page.country.isDisplayed());
        us_010_address_page.save.click();
    }

    @Given("user leave clear textbox for state")
    public void user_leave_clear_textbox_for_state() {
        us_010_address_page.state.sendKeys("");
        us_010_address_page.save.click();

    }

    @Then("verify error message for state")
    public void verify_error_message_for_state() {
        Assert.assertTrue(us_010_address_page.country.getText(),true); // false olacak burasi
    }

    @Given("user enter valid data for state")
    public void user_enter_valid_data_for_state() {
        us_010_address_page.state.sendKeys("CA");
        us_010_address_page.save.click();

    }






}
