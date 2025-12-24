Feature: Live Schedule Page

  Scenario: Ensure Live Schedule page renders
    Given I open the "ops/live-schedule" page
    Then I see the "ops/live-schedule" page
    And I see the "SIDEBAR" on the "ops/live-schedule" page
    And I see the "TEXT_TABS" on the "ops/live-schedule" page
    And I see the "LIVE_SCHEDULE_TABLE" on the "ops/live-schedule" page
