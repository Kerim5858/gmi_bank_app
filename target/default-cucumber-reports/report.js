
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_008_ChangePassword.feature");
formatter.feature({
  "name": "Password segment on Homepage should be editable",

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_014_New_Date.feature");
formatter.feature({
  "name": "Date",

  "description": "",
  "keyword": "Feature",
  "tags": [
    {

      "name": "@ChangePassword"
    }
  ]
});
formatter.scenario({
  "name": "TC_US8_001\tThe old password should not be used",

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

      "name": "@ChangePassword"
    },
    {
      "name": "@TC1"

      "name": "@User_story_014"

    }
  ]
});
formatter.step({

  "name": "Log in to the account",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.log_in_to_the_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to the account name",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_to_the_account_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Password",
  "keyword": "And "
  "name": "user go to GMI home page",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_go_to_GMI_home_page()"
});
formatter.result({
  "status": "passed"

});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_to_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({

  "name": "Click Current password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password",
  "keyword": "And "

  "name": "user click sig in button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_sig_in_button()"
});
formatter.result({
  "status": "passed"

});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({

  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"

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

  "name": "Enter new password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password()"

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

  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"

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

  "name": "Re-enter new password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password()"

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

  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"

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

  "name": "Verify the message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar--error\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-2.local\u0027, ip: \u00272601:156:81:ff0:0:0:0:dcd0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_252\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/1z/6vsyt_3d5dg...}, goog:chromeOptions: {debuggerAddress: localhost:51243}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 60dbb8fdb65aa1cc72bd7c7ff058b4dc\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar--error\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\n\tat gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_message(US_008_PasswordChange_StepDef.java:81)\n\tat ✽.Verify the message(file:///Users/hasanimanli/IdeaProjects/gmi_bank_app/src/test/resources/features/US_008_ChangePassword.feature:16)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "TC_US8_002 There should be at least 1 lowercase char for stronger password and",
  "description": "  see the level chart change accordingly",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC2"

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

  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password from tc1",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc1()"

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

  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"

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

  "name": "Enter new password with lowercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_with_lowercase()"

  "name": "system should give error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.system_should_give_error_message()"

});
formatter.result({
  "status": "passed"
});

formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Re-enter new password with lowercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_with_lowercase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the password with lowercase strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_with_lowercase_strength_color()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US8_003 Without at least 1 lowercase char see the level chart change accordingly",

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

      "name": "@ChangePassword"
    },
    {
      "name": "@TC3"

      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_Date"

    }
  ]
});
formatter.step({

  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password from tc2",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"

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

  "name": "Enter new password without lowercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_without_lowercase()"

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

  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"

  "name": "verify current date and system date",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.verify_current_date_and_system_date()"

});
formatter.result({
  "status": "passed"
});

formatter.step({
  "name": "Re-enter new password without lowercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_without_lowercase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the password without lowercase strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_without_lowercase_strength_color()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US8_004\tThere should be at least 1 Uppercase char and see the level  chart change accordingly",

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

      "name": "@ChangePassword"
    },
    {
      "name": "@TC4"

      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_User"

    }
  ]
});
formatter.step({

  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password from tc3",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"

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

  "name": "Enter new password with uppercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_with_uppercase()"

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

  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"

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

  "name": "Re-enter new password with uppercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_with_uppercase()"

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

  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"

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

  "name": "Verify the password with uppercase strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_with_uppercase_strength_color()"

  "name": "verify valid data",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.verify_valid_data()"

});
formatter.result({
  "status": "passed"
});

formatter.scenario({
  "name": "TC_US8_005 Without at least 1 Uppercase char see the level  chart change accordingly",

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

      "name": "@ChangePassword"
    },
    {
      "name": "@TC5"

      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_Account"

    }
  ]
});
formatter.step({

  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password from tc4",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new password without uppercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_without_uppercase()"

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

  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Re-enter new password without uppercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_without_uppercase()"

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

  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"

  "name": "User gets error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_gets_error_message()"

});
formatter.result({
  "status": "passed"
});

formatter.step({
  "name": "Verify the password without uppercase strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_without_uppercase_strength_color()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US8_006\tThere should be at least 1 digit  and see the level chart change accordingly",

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

      "name": "@ChangePassword"
    },
    {
      "name": "@TC6"

      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_Account"

    }
  ]
});
formatter.step({

  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password from tc5",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc5()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new password with digit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_with_digit()"

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

  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Re-enter new password with digit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_with_digit()"

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

  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"

  "name": "verify valid data",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.verify_valid_data()"

});
formatter.result({
  "status": "passed"
});

formatter.step({
  "name": "Verify the password with digit strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_with_digit_strength_color()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US8_007\tWithout at least 1 digit see the level  chart change accordingly",

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

      "name": "@ChangePassword"
    },
    {
      "name": "@TC7"

      "name": "@User_story_014"
    },
    {
      "name": "@TC_014_Zelle"

    }
  ]
});
formatter.step({

  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"

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

  "name": "Enter old password from tc6",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"

  "name": "user verify radio button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_011_Date_StepDef.user_verify_radio_button()"

});
formatter.result({
  "status": "passed"
});

formatter.step({
  "name": "Enter new password without digit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_without_digit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"

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

  "name": "Re-enter new password without digit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_without_digit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"

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

  "name": "Verify the password without digit strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_without_digit_strength_color()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US8_008\tThere should be at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC8"
    }
  ]
});
formatter.step({
  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password tc7",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_tc7()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new password with special char",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_with_special_char()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Re-enter new password with special char",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_with_special_char()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the password with special char strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_with_special_char_strength_color()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US8_009\tWithout at least 1 special char see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC9"
    }
  ]
});
formatter.step({
  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password from tc8",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc8()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new password without special char",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_without_special_char()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Re-enter new password without special char",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_without_special_char()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the password without special char strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_without_special_char_strength_color()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US8_010 There should be at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC10"
    }
  ]
});
formatter.step({
  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password from tc9",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new password at least 7 chars",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_at_least_chars(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Re-enter new password at least 7 chars",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_at_least_chars(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the password with at least 7 chars strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_with_at_least_chars_strength_color(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US8_011\tLess than 7 chars see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC11"
    }
  ]
});
formatter.step({
  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password from tc10",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc10()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new password less than 7 digit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_less_than_digit(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Re-enter new password less than 7 digit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_less_than_digit(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the password with less than 7 digit strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_with_less_than_digit_strength_color(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US8_012\tThe new password should be confirmed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC12"
    }
  ]
});
formatter.step({
  "name": "Click Current password",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter old password from tc12",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc12()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter new password as requested",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_as_requested()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Re-enter new password as requested",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_as_requested()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the confirm message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_confirm_message()"

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