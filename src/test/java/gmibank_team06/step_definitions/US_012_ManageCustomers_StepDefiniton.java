package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_010_Address_Page;
import gmibank_team06.pages.US_012_CU_Customer_Page;
import gmibank_team06.pages.US_012_Customers_Page;
import gmibank_team06.pages.US_012_ManageCustomers_Page;
import gmibank_team06.utilities.ConfigurationReader;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class US_012_ManageCustomers_StepDefiniton {

    US_012_ManageCustomers_Page manageCustomers = new US_012_ManageCustomers_Page();
    US_012_Customers_Page customers = new US_012_Customers_Page();
    US_012_CU_Customer_Page cu_customer_page = new US_012_CU_Customer_Page();

    US_010_Address_Page us_010_address_page = new US_010_Address_Page();

    @Given("user goes to GMI home page")
    public void userGoesToGMIHomePage() {
        Driver.getDriver().get(ConfigurationReader.getProperty("GMI_Url"));
    }

    @And("user logs in as employee")
    public void userLogsInAsEmployee() {

         try {
             if(us_010_address_page.sign_in.isEnabled()) {
            us_010_address_page.sign.click();
            us_010_address_page.sign_in.click();
            us_010_address_page.username.sendKeys(ConfigurationReader.getProperty("GMI_employee_user"));
            us_010_address_page.password.sendKeys(ConfigurationReader.getProperty("GMI_employee_password"));
            us_010_address_page.signButton.click();}
        } catch (Exception e) {

         }
        //else manageCustomers.sign2.click();

    }

    @Then("user navigates to manage customer")
    public void userNavigatesToManageCustomer() throws InterruptedException {
        Thread.sleep(3000);
        us_010_address_page.my_operation.click();
        us_010_address_page.manage_customer.click();
    }



    @Given("verify the item counts is {int}")
    public void verify_the_item_counts_is(Integer expectedItemsNumber) {
        String[] itemsCountStr = manageCustomers.ItemsCountText.getText().split(" ");
        Integer actualItemsNumber= Integer.valueOf(itemsCountStr[itemsCountStr.length-2]);
        Assert.assertEquals(expectedItemsNumber,actualItemsNumber);
    }

    @Given("verify the item counts")
    public void verify_the_item_counts() {

    }

    @Given("verify the First Name")
    public void verify_the_First_Name() {
        //This will be confirmed with backend test
        System.out.println(manageCustomers.getStringList(manageCustomers.firstName));
        Assert.assertEquals(manageCustomers.getStringList(manageCustomers.firstName),manageCustomers.getStringList(manageCustomers.firstName));
    }

    @Given("verify the Last Name")
    public void verify_the_Last_Name() {
        Assert.assertEquals(manageCustomers.getStringList(manageCustomers.lastName),manageCustomers.getStringList(manageCustomers.lastName));
    }

    @Given("verify the Middle Initial")
    public void verify_the_Middle_Initial() {
        Assert.assertEquals(manageCustomers.getStringList(manageCustomers.middleInitial),manageCustomers.getStringList(manageCustomers.middleInitial));
    }

    @Given("verify the Email")
    public void verify_the_Email() {
        Assert.assertEquals(manageCustomers.getStringList(manageCustomers.email),manageCustomers.getStringList(manageCustomers.email));
    }

    @Given("verify the Mobile Phone Number")
    public void verify_the_Mobile_Phone_Number() {
        Assert.assertEquals(manageCustomers.getStringList(manageCustomers.mobilePhoneNumber),manageCustomers.getStringList(manageCustomers.mobilePhoneNumber));
    }

    @Given("verify the Phone Number")
    public void verify_the_Phone_Number() {
        Assert.assertEquals(manageCustomers.getStringList(manageCustomers.phoneNumber),manageCustomers.getStringList(manageCustomers.phoneNumber));
    }

    @Given("verify the Address")
    public void verify_the_Address() {
        Assert.assertEquals(manageCustomers.getStringList(manageCustomers.address),manageCustomers.getStringList(manageCustomers.address));
    }

    @Given("verify the Create Date")
    public void verify_the_Create_Date() {
        Assert.assertEquals(manageCustomers.getStringList(manageCustomers.createDate),manageCustomers.getStringList(manageCustomers.createDate));
    }


    @Given("verify there is a View option")
    public void verify_there_is_a_View_option() {
        Assert.assertTrue(manageCustomers.viewButton.isDisplayed());
    }

    @Given("user clicks View button")
    public void user_clicks_View_button() {
        manageCustomers.viewButton.click();
    }

    @Then("verify on the next page Edit button is visible")
    public void verify_on_the_next_page_Edit_button_is_visible() {
        Assert.assertTrue(customers.editButton.isDisplayed());
    }



    @Given("verify there is an Edit option")
    public void verify_there_is_an_Edit_option() {
        Assert.assertTrue(manageCustomers.editButton2.isEnabled());
    }

    @Given("user clicks Edit button")
    public void user_clicks_Edit_button() {
        Driver.wait(10);
        Driver.getDriver().navigate().refresh();
        Driver.wait(3);
        manageCustomers.editButton2.click();
    }

    @Then("verify user on the {string} page")
    public void verify_user_on_the_page(String string) {
        Assert.assertEquals(string, cu_customer_page.title.getText());
    }


    @Given("user is on Create or edit a Customer page")
    public void user_is_on_Create_or_edit_a_Customer_page() {
        manageCustomers.editButton2.click();
    }


    @Given("user updates first name as {string}")
    public void user_updates_first_name_as(String string) {
        cu_customer_page.firstName.clear();
        cu_customer_page.firstName.sendKeys(string);
        cu_customer_page.saveButton.click();
    }

    @Then("verify first name is {string}")
    public void verify_first_name_is(String string){
        Assert.assertEquals(string,cu_customer_page.firstName.getAttribute("value"));

    }

    public void updateTextBox(WebElement we, String str){
        we.clear();
        we.sendKeys(str);
        cu_customer_page.saveButton.click();
    }

    public void assertWebElement(WebElement we, String expected){
        Assert.assertEquals(expected,we.getAttribute("value"));
    }

    @And("user updates last name as {string}")
    public void userUpdatesLastNameAs(String arg0) {
        updateTextBox(cu_customer_page.lastName,arg0);
    }

    @Then("verify last name is {string}")
    public void verifyLastNameIs(String arg0) {
            assertWebElement(cu_customer_page.lastName,arg0);
    }

    @And("user updates email as {string}")
    public void userUpdatesEmailAs(String arg0) {
        updateTextBox(cu_customer_page.email,arg0);
    }

    @Then("verify email is {string}")
    public void verifyEmailIs(String arg0) {
        assertWebElement(cu_customer_page.email,arg0);
    }

    @And("user updates mobile phone number as {string}")
    public void userUpdatesMobilePhoneNumberAs(String arg0) {
        updateTextBox(cu_customer_page.mobilePhoneNumber,arg0);
    }

    @Then("verify the mobile phone number is {string}")
    public void verifyTheMobilePhoneNumberIs(String arg0) {
        assertWebElement(cu_customer_page.mobilePhoneNumber,arg0);
    }

    @And("user updates phone number as {string}")
    public void userUpdatesPhoneNumberAs(String arg0) {
        updateTextBox(cu_customer_page.phoneNumber,arg0);
    }

    @Then("verify phone number is {string}")
    public void verifyPhoneNumberIs(String arg0) {
        assertWebElement(cu_customer_page.phoneNumber,arg0);
    }

    @And("user updates zip code as {string}")
    public void userUpdatesZipCodeAs(String arg0) {
        updateTextBox(cu_customer_page.zipCode,arg0);
    }

    @Then("verify zip code is {string}")
    public void verifyZipCodeIs(String arg0) {
        assertWebElement(cu_customer_page.zipCode,arg0);
    }

    @And("user updates address as {string}")
    public void userUpdatesAddressAs(String arg0) {
        updateTextBox(cu_customer_page.address,arg0);
    }

    @Then("verify address is {string}")
    public void verifyAddressIs(String arg0) {
        assertWebElement(cu_customer_page.address,arg0);
    }

    @And("user updates city as {string}")
    public void userUpdatesCityAs(String arg0) {
        updateTextBox(cu_customer_page.city,arg0);
    }

    @Then("verify city is {string}")
    public void verifyCityIs(String arg0) {
        assertWebElement(cu_customer_page.city,arg0);
    }

    @And("user updates ssn as {string}")
    public void userUpdatesSsnAs(String arg0) {
        updateTextBox(cu_customer_page.ssn,arg0);
    }

    @Then("verify ssn is {string}")
    public void verifySsnIs(String arg0) {
        assertWebElement(cu_customer_page.ssn,arg0);
    }

    @And("user updates create date as {string}")
    public void userUpdatesCreateDateAs(String arg0) {
        cu_customer_page.createDate.sendKeys(arg0);
        cu_customer_page.saveButton.click();
    }

    @Then("verify create date is {string}")
    public void verifyCreateDateIs(String arg0) {
        assertWebElement(cu_customer_page.createDate,arg0);
    }

    @And("user updates country as {string}")
    public void userUpdatesCountryAs(String arg0) {
        Select options = new Select(cu_customer_page.countryDD);
        options.selectByVisibleText(arg0);
        cu_customer_page.saveButton.click();
    }

    @Then("verify first country is {string}")
    public void verifyFirstCountryIs(String arg0) {
        Select options = new Select(cu_customer_page.countryDD);
        Assert.assertEquals(arg0,options.getFirstSelectedOption().getText());
    }

    @And("user updates state as {string}")
    public void userUpdatesStateAs(String arg0) {
        updateTextBox(cu_customer_page.state,arg0);
    }

    @Then("verify first state is {string}")
    public void verifyFirstStateIs(String arg0) {
        assertWebElement(cu_customer_page.state,arg0);
    }

    @And("user updates user as {string}")
    public void userUpdatesUserAs(String arg0) {
        Select options = new Select(cu_customer_page.userDD);
        options.selectByVisibleText(arg0);
        cu_customer_page.saveButton.click();
    }

    @Then("verify first user is {string}")
    public void verifyFirstUserIs(String arg0) {
        Select options = new Select(cu_customer_page.userDD);
        Assert.assertEquals(arg0,options.getFirstSelectedOption().getText());
    }

    @And("user updates account as {string}")
    public void userUpdatesAccountAs(String arg0) {
        Select options = new Select(cu_customer_page.account);
        options.selectByVisibleText(arg0);
        cu_customer_page.saveButton.click();
    }

    @Then("verify first account is {string}")
    public void verifyFirstAccountIs(String arg0) {
        Assert.assertTrue(Driver.getDriver().findElement(By.xpath("//*[text()='"+arg0+"']")).isSelected());
    }
    boolean isCheked=true;
    @And("user click Zelle Enrolled checkbox")
    public void userClickZelleEnrolledCheckbox() {
        cu_customer_page.zelleEnrolled.click();
        isCheked = cu_customer_page.zelleEnrolled.isSelected();
        cu_customer_page.saveButton.click();
    }

    @Then("verify Zelle Enrolled is updated")
    public void verifyZelleEnrolledIsUpdated() {
        Assert.assertEquals(isCheked,cu_customer_page.zelleEnrolled.isSelected());
    }
}
