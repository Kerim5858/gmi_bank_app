@User_story_014
Feature: Date


  Background: Creation page
  Scenario: go to Create or edit a Customer
    Given user go to GMI home page
    And user click sig in button
    And user enter valid username
    And user enter valid password
    And user click sign in button
    And user click my operation
    And user click manage Customer
    Then user click Create a new Customer button

  @TC_014_Date1
  Scenario:negative
    Given user Select previous day
    And Click Save
    Then system should give error message

  @TC_014_Date
  Scenario:positive
    Given system should give Selected current date
    And Click Save
    Then verify current date and system date

  @TC_014_User
  Scenario: User
    Given user leave userTextBox blank
    And User gets error message
    And user click save button

  @TC_014_User
  Scenario: User_positive
    Then user select valid date
    And user click save button
    Then verify valid data

  @TC_014_Account
  Scenario: Account_negative
    Given user leave accountTextBox blank
    And user click save button
    Then User gets error message


  @TC_014_Account
  Scenario: User_positive
    Then user select valid date
    And user click save button
    Then verify valid data

  @TC_014_Zelle
  Scenario: Zelle_no_click
    And user doesn't click
    Then user verify radio button

  @TC_014_Account
  Scenario: Zelle_click
    Given user click Zelle button
    Then User verify radio button
