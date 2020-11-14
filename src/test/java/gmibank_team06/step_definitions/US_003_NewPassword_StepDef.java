package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_003_NewPassword_Page;
import gmibank_team06.utilities.ConfigurationReader;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;

public class US_003_NewPassword_StepDef {

    US_003_NewPassword_Page us003NewPasswordPage=new US_003_NewPassword_Page();

    @Given("Click user icon")
    public void click_user_icon() {

        us003NewPasswordPage.userIcon.click();
    }

    @Given("Click register")
    public void click_register() {

        us003NewPasswordPage.register.click();
    }

    @Given("click the new password box")
    public void click_the_new_password_box() {

        us003NewPasswordPage.newPassword.click();
    }

    @Given("leave the empty")
    public void leave_the_empty() {
        us003NewPasswordPage.newPassword.sendKeys(" "+ Keys.ENTER);

    }

    @Then("verify the errorMessage")
    public void verify_the_errorMessage() {
        String errrormessage=us003NewPasswordPage.passwordRequaredErrorMessage.getText();
        Assert.assertEquals("Your password is required.",errrormessage);
        us003NewPasswordPage.newPassword.clear();
    }

    @Given("send data less than {int}  data")
    public void send_data_less_than_data(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("A1c"+Keys.ENTER);
    }

    @Then("verify the message")
    public void verify_the_message() {
        String errorMessage= us003NewPasswordPage.passwordRequaredAtLeast4CharErrorMessage.getText();
        Assert.assertEquals("Your password is required to be at least 4 characters.",errorMessage);
        us003NewPasswordPage.newPassword.clear();
    }

    @Given("send the least {int} digit  data")
    public void send_the_least_digit_data(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("a3#D"+Keys.ENTER);
    }

    @Then("verify the strength bar")
    public void verify_the_strength_level() {
        String level1Value=us003NewPasswordPage.strengthLevel_1.getAttribute("style");
        Assert.assertTrue(level1Value.contains("rgb(255, 0, 0)"));//red color
        // us003NewPasswordPage.strengthLevel_1.isDisplayed();
        us003NewPasswordPage.newPassword.clear();

    }
    @Given("send the  least {int} LOWERCASE data")
    public void send_the_least_LOWERCASE_data(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("M&0B2!4Gk");
    }
    @Then("verify the with least {int} LOWERCASEstrength level")
    public void verify_the_with_least_LOWERCASEstrength_level(Integer int1) {
        String level5Value=us003NewPasswordPage.strengthLevel_5.getAttribute("style");
        Assert.assertTrue(level5Value.contains("rgb(0, 255, 0)"));//color is 5 dark green
        us003NewPasswordPage.newPassword.clear();

    }
    @Given("send the doesn't include at least {int} LOWERCASE data")
    public void send_the_doesn_t_include_at_least_LOWERCASE_data(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("M&0B2!4G");
    }
    @Then("verify the doesn't include at least {int} LOWERCASE strength level")
    public void verify_the_doesn_t_include_at_least_LOWERCASE_strength_level(Integer int1) {
        String level4Value=us003NewPasswordPage.strengthLevel_4.getAttribute("style");
        Assert.assertTrue(level4Value.contains("rgb(153, 255, 0)"));//color is 4 ligth green
        us003NewPasswordPage.newPassword.clear();
    }

    @Given("send the least {int}  UPPERCASE data")
    public void send_the_least_UPPERCASE_data(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("v-1B2!p0^K");
    }
    @Then("verify the with least {int}  UPPERCASE strength level")
    public void verify_the_with_least_UPPERCASE_strength_level(Integer int1) {
        String level5Value=us003NewPasswordPage.strengthLevel_5.getAttribute("style");
        Assert.assertTrue(level5Value.contains("rgb(0, 255, 0)"));//color is 5 dark green
        us003NewPasswordPage.newPassword.clear();

    }

    @Given("send the doesn't include at least {int}  UPPERCASE data")
    public void send_the_doesn_t_include_at_least_UPPERCASE_data(Integer int1) {
        ;us003NewPasswordPage.newPassword.sendKeys("v-1b2!p0^");
    }
    @Then("verify the doesn't include at least {int}  UPPERCASEstrength level")
    public void verify_the_doesn_t_include_at_least_UPPERCASEstrength_level(Integer int1) {
        String level4Value=us003NewPasswordPage.strengthLevel_4.getAttribute("style");
        Assert.assertTrue(level4Value.contains("rgb(153, 255, 0)"));//color is 4 ligth green
        us003NewPasswordPage.newPassword.clear();

    }

    @Given("send the least {int} DIGIT  data")
    public void send_the_least_DIGIT_data(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("a;SBz]cN(2");
    }
    @Then("verify the least {int} DIGIT strength level")
    public void verify_the_least_DIGIT_strength_level(Integer int1) {
        String level5Value=us003NewPasswordPage.strengthLevel_5.getAttribute("style");
        Assert.assertTrue(level5Value.contains("rgb(0, 255, 0)"));//color is 5 dark green
        us003NewPasswordPage.newPassword.clear();
    }
    @Given("send the doesn't include at least {int} DIGIT")
    public void send_the_doesn_t_include_at_least_DIGIT(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("a;SBz]cN(");
    }
    @Then("verify the doesn't include at least {int} DIGITstrength level")
    public void verify_the_doesn_t_include_at_least_DIGITstrength_level(Integer int1) {
        String level4Value=us003NewPasswordPage.strengthLevel_4.getAttribute("style");
        Assert.assertTrue(level4Value.contains("rgb(153, 255, 0)"));//color is 4 ligth green
        us003NewPasswordPage.newPassword.clear();
    }
    @Given("send the least {int} SPECIAL data")
    public void send_the_least_SPECIAL_data(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("a3U6zLhI9*");
    }
    @Then("verify the least {int} SPECIAL strength level")
    public void verify_the_least_SPECIAL_strength_level(Integer int1) {
        String level5Value=us003NewPasswordPage.strengthLevel_5.getAttribute("style");
        Assert.assertTrue(level5Value.contains("rgb(0, 255, 0)"));//color is 5 dark green
        us003NewPasswordPage.newPassword.clear();
    }

    @Given("send the doesn't include at least {int} SPECIALdata")
    public void send_the_doesn_t_include_at_least_SPECIALdata(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("a3U6zLhI9");
    }
    @Then("verify the doesn't include at least {int} SPECIAL strength level")
    public void verify_the_doesn_t_include_at_least_SPECIAL_strength_level(Integer int1) {
        String level4Value=us003NewPasswordPage.strengthLevel_4.getAttribute("style");
        Assert.assertTrue(level4Value.contains("rgb(153, 255, 0)"));//color is 4 ligth green
        us003NewPasswordPage.newPassword.clear();

    }

    @Given("send the  at least {int} chars data")
    public void send_the_at_least_chars_data(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("ab3fzlz");

    }
    @Then("verify the at least {int} chars strength level")
    public void verify_the_at_least_chars_strength_level(Integer int1) {
        String level2Value=us003NewPasswordPage.strengthLevel_2.getAttribute("style");
        Assert.assertTrue(level2Value.contains("rgb(255, 153, 0)"));//color is 2 orange
        us003NewPasswordPage.newPassword.clear();

    }

    @Given("send the a very strong password data")
    public void send_the_a_very_strong_password_data() {
        us003NewPasswordPage.newPassword.sendKeys("Pk%6Hl$4");
    }
    @Then("verify the a very strong password strength level")
    public void verify_the_a_very_strong_password_strength_level() {

        String level5Value=us003NewPasswordPage.strengthLevel_5.getAttribute("style");
        Assert.assertTrue(level5Value.contains("rgb(0, 255, 0)"));//color is 5 dark green


    }
    @Given("click the new password CONFIRMATION box")
    public void click_the_new_password_CONFIRMATION_box() {
        us003NewPasswordPage.newPasswordConfirmationBox.click();
    }

    @Given("leave the empty confirm new password box")
    public void leave_the_empty_confirm_new_password_box() {
        us003NewPasswordPage.newPasswordConfirmationBox.sendKeys(" "+Keys.ENTER);

    }

    @Then("verify the empty confirm error messages")
    public void verify_the_empty_confirm_error_messages() {
        us003NewPasswordPage.confirEmpthMessage.isDisplayed();
        us003NewPasswordPage.newPasswordConfirmationBox.clear();
    }
    @Given("send the data less then {int}")
    public void send_the_data_less_then(Integer int1) {
        us003NewPasswordPage.newPasswordConfirmationBox.sendKeys("C1+");
    }
    @Then("verify the less then {int} error message")
    public void verify_the_less_then_error_message(Integer int1) {
        us003NewPasswordPage.confirLessThen4Message.isDisplayed();
    }

    @Given("send the no different  data from new password")
    public void send_the_no_different_data_from_new_password() {
        us003NewPasswordPage.newPasswordConfirmationBox.sendKeys("Pk%6Hl$5"+Keys.ENTER);

    }
    @Then("verify the no different  data  error message")
    public void verify_the_no_different_data_error_message() {
        us003NewPasswordPage.dosentMatchErrorMessage.isDisplayed();
        us003NewPasswordPage.newPasswordConfirmationBox.clear();
        us003NewPasswordPage.newPassword.clear();
    }
    @Given("send the new data")
    public void send_the_new_data() {
        us003NewPasswordPage.newPassword.sendKeys("*Z1f,%2#C8");
    }

    @Given("click the new password confirmation box")
    public void click_the_new_password_confirmation_box() {
        us003NewPasswordPage.newPasswordConfirmationBox.click();
    }

    @Given("send the same data data")
    public void send_the_same_data_data() {
        us003NewPasswordPage.newPasswordConfirmationBox.sendKeys("*Z1f,%2#C8"+Keys.ENTER);
    }


    @Given("send the very long more then {int} chars data")
    public void send_the_very_long_more_then_chars_data(Integer int1) {
        us003NewPasswordPage.newPassword.sendKeys("A2367wyeyhasdhiywiuhdiuashfafho;iwh3%$#%$gdfgdgdfgfiorquiyrwiuerywiuerwiufhuwieruiweryiwueyriewuryweuryweui");
        us003NewPasswordPage.newPasswordConfirmationBox.sendKeys("A2367wyeyhasdhiywiuhdiuashfafho;iwh3%$#%$gdfgdgdfgfiorquiyrwiuerywiuerwiufhuwieruiweryiwueyriewuryweuryweui");
    }

    @Then("verfy the result long more then {int} chars")
    public void verfy_the_result_long_more_then_chars(Integer int1) {
        String first_50=us003NewPasswordPage.newPassword.getAttribute("value");
        if(first_50.length()==50){
            System.out.println("test is succesfully");
        }
    }


}
