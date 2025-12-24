Feature: Previous Handoff Page

  Scenario: Successfully redirect to previous handoff during active session
    Given I open the "timesheet" page
    Then I pause for 1000ms
    And I see the "ddds/handoff/previous" page

  Scenario: Ensure Previous Handoff page renders
    Given I open the "ddds/handoff/previous" page
    Then I see the "ddds/handoff/previous" page
    And I see the "SIDEBAR" on the "ddds/handoff/previous" page
    And I see the "POSITION_TABS" on the "ddds/handoff/previous" page
    And I see the "HANDOFF_HEADER" on the "ddds/handoff/previous" page
    And I see the "HANDOFF_VIEW_BUTTON" on the "ddds/handoff/previous" page
    And I see the "INFORMATION_SECTION" on the "ddds/handoff/previous" page
    And I see the "SUMMARY_SECTION" on the "ddds/handoff/previous" page

  Scenario: Toggle between detailed and summary Previous Handoff view
    Given I open the "ddds/handoff/previous" page
    And I see the "HANDOFF_HEADER" on the "ddds/handoff/previous" page
    And I see the "HANDOFF_VIEW_BUTTON" on the "ddds/handoff/previous" page
    And I see the "SUMMARY_SECTION" on the "ddds/handoff/previous" page
    And I do not see the "DETAIL_SECTION" on the "ddds/handoff/previous" page
    When I use the "HANDOFF_VIEW_BUTTON" button on the "ddds/handoff/previous" page
    And I see the "DETAIL_SECTION" on the "ddds/handoff/previous" page
    And I do not see the "SUMMARY_SECTION" on the "ddds/handoff/previous" page
