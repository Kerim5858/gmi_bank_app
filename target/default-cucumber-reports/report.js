$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US_003_NewPassword.feature");
formatter.feature({
  "name": "New Password Creation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    }
  ]
});
formatter.scenario({
  "name": "TC_US3_001  New Password box shouldn\u0027t be empty,When it empty, User should get",
  "description": "  \"Your password is required.\"",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
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
  "name": "Click user icon",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_user_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click register",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the new password box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "leave the empty",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.leave_the_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the errorMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_errorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_002 The password must be at least 4 characters long, if it is less you should get a",
  "description": "  \"Your password is required to be at least 4 characters.\"",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Less_than-4"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send data less than 4  data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_data_less_than_data(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_003 User should not get any error message when entering at least 4 characters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Least_4_chars"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the least 4 digit  data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_least_digit_data(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the strength bar",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_strength_level()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_004 There should be at least 1 LOWERCASE char for stronger password and",
  "description": "  see the level chart change accordingly",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Least_lowercase"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the  least 1 LOWERCASE data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_least_LOWERCASE_data(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the with least 1 LOWERCASEstrength level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_with_least_LOWERCASEstrength_level(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_005 When doesn\u0027t include at least 1 LOWERCASE char for stronger password and",
  "description": "  see the level chart change accordingly",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@WithoutLowerCase"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the doesn\u0027t include at least 1 LOWERCASE data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_doesn_t_include_at_least_LOWERCASE_data(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the doesn\u0027t include at least 1 LOWERCASE strength level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_doesn_t_include_at_least_LOWERCASE_strength_level(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_006 There should be at least 1  UPPERCASE char and see the level  chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Least_Uppercase"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the least 1  UPPERCASE data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_least_UPPERCASE_data(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the with least 1  UPPERCASE strength level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_with_least_UPPERCASE_strength_level(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_007 When doesn\u0027t include at least 1  UPPERCASE char for stronger password and",
  "description": "  see the level chart change accordingly",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@WithoutupperCase"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the doesn\u0027t include at least 1  UPPERCASE data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_doesn_t_include_at_least_UPPERCASE_data(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the doesn\u0027t include at least 1  UPPERCASEstrength level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_doesn_t_include_at_least_UPPERCASEstrength_level(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_008 There should be at least 1 DIGIT and see the level  chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Least_Digit"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the least 1 DIGIT  data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_least_DIGIT_data(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the least 1 DIGIT strength level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_least_DIGIT_strength_level(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_009  When doesn\u0027t include at least 1 DIGIT  char for stronger password and",
  "description": "  see the level chart change accordingly",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@withoutDigit"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the doesn\u0027t include at least 1 DIGIT",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_doesn_t_include_at_least_DIGIT(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the doesn\u0027t include at least 1 DIGITstrength level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_doesn_t_include_at_least_DIGITstrength_level(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_010  There should be at least 1 SPECIAL char and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@LeastSpecial"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the least 1 SPECIAL data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_least_SPECIAL_data(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the least 1 SPECIAL strength level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_least_SPECIAL_strength_level(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_011 When doesn\u0027t include at least 1 SPECIAL char for stronger password and",
  "description": "  see the level chart change accordingly",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@WithoutSpecial"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the doesn\u0027t include at least 1 SPECIALdata",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_doesn_t_include_at_least_SPECIALdata(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the doesn\u0027t include at least 1 SPECIAL strength level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_doesn_t_include_at_least_SPECIAL_strength_level(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_012  There should be at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Least_7_chars"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the  at least 7 chars data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_at_least_chars_data(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the at least 7 chars strength level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_at_least_chars_strength_level(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_013\tCreate a very strong password when using more than one of each of the uppercase, lowercase,",
  "description": "  digit or special characters",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Stronge_password"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the a very strong password data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_a_very_strong_password_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the a very strong password strength level",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_a_very_strong_password_strength_level()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_014 Box Of New Password Confirmation  shouldn\u0027t be empty,When it empty, User should get",
  "description": "  \"Your password is required.\"",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@NewPasswConfirmton"
    }
  ]
});
formatter.step({
  "name": "click the new password CONFIRMATION box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_CONFIRMATION_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "leave the empty confirm new password box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.leave_the_empty_confirm_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the empty confirm error messages",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_empty_confirm_error_messages()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_015  The box of new password confirmation must be at least 4 characters long,",
  "description": "  if it is less you should get a \"Your confirmation password is required to be at least 4 characters.\"",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Least_4_chars_newConfBox"
    }
  ]
});
formatter.step({
  "name": "click the new password CONFIRMATION box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_CONFIRMATION_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the data less then 4",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_data_less_then(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the less then 4 error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_less_then_error_message(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_016\tWhen New Password and New Password Confirmation  don\u0027t match the user should get the",
  "description": "  \"The password and its confirmation do not match!\"",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Doent_Match"
    }
  ]
});
formatter.step({
  "name": "click the new password CONFIRMATION box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_CONFIRMATION_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the no different  data from new password",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_no_different_data_from_new_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the no different  data  error message",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verify_the_no_different_data_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_017\tNew Password and New Password Confirmation should match and User shouldn\u0027t get any error message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Password_match"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the new data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_new_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the new password confirmation box",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_confirmation_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the same data data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_same_data_data()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC_US3_018\tUser must be able to enter a maximum of 50 characters, if it be more than 50 characters it will accept first 50 characters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US_003_NewPassword"
    },
    {
      "name": "@Very_long_data"
    }
  ]
});
formatter.step({
  "name": "click the new password box",
  "keyword": "Given "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.click_the_new_password_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send the very long more then 50 chars data",
  "keyword": "And "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.send_the_very_long_more_then_chars_data(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verfy the result long more then 50 chars",
  "keyword": "Then "
});
formatter.match({
  "location": "gmibank_team06.step_definitions.US_003_NewPassword_StepDef.verfy_the_result_long_more_then_chars(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
});