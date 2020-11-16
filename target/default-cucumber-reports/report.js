$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_010_Address.feature");
formatter.feature({
  "name": "Address",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@User_story_010"
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
      "name": "@User_story_010"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"entity-menu\"]/a/span\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5RBE1CE\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Anulur\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59760}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 85a394d14b6e028509b7908c324239b7\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"entity-menu\"]/a/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_my_operation(US_010_Address_StepDef.java:45)\r\n\tat ✽.user click my operation(file:///C:/Users/Anulur/IdeaProjects/mytestNGframework/gmi_bank_app/src/test/resources/features/US_010_Address.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click manage Customer",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_manage_Customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click Create a new Customer button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_Create_a_new_Customer_button()"
});
formatter.result({
  "status": "skipped"
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
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_Address"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tp\\-customer\\-address\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5RBE1CE\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Anulur\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59760}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 85a394d14b6e028509b7908c324239b7\n*** Element info: {Using\u003did, value\u003dtp-customer-address}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox(US_010_Address_StepDef.java:60)\r\n\tat ✽.user click address textbox(file:///C:/Users/Anulur/IdeaProjects/mytestNGframework/gmi_bank_app/src/test/resources/features/US_010_Address.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user leave clear textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_leave_clear_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message()"
});
formatter.result({
  "status": "skipped"
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
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_Address"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tp\\-customer\\-address\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5RBE1CE\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Anulur\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59760}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 85a394d14b6e028509b7908c324239b7\n*** Element info: {Using\u003did, value\u003dtp-customer-address}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox(US_010_Address_StepDef.java:60)\r\n\tat ✽.user click address textbox(file:///C:/Users/Anulur/IdeaProjects/mytestNGframework/gmi_bank_app/src/test/resources/features/US_010_Address.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter valid data for address",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_enter_valid_data_for_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "should not see any message for address",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.should_not_see_any_message_for_address()"
});
formatter.result({
  "status": "skipped"
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
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_City"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tp\\-customer\\-address\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5RBE1CE\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Anulur\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59760}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 85a394d14b6e028509b7908c324239b7\n*** Element info: {Using\u003did, value\u003dtp-customer-address}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox(US_010_Address_StepDef.java:60)\r\n\tat ✽.user click address textbox(file:///C:/Users/Anulur/IdeaProjects/mytestNGframework/gmi_bank_app/src/test/resources/features/US_010_Address.feature:32)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user leave clear textbox",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_leave_clear_textbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify error message for city",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message_for_city()"
});
formatter.result({
  "status": "skipped"
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
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_City"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tp\\-customer\\-address\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5RBE1CE\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Anulur\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59760}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 85a394d14b6e028509b7908c324239b7\n*** Element info: {Using\u003did, value\u003dtp-customer-address}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox(US_010_Address_StepDef.java:60)\r\n\tat ✽.user click address textbox(file:///C:/Users/Anulur/IdeaProjects/mytestNGframework/gmi_bank_app/src/test/resources/features/US_010_Address.feature:39)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter valid data for city",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_enter_valid_data_for_city()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "should not see any message for city",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.should_not_see_any_message_for_city()"
});
formatter.result({
  "status": "skipped"
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
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_Country"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tp\\-customer\\-address\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5RBE1CE\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Anulur\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59760}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 85a394d14b6e028509b7908c324239b7\n*** Element info: {Using\u003did, value\u003dtp-customer-address}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox(US_010_Address_StepDef.java:60)\r\n\tat ✽.user click address textbox(file:///C:/Users/Anulur/IdeaProjects/mytestNGframework/gmi_bank_app/src/test/resources/features/US_010_Address.feature:46)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user leave clear textbox for country",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_leave_clear_textbox_for_country()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify error message for country",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message_for_country()"
});
formatter.result({
  "status": "skipped"
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
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_State"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tp\\-customer\\-address\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5RBE1CE\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Anulur\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59760}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 85a394d14b6e028509b7908c324239b7\n*** Element info: {Using\u003did, value\u003dtp-customer-address}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox(US_010_Address_StepDef.java:60)\r\n\tat ✽.user click address textbox(file:///C:/Users/Anulur/IdeaProjects/mytestNGframework/gmi_bank_app/src/test/resources/features/US_010_Address.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user leave clear textbox for state",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_leave_clear_textbox_for_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify error message for state",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.verify_error_message_for_state()"
});
formatter.result({
  "status": "skipped"
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
      "name": "@User_story_010"
    },
    {
      "name": "@TC_01_State"
    }
  ]
});
formatter.step({
  "name": "user click address textbox",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tp\\-customer\\-address\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-5RBE1CE\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Anulur\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59760}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 85a394d14b6e028509b7908c324239b7\n*** Element info: {Using\u003did, value\u003dtp-customer-address}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_address_textbox(US_010_Address_StepDef.java:60)\r\n\tat ✽.user click address textbox(file:///C:/Users/Anulur/IdeaProjects/mytestNGframework/gmi_bank_app/src/test/resources/features/US_010_Address.feature:60)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter valid data for state",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_enter_valid_data_for_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_010_Address_StepDef.user_click_save_button()"
});
formatter.result({
  "status": "skipped"
});
});