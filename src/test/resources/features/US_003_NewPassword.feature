@US_003_NewPassword
Feature: New Password Creation

  Scenario: TC_US3_001  New Password box shouldn't be empty,When it empty, User should get
  "Your password is required."
    Given user go to GMI home page
    And Click user icon
    And Click register
    And click the new password box
    And leave the empty
    Then verify the errorMessage
  @Less_than-4
  Scenario: TC_US3_002 The password must be at least 4 characters long, if it is less you should get a
  "Your password is required to be at least 4 characters."
    Given click the new password box
    And send data less than 4  data
    Then verify the message
  @Least_4_chars
  Scenario: TC_US3_003 User should not get any error message when entering at least 4 characters
    Given click the new password box
    And send the least 4 digit  data
    Then verify the strength bar
  @Least_lowercase
  Scenario: TC_US3_004 There should be at least 1 LOWERCASE char for stronger password and
  see the level chart change accordingly
    Given click the new password box
    And send the  least 1 LOWERCASE data
    Then verify the with least 1 LOWERCASEstrength level
  @WithoutLowerCase
  Scenario: TC_US3_005 When doesn't include at least 1 LOWERCASE char for stronger password and
  see the level chart change accordingly
    Given click the new password box
    And send the doesn't include at least 1 LOWERCASE data
    Then verify the doesn't include at least 1 LOWERCASE strength level
  @Least_Uppercase
  Scenario: TC_US3_006 There should be at least 1  UPPERCASE char and see the level  chart change accordingly
    Given click the new password box
    And send the least 1  UPPERCASE data
    Then verify the with least 1  UPPERCASE strength level
  @WithoutupperCase
  Scenario: TC_US3_007 When doesn't include at least 1  UPPERCASE char for stronger password and
  see the level chart change accordingly
    Given click the new password box
    And send the doesn't include at least 1  UPPERCASE data
    Then verify the doesn't include at least 1  UPPERCASEstrength level
  @Least_Digit
  Scenario: TC_US3_008 There should be at least 1 DIGIT and see the level  chart change accordingly
    Given click the new password box
    And send the least 1 DIGIT  data
    Then verify the least 1 DIGIT strength level
  @withoutDigit
  Scenario: TC_US3_009  When doesn't include at least 1 DIGIT  char for stronger password and
  see the level chart change accordingly
    Given click the new password box
    And send the doesn't include at least 1 DIGIT
    Then verify the doesn't include at least 1 DIGITstrength level
  @LeastSpecial
  Scenario: TC_US3_010  There should be at least 1 SPECIAL char and see the level chart change accordingly
    Given click the new password box
    And send the least 1 SPECIAL data
    Then verify the least 1 SPECIAL strength level
  @WithoutSpecial
  Scenario: TC_US3_011 When doesn't include at least 1 SPECIAL char for stronger password and
  see the level chart change accordingly
    Given click the new password box
    And send the doesn't include at least 1 SPECIALdata
    Then verify the doesn't include at least 1 SPECIAL strength level
  @Least_7_chars
  Scenario: TC_US3_012  There should be at least 7 chars for a stronger password
    Given click the new password box
    And send the  at least 7 chars data
    Then verify the at least 7 chars strength level
  @Stronge_password
  Scenario: TC_US3_013	Create a very strong password when using more than one of each of the uppercase, lowercase,
  digit or special characters
    Given click the new password box
    And send the a very strong password data
    Then verify the a very strong password strength level
  @NewPasswConfirmton
  Scenario: TC_US3_014 Box Of New Password Confirmation  shouldn't be empty,When it empty, User should get
  "Your password is required."
    Given click the new password CONFIRMATION box
    And leave the empty confirm new password box
    Then verify the empty confirm error messages
  @Least_4_chars_newConfBox
  Scenario: TC_US3_015  The box of new password confirmation must be at least 4 characters long,
  if it is less you should get a "Your confirmation password is required to be at least 4 characters."
    Given click the new password CONFIRMATION box
    And send the data less then 4
    Then verify the less then 4 error message
  @Doent_Match
  Scenario: TC_US3_016	When New Password and New Password Confirmation  don't match the user should get the
  "The password and its confirmation do not match!"
    Given click the new password CONFIRMATION box
    And send the no different  data from new password
    Then verify the no different  data  error message
  @Password_match
  Scenario:TC_US3_017	New Password and New Password Confirmation should match and User shouldn't get any error message
    Given click the new password box
    And send the new data
    And click the new password confirmation box
    And send the same data data

  @Very_long_data
  Scenario:TC_US3_018	User must be able to enter a maximum of 50 characters, if it be more than 50 characters it will accept first 50 characters
    Given click the new password box
    And send the very long more then 50 chars data
    Then verfy the result long more then 50 chars
