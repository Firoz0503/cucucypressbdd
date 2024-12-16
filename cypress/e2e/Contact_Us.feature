@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: Pre conditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission

        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message


    Scenario: Invalid Contact Us From Submission

        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission -- Using specific data

        And I type a first name "Azeem"
        And I type a last name "Uddin"
        And I type a specific email address "Azeem101@gmail.com"
        And I type a word "Welcome 145" and number 6788 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
    @smoke
    Scenario Outline: Validate contact us page

        And I type a first name <firstName> and last name '<lastName>'
        And I type a '<emailAddress>' and comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress       | comment                 | message                      |
            | firoz     | ahmed    | firoz123@gmail.com | Hello ?                 | Thank You for your Message!  |
            | Azeem     | Uddin    | azeem456@gmail.com | Welcome123 Hello123     | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson       | Do you create websites? | Error: Invalid email address |

