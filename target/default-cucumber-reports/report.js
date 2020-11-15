$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_008_ChangePassword.feature");
formatter.feature({
  "name": "Password segment on Homepage should be editable",
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
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC1"
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
  "name": "Re-enter new password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password()"
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
  "name": "Verify the message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar--error\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-2.local\u0027, ip: \u00272601:156:81:ff0:0:0:0:dcd0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_252\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/1z/6vsyt_3d5dg...}, goog:chromeOptions: {debuggerAddress: localhost:63831}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d0de5a9677918acc7f8b07cc2ac7d38e\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027Toastify__progress-bar Toastify__progress-bar--animated Toastify__progress-bar--error\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\n\tat gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_message(US_008_PasswordChange_StepDef.java:81)\n\tat ✽.Verify the message(file:///Users/hasanimanli/IdeaProjects/gmi_bank_app/src/test/resources/features/US_008_ChangePassword.feature:16)\n",
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
  "name": "Enter new password with lowercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_with_lowercase()"
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
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC3"
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
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC4"
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
  "name": "Re-enter new password with uppercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_with_uppercase()"
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
  "name": "Verify the password with uppercase strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_with_uppercase_strength_color()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US8_005 Without at least 1 Uppercase char see the level  chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC5"
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
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC6"
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
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ChangePassword"
    },
    {
      "name": "@TC7"
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
});
formatter.result({
  "status": "passed"
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
});
formatter.result({
  "status": "passed"
});
});