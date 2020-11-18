package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_007_UserSettingsPage;
import gmibank_team06.utilities.ConfigurationReader;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class US_007_UserSetting_StepDef {

    US_007_UserSettingsPage us_007_userSettingsPage = new US_007_UserSettingsPage();

    @Given("user clicks on First Name box")
    public void user_clicks_on_First_Name_box() {
        Driver.waitForClickablility((us_007_userSettingsPage.firstname), 5);
    }

    @Given("user user leaves First Name box empty")
    public void user_user_leaves_First_Name_box_empty() {
        us_007_userSettingsPage.firstname.clear();
    }

    @Then("verify First name is required message")
    public void verify_First_name_is_required_message() {
        us_007_userSettingsPage.UserinfoSaveButton.click();
        Driver.waitForVisibility((us_007_userSettingsPage.firstnameerror), 5);
        Assert.assertTrue((us_007_userSettingsPage.firstnameerror).getText().contentEquals("Your first name is required."));
    }

    @Given("user clicks on Last Name box")
    public void user_clicks_on_Last_Name_box() {
        us_007_userSettingsPage.lastname.click();
    }

    @Given("user user leaves Last Name box empty")
    public void user_user_leaves_Last_Name_box_empty() {
        us_007_userSettingsPage.lastname.clear();
    }

    @Then("verify {string} message")
    public void verify_message(String string) {
        us_007_userSettingsPage.UserinfoSaveButton.click();
        Driver.waitForVisibility((us_007_userSettingsPage.lastnameerror), 5);
        Assert.assertTrue((us_007_userSettingsPage.lastnameerror).getText().contentEquals("Your last name is required."));
    }

    @Given("user clicks on Email box")
    public void user_clicks_on_Email_box() {
        us_007_userSettingsPage.email.click();

    }

    @Given("user user leaves Email box empty")
    public void user_user_leaves_Email_box_empty() {
        us_007_userSettingsPage.email.clear();
    }


    @Given("user enters email without .com")
    public void user_enters_email_without_com() {
        us_007_userSettingsPage.email.sendKeys(ConfigurationReader.getProperty("nocomemail"));
        Driver.waitForVisibility((us_007_userSettingsPage.emailerror), 5);
        us_007_userSettingsPage.UserinfoSaveButton.click();
        Driver.waitForVisibility((us_007_userSettingsPage.emailerror), 5);
        Assert.assertTrue((us_007_userSettingsPage.emailerror).getText().contentEquals("This field is invalid"));
    }

}




