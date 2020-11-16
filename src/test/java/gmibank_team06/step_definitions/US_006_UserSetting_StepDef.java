package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_006_UserSettingsPage;
import gmibank_team06.utilities.ConfigurationReader;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class US_006_UserSetting_StepDef {

    US_006_UserSettingsPage us_006_userSettingsPage = new US_006_UserSettingsPage();


    @Given("user go to GMI userSettings page")
    public void user_go_to_GMI_userSettings_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("GMI_UserSettings_Url"));
    }

    @Given("user enters a valid UspUsername")
    public void user_enters_a_valid_UspUsername() {
        us_006_userSettingsPage.UspUsername.sendKeys(ConfigurationReader.getProperty("UspUsername"));
    }

    @Given("user enters a valid UspPassword")
    public void user_enters_a_valid_UspPassword() {
        us_006_userSettingsPage.UspPassword.sendKeys(ConfigurationReader.getProperty("UspPassword"));
    }

    @Given("user clicks on  Sign in button")
    public void user_clicks_on_Sign_in_button() {
        us_006_userSettingsPage.UspSignInButton.click();
    }

    @Given("user clicks on username")
    public void user_clicks_on_username() {
        us_006_userSettingsPage.username.click();
    }

    @Then("clicks on userinfo")
    public void clicks_on_userinfo() {
        us_006_userSettingsPage.userinfodropdown.click();
    }

    @Given("user clicks on First Name Box")
    public void user_clicks_on_First_Name_Box() {
        Driver.waitForClickablility((us_006_userSettingsPage.firstname), 5);
        us_006_userSettingsPage.firstname.clear();
    }

    @Given("user enters valid Name")
    public void user_enters_valid_Name() {
        us_006_userSettingsPage.firstname.sendKeys(ConfigurationReader.getProperty("firstname"));
    }

    @Given("user click save button1")
    public void user_click_save_button1() {
        us_006_userSettingsPage.UserinfoSaveButton.click();
    }

    @Then("should see Setting saved! message1")
    public void should_see_Setting_saved_message1() {
        Driver.waitForVisibility((us_006_userSettingsPage.Toastify), 5);
        Assert.assertEquals("Settings saved!", (us_006_userSettingsPage.Toastify).getText());
    }

    @Given("user clicks on Last Name Box")
    public void user_clicks_on_Last_Name_Box() {
        Driver.waitForClickablility((us_006_userSettingsPage.lastname), 5);
        us_006_userSettingsPage.lastname.clear();
    }

    @Given("user enters valid Last Name")
    public void user_enters_valid_Last_Name() {
        us_006_userSettingsPage.lastname.sendKeys(ConfigurationReader.getProperty("lastname"));
    }

    @Given("user click save button2")
    public void user_click_save_button2() {

        us_006_userSettingsPage.UserinfoSaveButton.click();
    }

    @Then("should see pop up Settings Saved text2")
    public void should_see_pop_up_Settings_Saved_text2() {
        Driver.waitForVisibility((us_006_userSettingsPage.Toastify), 5);
        Assert.assertTrue((us_006_userSettingsPage.Toastify).getText().equals("Settings saved!"));
    }

    @Given("user clicks on Email Box")
    public void user_clicks_on_Email_Box() {
        Driver.waitForClickablility((us_006_userSettingsPage.email), 5);
        us_006_userSettingsPage.email.clear();
    }

    @Given("user enters valid Email")
    public void user_enters_valid_Email() {
        us_006_userSettingsPage.email.sendKeys(ConfigurationReader.getProperty("email"));
    }

    @Given("user clicks save button3")
    public void user_clicks_save_button3() {
        us_006_userSettingsPage.UserinfoSaveButton.click();
    }

    @Then("should see pop up Settings Saved text3")
    public void should_see_pop_up_Settings_Saved_text3() {
        Driver.waitForVisibility((us_006_userSettingsPage.Toastify), 5);
        Assert.assertTrue((us_006_userSettingsPage.Toastify).getText().equals("Settings saved!"));
    }

    @Given("user clicks on Dropdown")
    public void user_clicks_on_Dropdown() {
       // us_006_userSettingsPage.languagedropdown.sendKeys("languagedropdown");
        us_006_userSettingsPage.languagedropdown.click();
    }

    @Given("user sees two options available and select one")
    public void user_sees_two_options_available_and_select_one(){

        Select options = new Select(us_006_userSettingsPage.languagedropdown);
        System.out.println("all of languages :"+options.getOptions());
        options.selectByIndex(0);
//        options.selectByIndex(1);
//        boolean flag = false;
//        for (WebElement language : options.getOptions()) {
//            if (language.getText().equals("English")) {
//                System.out.println("languagedropdown has English");
//
//            } else {
//                System.out.println("languagedropdown has Turkish");
//                flag = true;
//                break;
//            }
//        }


    }

    @Then("user clicks on save button4 and sees pop up text4")
    public void user_clicks_on_save_button4_and_sees_pop_up_text4() {

    }
    }






