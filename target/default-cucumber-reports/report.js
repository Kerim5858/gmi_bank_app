$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_001_Registration.feature");
formatter.feature({
  "name": "Registration",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@User_story_001"
    }
  ]
});
formatter.scenarioOutline({
  "name": "valid ssn",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC_US1_ssn"
    }
  ]
});
formatter.step({
  "name": "user click ssn textbox  and enter ssn \"\u003cssn\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user click name textbox and enter name \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click lastname textbox and enter lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click address textbox and enter address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click mobile phone textbox and enter mobile phone number \"\u003cmobile-phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click username textbox and enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click email textbox and enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click new password textbox and enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click conf textbox and enter conf password \"\u003cconf-pword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click register button",
  "keyword": "And "
});
formatter.step({
  "name": "user get success message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ssn",
        "name",
        "lastname",
        "address",
        "mobile-phone",
        "username",
        "email",
        "password",
        "conf-pword",
        "message"
      ]
    },
    {
      "cells": [
        "873-12-6534",
        "Ayse",
        "Demir",
        "12 column way",
        "197-912-1982",
        "AyseD",
        "ayse@gmail.com",
        "Ad192837?",
        "Ad192837?",
        "Registration saved! Please check your email for confirmation alert"
      ]
    }
  ]
});
formatter.background({
  "name": "Homepage",
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
  "name": "user click usericon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_usericon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_register()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "valid ssn",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@User_story_001"
    },
    {
      "name": "@TC_US1_ssn"
    }
  ]
});
formatter.step({
  "name": "user click ssn textbox  and enter ssn \"873-12-6534\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_ssn_textbox_and_enter_ssn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click name textbox and enter name \"Ayse\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_name_textbox_and_enter_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click lastname textbox and enter lastname \"Demir\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_lastname_textbox_and_enter_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click address textbox and enter address \"12 column way\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_address_textbox_and_enter_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click mobile phone textbox and enter mobile phone number \"197-912-1982\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_mobile_phone_textbox_and_enter_mobile_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click username textbox and enter username \"AyseD\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_username_textbox_and_enter_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click email textbox and enter email \"ayse@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_email_textbox_and_enter_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click new password textbox and enter password \"Ad192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_new_password_textbox_and_enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click conf textbox and enter conf password \"Ad192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_conf_textbox_and_enter_conf_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user get success message \"Registration saved! Please check your email for confirmation alert\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_get_success_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});