@User_story_001
Feature: Registration


  Background: Homepage
    Given user go to GMI home page
    And user click usericon
    And user click register


    @TC_US1_ssn
    Scenario Outline: valid ssn
      Given user click ssn textbox  and enter ssn "<ssn>"
      And user click name textbox and enter name "<name>"
      And user click lastname textbox and enter lastname "<lastname>"
      And user click address textbox and enter address "<address>"
      And user click mobile phone textbox and enter mobile phone number "<mobile-phone>"
      And user click username textbox and enter username "<username>"
      And user click email textbox and enter email "<email>"
      And user click new password textbox and enter password "<password>"
      And user click conf textbox and enter conf password "<conf-pword>"
      And user click register button
      Then user get success message "<message>"

      Examples:
        |ssn        |name|lastname|address      |mobile-phone|username|email              |password |conf-pword|
        |873-12-6867|Ayse|Demir   |12 column way|197-912-2314|AyseD   |aysede@gmail.com   |Ad192837?|Ad192837? |
        |000-12-1233|Veli|Isik    |2 Daisy St   |671-123-4556|VeliI   |veliisik@gmail.com |Vi192837?|Vi192837? |
        |456-00-9876|Ali |Kuz     |13 Row St    |765-321-9090|AliK    |alikuz@gmail.com   |Ak192837?|Ak192837? |
        |900-12-1233|Can |Yavuz   |22 Table Way |876-123-1212|CanY    |canyavuz@gmail.com |Cy192837?|Cy192837? |


      @TC_US1_name
      Scenario Outline: valid name
        Given user click ssn textbox  and enter ssn "<ssn>"
        And user click name textbox and enter name "<name>"
        And user click lastname textbox and enter lastname "<lastname>"
        And user click address textbox and enter address "<address>"
        And user click mobile phone textbox and enter mobile phone number "<mobile-phone>"
        And user click username textbox and enter username "<username>"
        And user click email textbox and enter email "<email>"
        And user click new password textbox and enter password "<password>"
        And user click conf textbox and enter conf password "<conf-pword>"
        And user click register button
        Then user get success message "<message>"

        Examples:
          |ssn        |name          |lastname|address      |mobile-phone|username|email            |password |conf-pword|
          |873-12-6154|a             |Demir   |12 column way|179-912-1982|AyseD   |aysedem@gmail.com|Ad192837?|Ad192837? |
          |234-12-3833|12            |Isik    |2 Daisy St   |681-123-4556|VeliI   |veliisi@gmail.com|Vi192837?|Vi192837? |
          |456-15-1876|Anthony Brand |Kuz     |13 Row St    |768-321-9090|AliK    |aliku@gmail.com  |Ak192837?|Ak192837? |
          |456-15-1876|A_Brand       |Kathy   |16 Row St    |756-321-9090|AliK    |abrak@gmail.com  |Ak192837?|Ak192837? |
          |873-12-6312|Jonathan      |Demir   |12 column way|179-912-1182|AyseD   |brand@gmail.com  |Ad192837?|Ad192837? |

  @TC_US1_name
  Scenario Outline: valid lastname
    Given user click ssn textbox  and enter ssn "<ssn>"
    And user click name textbox and enter name "<name>"
    And user click lastname textbox and enter lastname "<lastname>"
    And user click address textbox and enter address "<address>"
    And user click mobile phone textbox and enter mobile phone number "<mobile-phone>"
    And user click username textbox and enter username "<username>"
    And user click email textbox and enter email "<email>"
    And user click new password textbox and enter password "<password>"
    And user click conf textbox and enter conf password "<conf-pword>"
    And user click register button
    Then user get success message "<message>"

    Examples:
      |ssn        |name          |lastname |address      |mobile-phone|username|email             |password |conf-pword| message                                                          |
      |873-12-6154|a             |b        |12 column way|179-912-2020|AyseD   |aysedemd@gmail.com|Ad192837?|Ad192837? |Registration saved! Please check your email for confirmation alert|
      |671-12-3833|12            |1b3      |2 Daisy St   |681-123-4558|VeliI   |veliisii@gmail.com|Vi192837?|Vi192837? |Registration saved! Please check your email for confirmation alert|
      |456-58-1876|Anthony Brand |Clark    |13 Row St    |768-321-4545|AliK    |alikuu@gmail.com  |Ak192837?|Ak192837? |Registration saved! Please check your email for confirmation alert|
      |481-12-1567|A_Brand       |Clark Wan|22 Table Way |870-123-1215|CanY    |cyavuzz@gmail.com |Cy192837?|Cy192837? |Registration saved! Please check your email for confirmation alert|
      |396-12-6312|Jonathan      |Clark*Wan|12 column way|179-912-1188|AyseD   |brandd@gmail.com  |Ad192837?|Ad192837? |Registration saved! Please check your email for confirmation alert|

  @TC_US1_address
  Scenario Outline: valid address
    Given user click ssn textbox  and enter ssn "<ssn>"
    And user click name textbox and enter name "<name>"
    And user click lastname textbox and enter lastname "<lastname>"
    And user click address textbox and enter address "<address>"
    And user click mobile phone textbox and enter mobile phone number "<mobile-phone>"
    And user click username textbox and enter username "<username>"
    And user click email textbox and enter email "<email>"
    And user click new password textbox and enter password "<password>"
    And user click conf textbox and enter conf password "<conf-pword>"
    And user click register button
    Then user get success message "<message>"

    Examples:
      |ssn        |name|lastname|address                              |mobile-phone|username|email         |password |conf-pword| message                                                          |
      |371-12-6154|Bob |Donahue |53 Milky way Rd No:12 02121 Davis, CA|501-912-1982|BobD    |bobd@gmail.com|Ad192837?|Ad192837? |Registration saved! Please check your email for confirmation alert|


  @TC_US1_mobile-phone
  Scenario Outline: valid mobile-phone
    Given user click ssn textbox  and enter ssn "<ssn>"
    And user click name textbox and enter name "<name>"
    And user click lastname textbox and enter lastname "<lastname>"
    And user click address textbox and enter address "<address>"
    And user click mobile phone textbox and enter mobile phone number "<mobile-phone>"
    And user click username textbox and enter username "<username>"
    And user click email textbox and enter email "<email>"
    And user click new password textbox and enter password "<password>"
    And user click conf textbox and enter conf password "<conf-pword>"
    And user click register button
    Then user get success message "<message>"

    Examples:
      |ssn        |name|lastname|address                              |mobile-phone|username|email         |password |conf-pword| message                                                          |
      |371-12-6154|Bob |Donahue |53 Milky way Rd No:12 02121 Davis, CA|501-912-1982|BobD    |bobd@gmail.com|Ad192837?|Ad192837? |Registration saved! Please check your email for confirmation alert|


  @TC_US1_username
  Scenario Outline: valid username
    Given user click ssn textbox  and enter ssn "<ssn>"
    And user click name textbox and enter name "<name>"
    And user click lastname textbox and enter lastname "<lastname>"
    And user click address textbox and enter address "<address>"
    And user click mobile phone textbox and enter mobile phone number "<mobile-phone>"
    And user click username textbox and enter username "<username>"
    And user click email textbox and enter email "<email>"
    And user click new password textbox and enter password "<password>"
    And user click conf textbox and enter conf password "<conf-pword>"
    And user click register button
    Then user get success message "<message>"

    Examples:
      |ssn        |name|lastname|address                              |mobile-phone|username|email         |password |conf-pword| message                                                          |
      |371-12-6154|Bob |Donahue |53 Milky way Rd No:12 02121 Davis, CA|501-912-1982|BobD    |bobd@gmail.com|Ad192837?|Ad192837? |Registration saved! Please check your email for confirmation alert|


  @TC_US1_email
  Scenario Outline: valid email
    Given user click ssn textbox  and enter ssn "<ssn>"
    And user click name textbox and enter name "<name>"
    And user click lastname textbox and enter lastname "<lastname>"
    And user click address textbox and enter address "<address>"
    And user click mobile phone textbox and enter mobile phone number "<mobile-phone>"
    And user click username textbox and enter username "<username>"
    And user click email textbox and enter email "<email>"
    And user click new password textbox and enter password "<password>"
    And user click conf textbox and enter conf password "<conf-pword>"
    And user click register button
    Then user get success message "<message>"

    Examples:
      |ssn        |name|lastname|address                              |mobile-phone|username|email             |password |conf-pword| message                                                          |
      |365-12-6154|Bob |Donahue |53 Milky way Rd No:12 02121 Davis, CA|551-912-1982|BobD    |usertest@gmail.com|Ad192837?|Ad192837? |Registration saved! Please check your email for confirmation alert|
      |378-12-6154|Bob |Donahue |53 Milky way Rd No:12 02121 Davis, CA|561-912-1982|BobD    |a@gmail.com       |Ad192837?|Ad192837? |Registration saved! Please check your email for confirmation alert|
      |472-12-6153|Bob |Donahue |53 Milky way Rd No:12 02121 Davis, CA|581-912-1982|BobD    |11@gmail.com      |Ad192837?|Ad192837? |Registration saved! Please check your email for confirmation alert|