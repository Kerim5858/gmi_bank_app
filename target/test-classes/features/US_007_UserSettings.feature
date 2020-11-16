@User_story_007
Feature: Usersettings Negative
  Background: user go to usersettings
  @user_home_page
  Scenario: User settings should be aditable on homepage
    Given user go to GMI userSettings page
    And user enters a valid UspUsername
    And user enters a valid UspPassword
    And user clicks on  Sign in button
    And user clicks on username
    Then clicks on userinfo

  @TC_01_Firstname
  Scenario:negative1
    Given user clicks on First Name box
    And user user leaves First Name box empty
    Then verify First name is required message


  @TC_01_Lastname
  Scenario:negative2
    Given user clicks on Last Name box
    And user user leaves Last Name box empty
    Then verify "Your last name is required." message


  @TC_01_Email
  Scenario:negative3
    Given user clicks on Email box
    And user user leaves Email box empty
    Then verify "Your email is required." message

  @TC_01_Email
  Scenario:negative4
    Given user clicks on Email Box
    And user enters email without @ sign
    Then verify "This field is invalid" message

  @TC_01_Email
  Scenario:negative5
    Given user clicks on Email Box
    And user enters email without .com
    Then verify "This field is invalid" message
