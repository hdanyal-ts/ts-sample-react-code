Feature: Defect Log Page

  Scenario: Ensure Defect Log page renders
    Given I open the "ddh/defect-log" page
    Then I see the "ddh/defect-log" page
    And I see the "SIDEBAR" on the "ddh/defect-log" page
    And I see the "SELECT_VIEW_TABS" on the "ddh/defect-log" page
    And I see the "CREATE_DEFECT_BUTTON" on the "ddh/defect-log" page
    And I see the "FILTER_BUTTON" on the "ddh/defect-log" page
    And I see the "SORT_BUTTON" on the "ddh/defect-log" page
    And I see the "KANBAN_VIEW" on the "ddh/defect-log" page
    And I see 4 different "KANBAN_HEADERS" on the "ddh/defect-log" page
    And I see the "KANBAN_ITEMS" on the "ddh/defect-log" page

  Scenario: Successfully toggle into defect log LIST view
    Given I open the "ddh/defect-log" page
    Then I see the "ddh/defect-log" page
    And I see the "SELECT_VIEW_TABS" on the "ddh/defect-log" page
    And I see the "KANBAN_VIEW" on the "ddh/defect-log" page
    And I do not see the "LIST_VIEW" on the "ddh/defect-log" page
    And I do not see the "ARCHIVE_VIEW" on the "ddh/defect-log" page

    # Toggle List View
    When I use the "LIST_VIEW_BUTTON" button on the "ddh/defect-log" page
    Then I see the "LIST_VIEW" on the "ddh/defect-log" page
    And I do not see the "KANBAN_VIEW" on the "ddh/defect-log" page
    And I do not see the "ARCHIVE_VIEW" on the "ddh/defect-log" page
    And I see 5 different "LIST_HEADERS" on the "ddh/defect-log" page

  Scenario: Successfully toggle into defect log ARCHIVED view
    Given I open the "ddh/defect-log" page
    Then I see the "ddh/defect-log" page
    And I see the "SELECT_VIEW_TABS" on the "ddh/defect-log" page
    And I see the "KANBAN_VIEW" on the "ddh/defect-log" page
    And I do not see the "LIST_VIEW" on the "ddh/defect-log" page
    And I do not see the "ARCHIVE_VIEW" on the "ddh/defect-log" page

    # Toggle Archive View
    When I use the "ARCHIVE_VIEW_BUTTON" button on the "ddh/defect-log" page
    Then I see the "ARCHIVE_VIEW" on the "ddh/defect-log" page
    And I do not see the "KANBAN_VIEW" on the "ddh/defect-log" page
    And I do not see the "LIST_VIEW" on the "ddh/defect-log" page
    And I see 5 different "LIST_HEADERS" on the "ddh/defect-log" page

    # Toggle Kanban View
    When I use the "KANBAN_VIEW_BUTTON" button on the "ddh/defect-log" page
    Then I see the "KANBAN_VIEW" on the "ddh/defect-log" page
    And I do not see the "LIST_VIEW" on the "ddh/defect-log" page
    And I do not see the "ARCHIVE_VIEW" on the "ddh/defect-log" page
