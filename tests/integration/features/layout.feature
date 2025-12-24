Feature: Layout Navigation Links

  Scenario: Navigate to Previous Handoff page
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    Then I use the "PREVIOUS_HANDOFF_LINK" button on the "layout" page
    Then I see the "ddds/handoff/previous" page

  Scenario: Navigate to Current Handoff page
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    Then I use the "CURRENT_HANDOFF_LINK" button on the "layout" page
    Then I see the "ddds/handoff/current" page

  Scenario: Navigate to Reports page
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    Then I use the "REPORTS_LINK" button on the "layout" page
    Then I see the "ddds/reports" page

  Scenario: Navigate to HuddleBoard KPI page using SIDEBAR
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    Then I use the "HUDDLE_BOARD_LINK" button on the "layout" page
    Then I see the "ddds/huddle-board/kpi" page

  Scenario: Navigate to HuddleBoard KPI page using HUDDLE BOARD NAV
    Given I open the "ddds/huddle-board/recap" page
    And I see the "HUDDLE_BOARD_NAV" on the "ddds/huddle-board/recap" page
    Then I use the "KPI_LINK" button on the "ddds/huddle-board/recap" page
    Then I see the "ddds/huddle-board/kpi" page

  Scenario: Navigate to HuddleBoard Recap page using HUDDLE BOARD NAV
    Given I open the "ddds/huddle-board/kpi" page
    And I see the "HUDDLE_BOARD_NAV" on the "ddds/huddle-board/kpi" page
    Then I use the "RECAP_LINK" button on the "ddds/huddle-board/kpi" page
    Then I see the "ddds/huddle-board/recap" page

  Scenario: Navigate to HuddleBoard Action Log page using HUDDLE BOARD NAV
    Given I open the "ddds/huddle-board/kpi" page
    And I see the "HUDDLE_BOARD_NAV" on the "ddds/huddle-board/kpi" page
    Then I use the "ACTION_LOG_LINK" button on the "ddds/huddle-board/kpi" page
    Then I see the "ddds/huddle-board/action-log" page

  Scenario: Navigate to Defect Log page
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    Then I use the "DEFECT_LOG_LINK" button on the "layout" page
    Then I see the "ddh/defect-log" page

  Scenario: Navigate to Live Schedule page
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    And I use the "SCHEDULE_DROPDOWN" button on the "layout" page
    Then I use the "LIVE_SCHEDULE_LINK" button on the "layout" page
    Then I see the "ops/live-schedule" page

  Scenario: Navigate to Bin/Raw Attributes page
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    And I use the "SCHEDULE_DROPDOWN" button on the "layout" page
    Then I use the "RAW_ATTRIBUTES_LINK" button on the "layout" page
    Then I see the "ops/raw-attributes" page

  Scenario: Navigate to Production Schedule page
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    And I use the "SCHEDULE_DROPDOWN" button on the "layout" page
    Then I use the "PRODUCTION_SCHEDULE_LINK" button on the "layout" page
    Then I see the "ops/production-schedule" page

  Scenario: Navigate to Centerline Overview page
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    And I use the "CENTERLINE_DROPDOWN" button on the "layout" page
    Then I use the "OVERVIEW_LINK" button on the "layout" page
    Then I see the "ops/overview" page

  Scenario: Navigate to Deviation History page
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    And I use the "CENTERLINE_DROPDOWN" button on the "layout" page
    Then I use the "DEVIATIONS_LINK" button on the "layout" page
    Then I see the "ops/deviation/history" page

  Scenario: Navigate to Products page
    Given I open the "settings" page
    And I see the "SIDEBAR" on the "layout" page
    And I use the "CENTERLINE_DROPDOWN" button on the "layout" page
    Then I use the "RECIPE_CAT_LINK" button on the "layout" page
    Then I see the "ops/products" page

  Scenario: Navigate to Settings page
    Given I open the "ddds/handoff/previous" page
    And I see the "SIDEBAR" on the "layout" page
    Then I use the "SETTINGS_LINK" button on the "layout" page
    Then I see the "settings" page
