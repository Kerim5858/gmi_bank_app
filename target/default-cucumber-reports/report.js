$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_014_New_Date.feature");
formatter.feature({
  "name": "Date",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@User_story_014"
    }
  ]
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "go to Create or edit a Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_014"
    }
  ]
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
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_manage_Customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Create a new Customer button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_Create_a_new_Customer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_Date1"
    }
  ]
});
formatter.step({
  "name": "user Select previous day",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_Select_previous_day()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system should give error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.system_should_give_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_Date"
    }
  ]
});
formatter.step({
  "name": "system should give Selected current date",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.system_should_give_Selected_current_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.click_Save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify current date and system date",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.verify_current_date_and_system_date()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_User"
    }
  ]
});
formatter.step({
  "name": "user leave userTextBox blank",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_leave_userTextBox_blank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets error message",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_gets_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User_positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_User"
    }
  ]
});
formatter.step({
  "name": "user select valid date",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_select_valid_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify valid data",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.verify_valid_data()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Account_negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_Account"
    }
  ]
});
formatter.step({
  "name": "user leave accountTextBox blank",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_leave_accountTextBox_blank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User gets error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_gets_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User_positive",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_Account"
    }
  ]
});
formatter.step({
  "name": "user select valid date",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_select_valid_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify valid data",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.verify_valid_data()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Zelle_no_click",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_Zelle"
    }
  ]
});
formatter.step({
  "name": "user doesn\u0027t click",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_do_not_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify radio button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_verify_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Zelle_click",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_Account"
    }
  ]
});
formatter.step({
  "name": "user click Zelle button",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_click_Zelle_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify radio button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_verify_radio_button1()"
});
formatter.result({
  "status": "passed"
});
});