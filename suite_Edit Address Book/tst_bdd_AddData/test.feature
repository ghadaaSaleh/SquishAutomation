# This is a sample .feature file
# Squish feature files use the Gherkin language for describing features, a short example
# is given below. You can find a more extensive introduction to the Gherkin format at
# https://cucumber.io/docs/gherkin/reference/
Feature: A brief yet descriptive text of what is desired

    Some textual description of the business value of this feature goes
    here. The text is free-form.

    The description can span multiple paragraphs.

    Scenario: Add Data

        Given step add
        When step edit
 		    | forname   | surname  | email        | phone  |
            | John      | Smith    | john@m.com   | 23424 |
            | Alice     | Thomson  | alice@m.com  | 234234 |
            | Ghada     | Ahmed  | gh@m.com  | 243234 |
         And click cancel
         And verify columns

    Scenario: This is a second sample scenario

        ...
