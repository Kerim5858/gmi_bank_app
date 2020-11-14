<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_001_Registration.feature");
formatter.feature({
  "name": "Registration",
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_005_Login.feature");
formatter.feature({
  "name": "gmiBank Login",
>>>>>>> master
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
<<<<<<< HEAD
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
=======
      "name": "@gmiLogin_US_005"
    }
  ]
});
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Go to login page negativePage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
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
=======
  "name": "user is on the gmiBank page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.user_is_on_the_gmiBank_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the login",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.click_on_the_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.click_on_the_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Negative  username test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    },
    {
      "name": "@gmiBankLoginTC_003"
    }
  ]
});
formatter.step({
  "name": "User should be invalid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.user_should_be_invalid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be valid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.user_should_be_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.user_click_sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then i should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.then_i_should_see_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Negative password test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    },
    {
      "name": "@gmiBankLoginTC_004"
    }
  ]
});
formatter.step({
  "name": "User should be valid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.user_should_be_valid_username()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click usericon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_usericon()"
=======
  "name": "User should be invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.user_should_be_invalid_password()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_register()"
=======
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.user_click_sing_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I should see the error message1",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.then_I_should_see_the_error_message1()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
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
=======
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Negative username and password test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    },
    {
      "name": "@gmiBankTC_005"
>>>>>>> master
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user click ssn textbox  and enter ssn \"873-12-6534\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_ssn_textbox_and_enter_ssn(java.lang.String)"
=======
  "name": "User should be invalid username",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.user_should_be_invalid_username()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click name textbox and enter name \"Ayse\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_name_textbox_and_enter_name(java.lang.String)"
=======
  "name": "User should be invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.user_should_be_invalid_password()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click lastname textbox and enter lastname \"Demir\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_lastname_textbox_and_enter_lastname(java.lang.String)"
=======
  "name": "User click sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.user_click_sing_in_button()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click address textbox and enter address \"12 column way\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_address_textbox_and_enter_address(java.lang.String)"
=======
  "name": "Then I should see the error message2",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.then_I_should_see_the_error_message2()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.step({
  "name": "user click mobile phone textbox and enter mobile phone number \"197-912-1982\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_mobile_phone_textbox_and_enter_mobile_phone_number(java.lang.String)"
=======
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "Forget password test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    },
    {
      "name": "@gmiBankTC_006"
    }
  ]
});
formatter.step({
  "name": "Click on the Did you forget your password?",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.click_on_the_Did_you_forget_your_password()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click username textbox and enter username \"AyseD\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_username_textbox_and_enter_username(java.lang.String)"
=======
  "name": "provide email to checkbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.provide_email_to_checkbox()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click email textbox and enter email \"ayse@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_email_textbox_and_enter_email(java.lang.String)"
=======
  "name": "Click on the Reset password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.click_on_the_Reset_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the message reset your password",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.i_should_see_the_message_reset_your_password()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "TC_005 gmiBank login Test",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "New Registration",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gmiLogin_US_005"
    },
    {
      "name": "@gmiBankLoginTC_007"
    }
  ]
});
formatter.step({
  "name": "user is on the gmiBank page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.user_is_on_the_gmiBank_page()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click new password textbox and enter password \"Ad192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_new_password_textbox_and_enter_password(java.lang.String)"
=======
  "name": "Click on the login",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.click_on_the_login()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click conf textbox and enter conf password \"Ad192837?\"",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_conf_textbox_and_enter_conf_password(java.lang.String)"
=======
  "name": "Click on the sign in",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_004_Login_SD.click_on_the_sign_in()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user click register button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_click_register_button()"
=======
  "name": "Click on the You don\u0027t have an account yet? Register a new account",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.click_on_the_You_don_t_have_an_account_yet_Register_a_new_account()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user get success message \"Registration saved! Please check your email for confirmation alert\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_001_Registration_StepDef.user_get_success_message(java.lang.String)"
=======
  "name": "User should be see Registration",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_005_Login_SD.user_should_be_see_Registration()"
>>>>>>> master
});
formatter.result({
  "status": "passed"
});
});