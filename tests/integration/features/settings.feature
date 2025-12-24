Feature: Settings Page

  Scenario: Ensure Settings page renders
    Given I open the "settings" page
    Then I see the "settings" page
    And I see the "SIDEBAR" on the "settings" page
    And I see the "LOGOUT_BUTTON" on the "settings" page
    And I see the "NAME_FIELD" on the "settings" page
    And I see the "SUPERVISOR_FIELD" on the "settings" page
    And I see the "DATE_FIELD" on the "settings" page
    And I see the "SHIFT_FIELD" on the "settings" page
    And I see the "CREW_FIELD" on the "settings" page
    And I see the "POSITIONS_FIELD" on the "settings" page

  Scenario: Successfully end timesheet/logout on Settings page
    Given I open the "settings" page
    Then I see the "settings" page
    And I see the "LOGOUT_BUTTON" on the "settings" page
    When I use the "LOGOUT_BUTTON" button on the "settings" page
    Then I pause for 1000ms
    And I see the "timesheet" page

  Scenario: Ensure user is redirected to timesheet after logout
    Given I open the "settings" page
    Then I pause for 1000ms
    And I see the "timesheet" page
