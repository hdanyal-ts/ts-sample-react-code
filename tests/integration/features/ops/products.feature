Feature: Products SKU Page

  Scenario: Ensure Products SKU page renders
    Given I open the "ops/products" page
    Then I see the "ops/products" page
    And I see the "SIDEBAR" on the "ops/products" page
    And I see the "PRODUCTS_TABLE" on the "ops/products" page