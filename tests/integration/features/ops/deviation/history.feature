Feature: Deviation History Page

  Scenario: Ensure Deviation History page renders
    Given I open the "ops/deviation/history" page
    Then I see the "ops/deviation/history" page
    And I see the "SIDEBAR" on the "ops/deviation/history" page
    And I see the "DEVIATION_HISTORY_TABLE" on the "ops/deviation/history" page
