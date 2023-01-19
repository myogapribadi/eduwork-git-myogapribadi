Feature: Search feature

    As a guest user
    I want to search free online banking
    so that I can see free online banking

    Scenario: Search Feature
        Given I visit webappsecurity
        When I fill free online banking
        And I click Enter
        Then I should see free online banking