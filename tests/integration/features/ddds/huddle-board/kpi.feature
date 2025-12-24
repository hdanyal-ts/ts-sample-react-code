Feature: Huddle Board KPI Page

  Scenario: Ensure KPI page renders
    Given I open the "ddds/huddle-board/kpi" page
    Then I see the "ddds/huddle-board/kpi" page
    And I see the "HUDDLE_BOARD_NAV" on the "ddds/huddle-board/kpi" page
    And I see the "KPI_BOARD" on the "ddds/huddle-board/kpi" page
    And I see 6 different "KPI_SECTION_REPORT" on the "ddds/huddle-board/kpi" page
    And I see 6 different "KPI_SECTION_HEADER" on the "ddds/huddle-board/kpi" page
    And I see 6 different "KPI_SECTION_CONTENT" on the "ddds/huddle-board/kpi" page
