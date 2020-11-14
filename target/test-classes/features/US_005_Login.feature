@gmiLogin_US_005
Feature: gmiBank Login
  Background: TC_005 gmiBank login Test
  Scenario: Go to login page negativePage
    Given user is on the gmiBank page
    And Click on the login
    And Click on the sign in


  @gmiBankLoginTC_003
  Scenario: Negative  username test
    And User should be invalid username
    And User should be valid password
    And User click sing in button
    Then Then i should see the error message


  @gmiBankLoginTC_004
  Scenario: Negative password test
    And User should be valid username
    And User should be invalid password
    And User click sing in button
    Then Then I should see the error message1



  @gmiBankTC_005
  Scenario: Negative username and password test
    And User should be invalid username
    And User should be invalid password
    And User click sing in button
    Then Then I should see the error message2


  @gmiBankTC_006
  Scenario: Forget password test
    And Click on the Did you forget your password?
    And provide email to checkbox
    And Click on the Reset password
    Then I should see the message reset your password


  @gmiBankLoginTC_007
  Scenario: New Registration
    Given user is on the gmiBank page
    And Click on the login
    And Click on the sign in
    And Click on the You don't have an account yet? Register a new account
    Then User should be see Registration

