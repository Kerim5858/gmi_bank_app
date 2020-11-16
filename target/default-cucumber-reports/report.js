$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_012_ManageCustomers.feature");
formatter.feature({
  "name": "An Employee can manage Customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@manage_customers"
    }
  ]
});
formatter.background({
  "name": "navigate to manage customers",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user go to GMI home page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_go_to_GMI_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click sig in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_sig_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_enter_valid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_enter_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click my operation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_my_operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click manage Customer",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_manage_Customer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The Edit portal can allow user to update First Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@manage_customers"
    },
    {
      "name": "@a"
    },
    {
      "name": "@TC_US12_013"
    }
  ]
});
formatter.step({
  "name": "user is on Create or edit a Customer page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user updates first name as \"Tom\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_012_ManageCustomers_StepDefiniton.user_clicks_Edit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify first name is \"Tom\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});