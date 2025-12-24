Feature: Production Schedule Page

  Scenario: Ensure Production Schedule page renders
    Given I open the "ops/production-schedule" page
    Then I see the "ops/production-schedule" page
    And I see the "SIDEBAR" on the "ops/production-schedule" page
    And I see the "PRODUCTION_SCHEDULE_TABLE" on the "ops/production-schedule" page