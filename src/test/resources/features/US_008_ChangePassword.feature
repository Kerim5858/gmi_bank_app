@ChangePassword
Feature: Password segment on Homepage should be editable

  @TC1
  Scenario: TC_US8_001	The old password should not be used
    Given Log in to the account
    And Click to the account name
    And Click to Password
    And Click Current password
    And Enter old password
    And Click New password
    And Enter new password
    And Click New password confirmation
    And Re-enter new password
    And Click save
    Then Verify the message

  @TC2
  Scenario: TC_US8_002 There should be at least 1 lowercase char for stronger password and
  see the level chart change accordingly
    Given Click Current password
    And Enter old password from tc1
    And Click New password
    And Enter new password with lowercase
    And Click New password confirmation
    And Re-enter new password with lowercase
    And Click save
    Then Verify the password with lowercase strength color

  @TC3
  Scenario: TC_US8_003 Without at least 1 lowercase char see the level chart change accordingly
    Given Click Current password
    And Enter old password from tc2
    And Click New password
    And Enter new password without lowercase
    And Click New password confirmation
    And Re-enter new password without lowercase
    And Click save
    Then Verify the password without lowercase strength color

  @TC4
  Scenario: TC_US8_004	There should be at least 1 Uppercase char and see the level  chart change accordingly
    Given Click Current password
    And Enter old password from tc3
    And Click New password
    And Enter new password with uppercase
    And Click New password confirmation
    And Re-enter new password with uppercase
    And Click save
    Then Verify the password with uppercase strength color

  @TC5
  Scenario: TC_US8_005 Without at least 1 Uppercase char see the level  chart change accordingly
    Given Click Current password
    And Enter old password from tc4
    And Click New password
    And Enter new password without uppercase
    And Click New password confirmation
    And Re-enter new password without uppercase
    And Click save
    Then Verify the password without uppercase strength color

  @TC6
  Scenario: TC_US8_006	There should be at least 1 digit  and see the level chart change accordingly
    Given Click Current password
    And Enter old password from tc5
    And Click New password
    And Enter new password with digit
    And Click New password confirmation
    And Re-enter new password with digit
    And Click save
    Then Verify the password with digit strength color

  @TC7
  Scenario: TC_US8_007	Without at least 1 digit see the level  chart change accordingly
    Given Click Current password
    And Enter old password from tc6
    And Click New password
    And Enter new password without digit
    And Click New password confirmation
    And Re-enter new password without digit
    And Click save
    Then Verify the password without digit strength color

  @TC8
  Scenario: TC_US8_008	There should be at least 1 special char and see the level bar change accordingly
    Given Click Current password
    And Enter old password tc7
    And Click New password
    And Enter new password with special char
    And Click New password confirmation
    And Re-enter new password with special char
    And Click save
    Then Verify the password with special char strength color

  @TC9
  Scenario: TC_US8_009	Without at least 1 special char see the level bar change accordingly
    Given Click Current password
    And Enter old password from tc8
    And Click New password
    And Enter new password without special char
    And Click New password confirmation
    And Re-enter new password without special char
    And Click save
    Then Verify the password without special char strength color

  @TC10
  Scenario: TC_US8_010 There should be at least 7 chars for a stronger password
    Given Click Current password
    And Enter old password from tc9
    And Click New password
    And Enter new password at least 7 chars
    And Click New password confirmation
    And Re-enter new password at least 7 chars
    And Click save
    Then Verify the password with at least 7 chars strength color

  @TC11
  Scenario: TC_US8_011	Less than 7 chars see the level bar change accordingly
    Given Click Current password
    And Enter old password from tc10
    And Click New password
    And Enter new password less than 7 digit
    And Click New password confirmation
    And Re-enter new password less than 7 digit
    And Click save
    Then Verify the password with less than 7 digit strength color

  @TC12
  Scenario: TC_US8_012	The new password should be confirmed
    Given Click Current password
    And Enter old password from tc12
    And Click New password
    And Enter new password as requested
    And Click New password confirmation
    And Re-enter new password as requested
    And Click save
    Then Verify the confirm message