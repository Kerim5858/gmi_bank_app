package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_001_RegistrationPage;
import gmibank_team06.pages.US_002_Invalid_Register;
import gmibank_team06.utilities.ConfigurationReader;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class US_002_Invalid_Registration {
    US_002_Invalid_Register us_002_invalid_register = new US_002_Invalid_Register();

@Given("user is in the Gmibank Page")
public void user_is_in_the_Gmibank_Page() {
    Driver.getDriver().get(ConfigurationReader.getProperty("GMI_Url"));
}

    @Given("user click User icon")
    public void user_click_User_icon() {
        us_002_invalid_register.userIcon.click();
    }

    @Given("user click User register")
    public void user_click_User_register() {
        us_002_invalid_register.registerSelect.click();
    }

    @Given("user fill all the fields except SSN textbox")
    public void user_fill_all_the_fields_except_SSN_textbox() {
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message1\"translation-not-found[Your SSN is required]\"")
    public void verify_get_error_message1_translation_not_found_Your_SSN_is_required() {
        System.out.println(us_002_invalid_register.failureMessage.getText());
        String actualMessage = us_002_invalid_register.failureMessage.getText();
        String expectedMessage = "translation-not-found[Your SSN is required]";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except name textbox")
    public void user_fill_all_the_fields_except_name_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        //us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message2 {string}")
    public void verify_get_error_message2(String string) {
        System.out.println(us_002_invalid_register.failureMessageName.getText());
        String actualMessage = us_002_invalid_register.failureMessageName.getText();
        String expectedMessage = "Your First Name is required";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except lastname textbox")
    public void user_fill_all_the_fields_except_lastname_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        //us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message3 {string}")
    public void verify_get_error_message3(String string) {
        System.out.println(us_002_invalid_register.failureMessageLastName.getText());
        String actualMessage = us_002_invalid_register.failureMessageLastName.getText();
        String expectedMessage = "Your Last Name is required";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except address textbox")
    public void user_fill_all_the_fields_except_address_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        //us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message4 {string}")
    public void verify_get_error_message4(String string) {
        String actualMessage = us_002_invalid_register.message4.getText();
        String expectedMessage = "Your address is required";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except phone textbox")
    public void user_fill_all_the_fields_except_phone_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        //us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message5 {string}")
    public void verify_get_error_message5(String string) {
        String actualMessage = us_002_invalid_register.message5.getText();
        String expectedMessage = "Your mobile phone is required";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except username textbox")
    public void user_fill_all_the_fields_except_username_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        //us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message6 {string}")
    public void verify_get_error_message6(String string) {
        String actualMessage = us_002_invalid_register.message6.getText();
        String expectedMessage = "Your username is required.";

        Assert.assertEquals(actualMessage,expectedMessage);
    }


    @Given("user fill all the fields except email textbox")
    public void user_fill_all_the_fields_except_email_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        //us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message7 {string}")
    public void verify_get_error_message7(String string) {
        String actualMessage = us_002_invalid_register.message7.getText();
        String expectedMessage = "Your email is required.";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except password textbox")
    public void user_fill_all_the_fields_except_password_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        //us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message8 {string}")
    public void verify_get_error_message8(String string) {
        String actualMessage = us_002_invalid_register.message9.getText();
        String expectedMessage = "The password and its confirmation do not match!";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except confirmation password textbox")
    public void user_fill_all_the_fields_except_confirmation_password_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        //us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message9 {string}")
    public void verify_get_error_message9(String string) {
        String actualMessage = us_002_invalid_register.message9.getText();
        String expectedMessage = "Your confirmation password is required.";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except SSN number2 textbox")
    public void user_fill_all_the_fields_except_SSN_number2_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("SSN_number2"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message10 {string}")
    public void verify_get_error_message10(String string) {
        String actualMessage = us_002_invalid_register.message10.getText();
        String expectedMessage = "Your SSN is invalid";
        Assert.assertEquals(actualMessage,expectedMessage);
    }


    @Given("user fill all the fields except SSN number3 textbox")
    public void user_fill_all_the_fields_except_SSN_number3_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("SSN_number3"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message11 {string}")
    public void verify_get_error_message11(String string) {
        String actualMessage = us_002_invalid_register.message10.getText();
        String expectedMessage = "Your SSN is invalid";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except SSN number4 textbox")
    public void user_fill_all_the_fields_except_SSN_number4_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("SSN_number4"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message12 {string}")
    public void verify_get_error_message12(String string) {
        String actualMessage = us_002_invalid_register.message10.getText();
        String expectedMessage = "Your SSN is invalid";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except phone2 textbox")
    public void user_fill_all_the_fields_except_phone2_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone2"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message13 {string}")
    public void verify_get_error_message13(String string) {
        String actualMessage = us_002_invalid_register.message13.getText();
        String expectedMessage = "Your mobile phone number is invalid";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except phone3 textbox")
    public void user_fill_all_the_fields_except_phone3_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone3"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message14 {string}")
    public void verify_get_error_message14(String string) {
        String actualMessage = us_002_invalid_register.message13.getText();
        String expectedMessage = "Your mobile phone number is invalid";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except phone4 textbox")
    public void user_fill_all_the_fields_except_phone4_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone4"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message15 {string}")
    public void verify_get_error_message15(String string) {
        String actualMessage = us_002_invalid_register.message13.getText();
        String expectedMessage = "Your mobile phone number is invalid";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except email2 textbox")
    public void user_fill_all_the_fields_except_email2_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email2"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message16 {string}")
    public void verify_get_error_message16(String string) {
        String actualMessage = us_002_invalid_register.message16.getText();
        String expectedMessage = "This field is invalid";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except email3 textbox")
    public void user_fill_all_the_fields_except_email3_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email3"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message17 {string}")
    public void verify_get_error_message17(String string) {
        String actualMessage = us_002_invalid_register.message16.getText();
        String expectedMessage = "This field is invalid";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except email4 textbox")
    public void user_fill_all_the_fields_except_email4_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email4"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message18 {string}")
    public void verify_get_error_message18(String string) {
        String actualMessage = us_002_invalid_register.message16.getText();
        String expectedMessage = "This field is invalid";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Given("user fill all the fields except email5 textbox")
    public void user_fill_all_the_fields_except_email5_textbox() {
        us_002_invalid_register.ssnTextBox.sendKeys(ConfigurationReader.getProperty("ssnNumber"));
        us_002_invalid_register.nameTextBox.sendKeys(ConfigurationReader.getProperty("firstName"));
        us_002_invalid_register.lastnameTextBox.sendKeys(ConfigurationReader.getProperty("lastName"));
        us_002_invalid_register.address.sendKeys(ConfigurationReader.getProperty("address"));
        us_002_invalid_register.mobilePhone.sendKeys(ConfigurationReader.getProperty("phone"));
        us_002_invalid_register.username.sendKeys(ConfigurationReader.getProperty("userName"));
        us_002_invalid_register.email.sendKeys(ConfigurationReader.getProperty("email5"));
        us_002_invalid_register.newPassword.sendKeys(ConfigurationReader.getProperty("password55"));
        us_002_invalid_register.confirmationPassword.sendKeys(ConfigurationReader.getProperty("pasConfirm"));
        us_002_invalid_register.registerButton.click();
    }

    @Then("verify get error message19 {string}")
    public void verify_get_error_message19(String string) {
        String actualMessage = us_002_invalid_register.message16.getText();
        String expectedMessage = "This field is invalid";
        Assert.assertEquals(actualMessage,expectedMessage);
    }

}

