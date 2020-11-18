
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_012_ManageCustomers.feature");
formatter.feature({
  "name": "An Employee can manage Customer",

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_006_UserSettings.feature");
formatter.feature({
  "name": "Usersettings",

  "description": "",
  "keyword": "Feature",
  "tags": [
    {

      "name": "@manage_customers"

      "name": "@User_story_006"

    }
  ]
});
formatter.background({

  "name": "navigate to manage customers",
  "description": "",
  "keyword": "Background"
});

  "name": "user go to usersettings",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "User settings should be aditable on homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_006"
    },
    {
      "name": "@user_home_page"
    }
  ]
});

formatter.step({
  "name": "user go to GMI userSettings page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_go_to_GMI_userSettings_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid UspUsername",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_enters_a_valid_UspUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a valid UspPassword",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_enters_a_valid_UspPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on  Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_clicks_on_Sign_in_button()"
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

  "name": "user clicks on username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_clicks_on_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on userinfo",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.clicks_on_userinfo()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user go to usersettings",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "positive1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_006"
    },
    {
      "name": "@TC_01_Firstname"
    }
  ]
});
formatter.step({
  "name": "user clicks on First Name Box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_clicks_on_First_Name_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid Name",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_enters_valid_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button1",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_click_save_button1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should see Setting saved! message1",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.should_see_Setting_saved_message1()"

});
formatter.result({
  "status": "passed"
});

formatter.scenario({
  "name": "The Edit portal can allow user to update First Name",

formatter.background({
  "name": "user go to usersettings",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "positive2",

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

      "name": "@User_story_006"
    },
    {
      "name": "@TC_01_Lastname"
    }
  ]
});
formatter.step({
  "name": "user clicks on Last Name Box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_clicks_on_Last_Name_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_enters_valid_Last_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click save button2",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_click_save_button2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should see pop up Settings Saved text2",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.should_see_pop_up_Settings_Saved_text2()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user go to usersettings",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "positive3",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_006"
    },
    {
      "name": "@TC_01_Email"

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
=======
  "name": "user clicks on Email Box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_clicks_on_Email_Box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid Email",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_enters_valid_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks save button3",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_clicks_save_button3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should see pop up Settings Saved text3",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.should_see_pop_up_Settings_Saved_text3()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "user go to usersettings",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "positive4",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_006"
    },
    {
      "name": "@TC_01_Language"
    }
  ]
});
formatter.step({
  "name": "user clicks on Dropdown",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_clicks_on_Dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees two options available and select one",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_sees_two_options_available_and_select_one()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on save button4 and sees pop up text4",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_006_UserSetting_StepDef.user_clicks_on_save_button4_and_sees_pop_up_text4()"
});

formatter.result({
  "status": "undefined"
});
});