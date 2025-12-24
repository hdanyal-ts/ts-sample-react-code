Feature: Current Handoff Page

  Scenario: Ensure Current Handoff page renders
    Given I open the "ddds/handoff/current" page
    Then I see the "ddds/handoff/current" page
    And I see the "SIDEBAR" on the "ddds/handoff/current" page
    And I see the "POSITION_TABS" on the "ddds/handoff/current" page
