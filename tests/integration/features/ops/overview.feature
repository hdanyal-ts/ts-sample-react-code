Feature: Centerline Overview Page

  Scenario: Ensure Centerline Overview page renders
    Given I open the "ops/overview" page
    Then I see the "ops/overview" page
    And I see the "SIDEBAR" on the "ops/overview" page
    And I see the "DEVIATION_HISTORY_BUTTON" on the "ops/overview" page
    And I see the "POSITION_TABS" on the "ops/overview" page
    And I see the "TEXT_TABS" on the "ops/overview" page
    And I see the "CENTERLINE_TABLE" on the "ops/overview" page

  Scenario: Successfully redirect to deviation history
    Given I open the "ops/overview" page
    Then I see the "ops/overview" page
    And I see the "DEVIATION_HISTORY_BUTTON" on the "ops/overview" page
    And I use the "DEVIATION_HISTORY_BUTTON" button on the "ops/overview" page
    Then I pause for 200ms
    And I see the "ops/deviation/history" page
