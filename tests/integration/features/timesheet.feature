Feature: Timesheet Page

  Scenario: Redirect to timesheet page when no active timesheet
    Given I open the "settings" page
    And I pause for 1000ms
    Then I see the "timesheet" page

  Scenario: Ensure Timesheet page renders
    Given I open the "timesheet" page
    Then I see the "timesheet" page
    And I see the "TIMESHEET_HEADER" on the "timesheet" page
    And I see the "POSITION_DROPDOWN" on the "timesheet" page
    And I see the "CREATE_TIMESHEET_BUTTON" on the "timesheet" page

  Scenario: Ensure user cannot create timesheet without selecting position
    Given I open the "timesheet" page
    Then I see the "timesheet" page
    And I use the "CREATE_TIMESHEET_BUTTON" button on the "timesheet" page
    Then I pause for 200ms
    And I see the "timesheet" page

  Scenario: Successfully create a timesheet and redirect to previous handoff
    Given I open the "timesheet" page
    Then I see the "timesheet" page
    And I type "Cutting" into the "POSITION_DROPDOWN" input on "timesheet" page
    And I use the "CREATE_TIMESHEET_BUTTON" button on the "timesheet" page
    And I pause for 1000ms
    And I see the "ddds/handoff/previous" page