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
  "status": "passed"
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