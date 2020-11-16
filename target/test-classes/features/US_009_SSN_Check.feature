@User_story_009
Feature: SSN_Check


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

  @TC_01_009_SSN
  Scenario:SSN_valid
    Given user enter invalid SNN
    And click search button
    Then verify error message

  @TC_02_009_SSN
  Scenario:SSN_valid
    Given user enter valid SNN
    And click search button
    Then verify error message

  @TC_03_009_SSN
  Scenario:name
    Given user should verify name

  @TC_04_009_SSN
  Scenario:lastName
    Given user verify last_name

  @TC_009_SSN
  Scenario:email
    Given user verify email

  @TC_009_SSN
  Scenario:lastName
    Given user verify phone




