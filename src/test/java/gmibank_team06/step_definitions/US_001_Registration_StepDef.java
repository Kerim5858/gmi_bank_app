package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_001_RegistrationPage;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Alert;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;


public class US_001_Registration_StepDef {
    US_001_RegistrationPage us_001_registrationPage = new US_001_RegistrationPage();
    WebDriver driver;

    @Given("user click usericon")
    public void user_click_usericon() {
        us_001_registrationPage.userIcon.click();

    }

    @Given("user click register")
    public void user_click_register()  {
        us_001_registrationPage.registerSelect.click();

    }

    @Given("user click ssn textbox  and enter ssn {string}")
    public void user_click_ssn_textbox_and_enter_ssn(String string){

       us_001_registrationPage.ssnTextBox.click();
       us_001_registrationPage.ssnTextBox.sendKeys(string);
    }

    @Given("user click name textbox and enter name {string}")
    public void user_click_name_textbox_and_enter_name(String string) {
        us_001_registrationPage.nameTextBox.click();
        us_001_registrationPage.nameTextBox.sendKeys(string);

    }
    @Given("user click lastname textbox and enter lastname {string}")
    public void user_click_lastname_textbox_and_enter_lastname(String string) {
        us_001_registrationPage.lastnameTextBox.click();
        us_001_registrationPage.lastnameTextBox.sendKeys(string);
    }
    @Given("user click address textbox and enter address {string}")
    public void user_click_address_textbox_and_enter_address(String string) {
       us_001_registrationPage.address.click();
       us_001_registrationPage.address.sendKeys(string);
    }

    @Given("user click mobile phone textbox and enter mobile phone number {string}")
    public void user_click_mobile_phone_textbox_and_enter_mobile_phone_number(String string) {
        us_001_registrationPage.mobilePhone.click();
        us_001_registrationPage.mobilePhone.sendKeys(string);
    }

    @Given("user click username textbox and enter username {string}")
    public void user_click_username_textbox_and_enter_username(String string) {
        us_001_registrationPage.username.click();
        us_001_registrationPage.username.sendKeys(string);
    }

    @Given("user click email textbox and enter email {string}")
    public void user_click_email_textbox_and_enter_email(String string) {
        us_001_registrationPage.email.click();
        us_001_registrationPage.email.sendKeys(string);
    }
    @Given("user click new password textbox and enter password {string}")
    public void user_click_new_password_textbox_and_enter_password(String string) {
        us_001_registrationPage.newPassword.click();
        us_001_registrationPage.newPassword.sendKeys(string);
    }
    @Given("user click conf textbox and enter conf password {string}")
    public void user_click_conf_textbox_and_enter_conf_password(String string) {
        us_001_registrationPage.confirmationPassword.click();
        us_001_registrationPage.confirmationPassword.sendKeys(string);

    }

    @Given("user click register button")
    public void user_click_register_button() {
       us_001_registrationPage.registerButton.click();
    }

    @Then("user get success message {string}")
    public void user_get_success_message(String string) throws InterruptedException {

        Driver.waitForVisibility((us_001_registrationPage.Regist_successMessage2), 5);
//        System.out.println(us_001_registrationPage.failureMessage2.isDisplayed());



    }


}
