package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_009_SSN_CheckPage;
import gmibank_team06.pages.US_010_Address_Page;
import io.cucumber.java.en.Given;
import org.junit.Assert;

public class US_09_SSN_CheckStepDef {

    US_010_Address_Page us_010_address_page = new US_010_Address_Page();
    US_009_SSN_CheckPage us_009_ssn_checkPage = new US_009_SSN_CheckPage();


    @Given("user enter invalid SNN")
    public void user_enter_invalid_SNN() {
        us_009_ssn_checkPage.SSN_search.sendKeys("123456789");
    }

    @Given("click search button")
    public void click_search_button() {
        us_009_ssn_checkPage.searchButton.click();
        us_009_ssn_checkPage.SSN_search.clear();
    }

    @Given("user enter valid SNN")
    public void user_enter_valid_SNN() {
       us_009_ssn_checkPage.SSN_search.sendKeys("781-12-3457");
       us_009_ssn_checkPage.searchButton.click();
    }

    @Given("user should verify name")
    public void user_should_verify_name() {
        Assert.assertTrue(us_009_ssn_checkPage.nameText.getText().contains("Bluebell"));
    }

    @Given("user verify last_name")
    public void user_verify_last_name() {
        Assert.assertTrue(us_009_ssn_checkPage.lastName.getText().contains("Garden"));
    }

    @Given("user verify email")
    public void user_verify_email() {
        Assert.assertTrue(us_009_ssn_checkPage.emailText.getText().contains("bluebelle@gmail.com"));

    }

    @Given("user verify phone")
    public void user_verify_phone() {
        Assert.assertTrue(us_009_ssn_checkPage.mobileText.getText().contains("501-313-6265"));
    }





}
