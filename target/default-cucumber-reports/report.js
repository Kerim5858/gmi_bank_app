$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_009_SSN_Check.feature");
formatter.feature({
  "name": "SSN_Check",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@User_story_009"
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
      "name": "@User_story_009"
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
  "name": "SSN_valid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_009"
    },
    {
      "name": "@TC_01_009_SSN"
    }
  ]
});
formatter.step({
  "name": "user enter invalid SNN",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.user_enter_invalid_SNN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027invalid-feedback\u0027])[8]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-HJNV741T\u0027, ip: \u0027192.168.1.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\yavuz\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63415}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 76b39c1dfe17346c7ee80e46d0cf8696\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027invalid-feedback\u0027])[8]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\r\n\tat gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message(US_010_Address_StepDef.java:78)\r\n\tat ✽.verify error message(file:///C:/Users/yavuz/IdeaProjects/gmi_bank_app/src/test/resources/features/US_009_SSN_Check.feature:20)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "SSN_valid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_009"
    },
    {
      "name": "@TC_02_009_SSN"
    }
  ]
});
formatter.step({
  "name": "user enter valid SNN",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.user_enter_valid_SNN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click search button",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027invalid-feedback\u0027])[8]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-HJNV741T\u0027, ip: \u0027192.168.1.68\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\yavuz\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63415}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 76b39c1dfe17346c7ee80e46d0cf8696\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027invalid-feedback\u0027])[8]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\r\n\tat gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message(US_010_Address_StepDef.java:78)\r\n\tat ✽.verify error message(file:///C:/Users/yavuz/IdeaProjects/gmi_bank_app/src/test/resources/features/US_009_SSN_Check.feature:26)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_009"
    },
    {
      "name": "@TC_03_009_SSN"
    }
  ]
});
formatter.step({
  "name": "user should verify name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.user_should_verify_name()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.user_should_verify_name(US_09_SSN_CheckStepDef.java:33)\r\n\tat ✽.user should verify name(file:///C:/Users/yavuz/IdeaProjects/gmi_bank_app/src/test/resources/features/US_009_SSN_Check.feature:30)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "lastName",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_009"
    },
    {
      "name": "@TC_04_009_SSN"
    }
  ]
});
formatter.step({
  "name": "user verify last_name",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.user_verify_last_name()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.user_verify_last_name(US_09_SSN_CheckStepDef.java:38)\r\n\tat ✽.user verify last_name(file:///C:/Users/yavuz/IdeaProjects/gmi_bank_app/src/test/resources/features/US_009_SSN_Check.feature:34)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_009"
    },
    {
      "name": "@TC_009_SSN"
    }
  ]
});
formatter.step({
  "name": "user verify email",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.user_verify_email()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.user_verify_email(US_09_SSN_CheckStepDef.java:43)\r\n\tat ✽.user verify email(file:///C:/Users/yavuz/IdeaProjects/gmi_bank_app/src/test/resources/features/US_009_SSN_Check.feature:38)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Creation page",
  "description": "",
  "keyword": "Background"
});
formatter.scenario({
  "name": "lastName",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User_story_009"
    },
    {
      "name": "@TC_009_SSN"
    }
  ]
});
formatter.step({
  "name": "user verify phone",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.user_verify_phone()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat gmibank_team06.step_definitions.US_09_SSN_CheckStepDef.user_verify_phone(US_09_SSN_CheckStepDef.java:49)\r\n\tat ✽.user verify phone(file:///C:/Users/yavuz/IdeaProjects/gmi_bank_app/src/test/resources/features/US_009_SSN_Check.feature:42)\r\n",
  "status": "failed"
});
});