@gmibank_invalid_credentials
Feature: Invalid Register

    Background: Homepage
        Given user is in the Gmibank Page
        And user click User icon
        And user click User register

    @gmibank_invalid_ssn
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except SSN textbox
        Then verify get error message1"translation-not-found[Your SSN is required]"

    @gmibank_invalid_firstname
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except name textbox
        Then verify get error message2 "Your First Name is required."

    @gmibank_invalid_lastname
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except lastname textbox
        Then verify get error message3 "Your Last Name is required."

    @gmibank_invalid_address
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except address textbox
        Then verify get error message4 "Your address is required."

    @gmibank_invalid_phone
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except phone textbox
        Then verify get error message5 "Your phone is required."

    @gmibank_invalid_username
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except username textbox
        Then verify get error message6 "Your username is required."

    @gmibank_invalid_email
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except email textbox
        Then verify get error message7 "Your email is required."

    @gmibank_invalid_password
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except password textbox
        Then verify get error message8 "The password and its confirmation do not match!"

    @gmibank_invalid_confirmation_password
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except confirmation password textbox
        Then verify get error message9 "Your confirmation password is required."

    @gmibank_invalid_SSN_number2
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except SSN number2 textbox
        Then verify get error message10 "translation-not-found[Your SSN is required]"

    @gmibank_invalid_SSN_number3
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except SSN number3 textbox
        Then verify get error message11 "translation-not-found[Your SSN is required]"

    @gmibank_invalid_SSN_number4
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except SSN number4 textbox
        Then verify get error message12 "translation-not-found[Your SSN is required]"

    @gmibank_invalid_phone2
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except phone2 textbox
        Then verify get error message13 "Your mobile phone number is invalid"

    @gmibank_invalid_phone3
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except phone3 textbox
        Then verify get error message14 "Your phone is required"

    @gmibank_invalid_phone4
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except phone4 textbox
        Then verify get error message15 "Your email is required"

    @gmibank_invalid_email2
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except email2 textbox
        Then verify get error message16 "This field is invalid"

    @gmibank_invalid_email3
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except email3 textbox
        Then verify get error message17 "Your email is required"

    @gmibank_invalid_email4
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except email4 textbox
        Then verify get error message18 "Your email is required"

    @gmibank_invalid_email5
    Scenario: User doesn't register with invalid credentials
        Given user fill all the fields except email5 textbox
        Then verify get error message19 "Your email is required"