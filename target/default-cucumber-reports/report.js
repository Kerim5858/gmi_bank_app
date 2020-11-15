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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank_team06.step_definitions.US_008_PasswordChange_StepDef\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Password changed!\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-2.local\u0027, ip: \u00272601:156:81:ff0:0:0:0:dcd0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_252\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/1z/6vsyt_3d5dg...}, goog:chromeOptions: {debuggerAddress: localhost:62620}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 496ed2b2482836e4dec1028a662ddeff\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Password changed!\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\n\tat gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.\u003cinit\u003e(US_008_PasswordChange_StepDef.java:19)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to the account name",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_to_the_account_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_to_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Current password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_Current_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter old password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter new password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Re-enter new password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_message()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank_team06.step_definitions.US_008_PasswordChange_StepDef\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Password changed!\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-2.local\u0027, ip: \u00272601:156:81:ff0:0:0:0:dcd0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_252\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/1z/6vsyt_3d5dg...}, goog:chromeOptions: {debuggerAddress: localhost:62620}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 496ed2b2482836e4dec1028a662ddeff\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Password changed!\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\n\tat gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.\u003cinit\u003e(US_008_PasswordChange_StepDef.java:19)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter old password from tc1",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc1()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter new password with lowercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_with_lowercase()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Re-enter new password with lowercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_with_lowercase()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the password with lowercase strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_with_lowercase_strength_color()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank_team06.step_definitions.US_008_PasswordChange_StepDef\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Password changed!\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-2.local\u0027, ip: \u00272601:156:81:ff0:0:0:0:dcd0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_252\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/1z/6vsyt_3d5dg...}, goog:chromeOptions: {debuggerAddress: localhost:62620}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 496ed2b2482836e4dec1028a662ddeff\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Password changed!\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\n\tat gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.\u003cinit\u003e(US_008_PasswordChange_StepDef.java:19)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter old password from tc2",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc2()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter new password without lowercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_without_lowercase()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Re-enter new password without lowercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_without_lowercase()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the password without lowercase strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_without_lowercase_strength_color()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank_team06.step_definitions.US_008_PasswordChange_StepDef\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Password changed!\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-2.local\u0027, ip: \u00272601:156:81:ff0:0:0:0:dcd0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_252\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/1z/6vsyt_3d5dg...}, goog:chromeOptions: {debuggerAddress: localhost:62620}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 496ed2b2482836e4dec1028a662ddeff\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Password changed!\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\n\tat gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.\u003cinit\u003e(US_008_PasswordChange_StepDef.java:19)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter old password from tc3",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc3()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter new password with uppercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_with_uppercase()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Re-enter new password with uppercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_with_uppercase()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the password with uppercase strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_with_uppercase_strength_color()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank_team06.step_definitions.US_008_PasswordChange_StepDef\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Password changed!\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-2.local\u0027, ip: \u00272601:156:81:ff0:0:0:0:dcd0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_252\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/1z/6vsyt_3d5dg...}, goog:chromeOptions: {debuggerAddress: localhost:62620}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 496ed2b2482836e4dec1028a662ddeff\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Password changed!\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\n\tat gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.\u003cinit\u003e(US_008_PasswordChange_StepDef.java:19)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter old password from tc4",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc4()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter new password without uppercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_without_uppercase()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Re-enter new password without uppercase",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_without_uppercase()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the password without uppercase strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_without_uppercase_strength_color()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class gmibank_team06.step_definitions.US_008_PasswordChange_StepDef\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[.\u003d\u0027Password changed!\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Pro-2.local\u0027, ip: \u00272601:156:81:ff0:0:0:0:dcd0%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_252\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/1z/6vsyt_3d5dg...}, goog:chromeOptions: {debuggerAddress: localhost:62620}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 496ed2b2482836e4dec1028a662ddeff\n*** Element info: {Using\u003dxpath, value\u003d//*[.\u003d\u0027Password changed!\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\n\tat gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.\u003cinit\u003e(US_008_PasswordChange_StepDef.java:19)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter old password from tc5",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_old_password_from_tc5()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter new password with digit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.enter_new_password_with_digit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_New_password_confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Re-enter new password with digit",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.re_enter_new_password_with_digit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click save",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.click_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify the password with digit strength color",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_008_PasswordChange_StepDef.verify_the_password_with_digit_strength_color()"
});
formatter.result({
  "status": "skipped"
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
