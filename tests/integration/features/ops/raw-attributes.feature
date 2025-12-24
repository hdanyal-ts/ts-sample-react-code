Feature: Raw Attributes Page

  Scenario: Ensure Raw Attributes page renders
    Given I open the "ops/raw-attributes" page
    Then I see the "ops/raw-attributes" page
    And I see the "SIDEBAR" on the "ops/raw-attributes" page
    And I see the "RAW_ATTRIBUTES_TABLE" on the "ops/raw-attributes" page
