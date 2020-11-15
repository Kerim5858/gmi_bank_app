package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_003_NewPassword_Page;
import gmibank_team06.pages.US_004_005_Login_Page;
import gmibank_team06.pages.US_008_ChangePassword_Page;
import gmibank_team06.utilities.ConfigurationReader;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.WebDriver;

public class US_008_PasswordChange_StepDef {

    US_008_ChangePassword_Page US_008_ChangePassword_Page = new US_008_ChangePassword_Page();
    US_004_005_Login_Page login_page = new US_004_005_Login_Page();
    US_003_NewPassword_Page US_003 = new US_003_NewPassword_Page();
    String successMessage = US_008_ChangePassword_Page.successMessage.getText();
    String errorMessage = US_008_ChangePassword_Page.errorMessage.getText();


    @Given("Log in to the account")
    public void log_in_to_the_account() {
        Driver.getDriver().get(ConfigurationReader.getProperty("GMI_Url"));
        login_page.loginButton.click();
        login_page.signInButton.click();
        login_page.username.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_valid_username"));
        login_page.password.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_valid_password"));
        login_page.sigIn.click();
    }

    @Given("Click to the account name")
    public void click_to_the_account_name() {
        US_008_ChangePassword_Page.account.click();
    }

    @Given("Click to Password")
    public void click_to_Password() {
        US_008_ChangePassword_Page.passwordIcon.click();
    }

    @Given("Click Current password")
    public void click_Current_password() {
        US_008_ChangePassword_Page.currentPassword.click();
    }

    @Given("Enter old password")
    public void enter_old_password() {
        US_008_ChangePassword_Page.currentPassword.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_valid_password"));
    }

    @Given("Click New password")
    public void click_New_password() {
        US_008_ChangePassword_Page.newPassword.click();
    }

    @Given("Enter new password")
    public void enter_new_password() {
        US_008_ChangePassword_Page.newPassword.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_valid_password"));
    }

    @Given("Click New password confirmation")
    public void click_New_password_confirmation() {
     US_008_ChangePassword_Page.confirmPassword.click();
    }

    @Given("Re-enter new password")
    public void re_enter_new_password() {
        US_008_ChangePassword_Page.confirmPassword.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_valid_password"));
    }

    @Given("Click save")
    public void click_save() {
        US_008_ChangePassword_Page.saveButton.click();
    }

    @Then("Verify the message")
    public void verify_the_message() {

        Assert.assertEquals("An error has occured! The password could not be changed.", errorMessage);
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password from tc1")
    public void enter_old_password_from_tc1() {
        US_008_ChangePassword_Page.currentPassword.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_valid_password"));
    }

    @Given("Enter new password with lowercase")
    public void enter_new_password_with_lowercase() {
        US_008_ChangePassword_Page.newPassword.sendKeys("TESTEr20-");
    }

    @Given("Re-enter new password with lowercase")
    public void re_enter_new_password_with_lowercase() {
        US_008_ChangePassword_Page.confirmPassword.sendKeys("TESTEr20-");
    }

    @Then("Verify the password with lowercase strength color")
    public void verify_the_password_with_lowercase_strength_color() {
        Assert.assertTrue(US_003.strengthLevel_5.isDisplayed());
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password from tc2")
    public void enter_old_password_from_tc2() {
        US_008_ChangePassword_Page.currentPassword.sendKeys("TESTEr20-");

    }

    @Given("Enter new password without lowercase")
    public void enter_new_password_without_lowercase() {
        US_008_ChangePassword_Page.newPassword.sendKeys("TESTER20-");
    }

    @Given("Re-enter new password without lowercase")
    public void re_enter_new_password_without_lowercase() {
        US_008_ChangePassword_Page.confirmPassword.sendKeys("TESTER20-");
    }

    @Then("Verify the password without lowercase strength color")
    public void verify_the_password_without_lowercase_strength_color() {
        Assert.assertTrue(US_003.strengthLevel_4.isDisplayed());
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password from tc3")
    public void enter_old_password_from_tc3() {
        US_008_ChangePassword_Page.currentPassword.sendKeys("TESTER20-");
    }

    @Given("Enter new password with uppercase")
    public void enter_new_password_with_uppercase() {
        US_008_ChangePassword_Page.newPassword.sendKeys("Techpro20=");
    }

    @Given("Re-enter new password with uppercase")
    public void re_enter_new_password_with_uppercase() {
        US_008_ChangePassword_Page.confirmPassword.sendKeys("Techpro20=");
    }

    @Then("Verify the password with uppercase strength color")
    public void verify_the_password_with_uppercase_strength_color() {
        Assert.assertTrue(US_003.strengthLevel_5.isDisplayed());
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password from tc4")
    public void enter_old_password_from_tc4() {
        US_008_ChangePassword_Page.currentPassword.sendKeys("Techpro20=");
    }

    @Given("Enter new password without uppercase")
    public void enter_new_password_without_uppercase() {
        US_008_ChangePassword_Page.newPassword.sendKeys("techpro20=");
    }

    @Given("Re-enter new password without uppercase")
    public void re_enter_new_password_without_uppercase() {
        US_008_ChangePassword_Page.confirmPassword.sendKeys("techpro20=");
    }

    @Then("Verify the password without uppercase strength color")
    public void verify_the_password_without_uppercase_strength_color() {
        Assert.assertTrue(US_003.strengthLevel_4.isDisplayed());
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password from tc5")
    public void enter_old_password_from_tc5() {
        US_008_ChangePassword_Page.currentPassword.sendKeys("techpro20=");
    }

    @Given("Enter new password with digit")
    public void enter_new_password_with_digit() {
        US_008_ChangePassword_Page.newPassword.sendKeys("Rarefor4-");
    }

    @Given("Re-enter new password with digit")
    public void re_enter_new_password_with_digit() {
        US_008_ChangePassword_Page.confirmPassword.sendKeys("Rarefor4-");
    }

    @Then("Verify the password with digit strength color")
    public void verify_the_password_with_digit_strength_color() {
        Assert.assertTrue(US_003.strengthLevel_5.isDisplayed());
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password from tc6")
    public void enter_old_password_from_tc6() {
        US_008_ChangePassword_Page.currentPassword.sendKeys("Rarefor4-");
    }

    @Given("Enter new password without digit")
    public void enter_new_password_without_digit() {
        US_008_ChangePassword_Page.newPassword.sendKeys("Rarefor-");
    }

    @Given("Re-enter new password without digit")
    public void re_enter_new_password_without_digit() {
        US_008_ChangePassword_Page.confirmPassword.sendKeys("Rarefor-");
    }

    @Then("Verify the password without digit strength color")
    public void verify_the_password_without_digit_strength_color() {
        Assert.assertTrue(US_003.strengthLevel_4.isDisplayed());
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password tc7")
    public void enter_old_password_tc7() {
        US_008_ChangePassword_Page.currentPassword.sendKeys("Rarefor-");
    }

    @Given("Enter new password with special char")
    public void enter_new_password_with_special_char() {
        US_008_ChangePassword_Page.newPassword.sendKeys("Goblin20*");
    }

    @Given("Re-enter new password with special char")
    public void re_enter_new_password_with_special_char() {
        US_008_ChangePassword_Page.confirmPassword.sendKeys("Goblin20*");
    }

    @Then("Verify the password with special char strength color")
    public void verify_the_password_with_special_char_strength_color() {
        Assert.assertTrue(US_003.strengthLevel_5.isDisplayed());
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password from tc8")
    public void enter_old_password_from_tc8() {
        US_008_ChangePassword_Page.currentPassword.sendKeys("Goblin20*");
    }

    @Given("Enter new password without special char")
    public void enter_new_password_without_special_char() {
        US_008_ChangePassword_Page.newPassword.sendKeys("Goblin20");
    }

    @Given("Re-enter new password without special char")
    public void re_enter_new_password_without_special_char() {
        US_008_ChangePassword_Page.confirmPassword.sendKeys("Goblin20");
    }

    @Then("Verify the password without special char strength color")
    public void verify_the_password_without_special_char_strength_color() {
        Assert.assertTrue(US_003.strengthLevel_4.isDisplayed());
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password from tc9")
    public void enter_old_password_from_tc9() {
        US_008_ChangePassword_Page.currentPassword.sendKeys("Goblin20");
    }

    @Given("Enter new password at least {int} chars")
    public void enter_new_password_at_least_chars(Integer int1) {
        US_008_ChangePassword_Page.newPassword.sendKeys("Waldemort3+");
    }

    @Given("Re-enter new password at least {int} chars")
    public void re_enter_new_password_at_least_chars(Integer int1) {
        US_008_ChangePassword_Page.confirmPassword.sendKeys("Waldemort3+");
    }

    @Then("Verify the password with at least {int} chars strength color")
    public void verify_the_password_with_at_least_chars_strength_color(Integer int1) {
        Assert.assertTrue(US_003.strengthLevel_5.isDisplayed());
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password from tc10")
    public void enter_old_password_from_tc10() {
        US_008_ChangePassword_Page.currentPassword.sendKeys("Waldemort3+");
    }

    @Given("Enter new password less than {int} digit")
    public void enter_new_password_less_than_digit(Integer int1) {
        US_008_ChangePassword_Page.newPassword.sendKeys("Nota4=");
    }

    @Given("Re-enter new password less than {int} digit")
    public void re_enter_new_password_less_than_digit(Integer int1) {
        US_008_ChangePassword_Page.confirmPassword.sendKeys("Nota4=");
    }

    @Then("Verify the password with less than {int} digit strength color")
    public void verify_the_password_with_less_than_digit_strength_color(Integer int1) {
        Assert.assertTrue(US_003.strengthLevel_4.isDisplayed());
        Driver.getDriver().navigate().refresh();
    }

    @Given("Enter old password from tc12")
    public void enter_old_password_from_tc12() {
        US_008_ChangePassword_Page.currentPassword.sendKeys("Nota4=");
    }

    @Given("Enter new password as requested")
    public void enter_new_password_as_requested() {
        US_008_ChangePassword_Page.newPassword.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_valid_password"));
    }

    @Given("Re-enter new password as requested")
    public void re_enter_new_password_as_requested() {
        US_008_ChangePassword_Page.confirmPassword.sendKeys(ConfigurationReader.getProperty("GMI_Costumer_valid_password"));
    }

    @Then("Verify the confirm message")
    public void verify_the_confirm_message() {
        Assert.assertEquals("Password changed!", successMessage);
    }

}
