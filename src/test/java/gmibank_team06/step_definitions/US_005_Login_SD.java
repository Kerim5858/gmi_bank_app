package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_004_005_Login_Page;
import gmibank_team06.utilities.ConfigurationReader;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

public class US_005_Login_SD {

    US_004_005_Login_Page us_004_005_login_page= new US_004_005_Login_Page();

    @Given("User should be invalid username")
    public void user_should_be_invalid_username() {
        us_004_005_login_page.username.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_invalid_username"));
    }

    @Then("Then i should see the error message")
    public void then_i_should_see_the_error_message() {

        Driver.waitForVisibility(us_004_005_login_page.errorMessage,5);

    }

    @Given("User should be invalid password")
    public void user_should_be_invalid_password() {
        us_004_005_login_page.password.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_invalid_password"));
    }

    @Then("Then I should see the error message1")
    public void then_I_should_see_the_error_message1() {
        Driver.waitForVisibility(us_004_005_login_page.errorMessage,5);
    }

    @Then("Then I should see the error message2")
    public void then_I_should_see_the_error_message2() {
        Driver.waitForVisibility(us_004_005_login_page.errorMessage,5);
    }

    @Given("Click on the Did you forget your password?")
    public void click_on_the_Did_you_forget_your_password() {
        us_004_005_login_page.passwordForget.click();
    }

    @Given("provide email to checkbox")
    public void provide_email_to_checkbox() {
        us_004_005_login_page.emailCheckBox.sendKeys(ConfigurationReader.getProperty("GMI_Reset_Email"));
    }

    @Given("Click on the Reset password")
    public void click_on_the_Reset_password() {
        us_004_005_login_page.resetPassword.click();
    }

    @Then("I should see the message reset your password")
    public void i_should_see_the_message_reset_your_password() {
        Assert.assertTrue(us_004_005_login_page.resetPasswordAlert.isDisplayed());
    }

    @Given("Click on the You don't have an account yet? Register a new account")
    public void click_on_the_You_don_t_have_an_account_yet_Register_a_new_account() {
        //Driver.waitForClickablility(us_004_005_login_page.registerNewAcount,5);
        Actions actions = new Actions(Driver.getDriver());
        actions.click(us_004_005_login_page.registerNewAcount).build().perform();
        us_004_005_login_page.registerNewAcount.click();
    }

    @Then("User should be see Registration")
    public void user_should_be_see_Registration() {
       Assert.assertEquals(us_004_005_login_page.verifyRegistration.getText(),"Registration");
    }



}
