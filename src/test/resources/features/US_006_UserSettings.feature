@User_story_006
Feature: Usersettings
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
  Scenario:positive1

    Given user clicks on First Name Box
    And user enters valid Name
    And user click save button1
    Then should see Setting saved! message1

  @TC_01_Lastname
  Scenario:positive2
    Given user clicks on Last Name Box
    And user enters valid Last Name
    And user click save button2
    Then should see pop up Settings Saved text2

  @TC_01_Email
  Scenario:positive3
    Given user clicks on Email Box
    And user enters valid Email
    And user clicks save button3
    Then should see pop up Settings Saved text3

  @TC_01_Language
  Scenario:positive4
    Given user clicks on Dropdown
    And user sees two options available and select one
    Then user clicks on save button4 and sees pop up text4