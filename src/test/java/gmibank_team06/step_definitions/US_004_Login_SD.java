package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_004_005_Login_Page;
import gmibank_team06.utilities.ConfigurationReader;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;


public class US_004_Login_SD {

    US_004_005_Login_Page us_004_005_login_page = new US_004_005_Login_Page();

    @Given("user is on the gmiBank page")
    public void user_is_on_the_gmiBank_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("GMI_Url"));
    }

    @Given("Click on the login")
    public void click_on_the_login() {
        us_004_005_login_page.loginButton.click();
    }

    @Given("Click on the sign in")
    public void click_on_the_sign_in() {

        us_004_005_login_page.signInButton.click();
    }

    @Given("User should be valid username")
    public void user_should_be_valid_username() {
        us_004_005_login_page.username.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_valid_username"));
    }

    @Given("User should be valid password")
    public void user_should_be_valid_password() {
        us_004_005_login_page.password.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_valid_password"));
    }

    @Given("User click sing in button")
    public void user_click_sing_in_button() {
        us_004_005_login_page.sigIn.click();
    }

    @Then("Then I should not see the eror message")
    public void then_I_should_not_see_the_eror_message() {

        Assert.assertFalse(us_004_005_login_page.errorMessage.getText().contains("Failed to sign in! Please check your credentials and try again."));

    }

    @Given("Click on the cancel")
    public void click_on_the_cancel() {

        us_004_005_login_page.cancel.click();
    }

    @Then("User should be see Home")
    public void user_should_be_see_Home() {

        Assert.assertEquals(us_004_005_login_page.homeHeader.getText(), "Home");
    }
}