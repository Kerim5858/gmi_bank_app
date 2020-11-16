@User_story_010
Feature: Address


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

  @TC_01_Address
  Scenario:negative
    Given user click address textbox
    And user leave clear textbox
    Then user click save button
    Then verify error message

  @TC_01_Address
  Scenario:positive
    Given user click address textbox
    And user enter valid data for address
    Then user click save button
    Then should not see any message for address

  @TC_01_City
  Scenario:negative
    Given user click address textbox
    And user leave clear textbox
    Then user click save button
    Then verify error message for city

  @TC_01_City
  Scenario:positive
    Given user click address textbox
    And user enter valid data for city
    Then user click save button
    Then should not see any message for city

  @TC_01_Country
  Scenario:negative
    Given user click address textbox
    And user leave clear textbox for country
    Then user click save button
    Then verify error message for country

  @TC_01_State
  Scenario:negative
    Given user click address textbox
    And user leave clear textbox for state
    Then user click save button
    Then verify error message for state

  @TC_01_State
  Scenario:positive
    Given user click address textbox
    And user enter valid data for state
    Then user click save button

