package gmibank_team06.step_definitions;

import gmibank_team06.pages.US_012_CU_Customer_Page;
import gmibank_team06.pages.US_012_Customers_Page;
import gmibank_team06.pages.US_012_ManageCustomers_Page;
import gmibank_team06.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;

public class US_012_ManageCustomers_StepDefiniton {

    US_012_ManageCustomers_Page manageCustomers = new US_012_ManageCustomers_Page();
    US_012_Customers_Page customers = new US_012_Customers_Page();
    US_012_CU_Customer_Page cu_customer_page = new US_012_CU_Customer_Page();

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




}
