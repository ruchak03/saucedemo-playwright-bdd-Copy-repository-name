
Feature: SauceDemo shopping workflow

  Scenario: Login, add product to cart and complete checkout
    Given User launches application
    When User enters username "standard_user"
    And User enters password "secret_sauce"
    And User clicks Login button
    Then User should navigate to Products page
    When User adds Sauce Labs Backpack to cart
    And User opens the shopping cart
    Then The product should be displayed in the cart
    When User proceeds to checkout
    And User enters customer details "Rucha" "Test" "411001"
    And User continues to the order overview
    And User finishes the order
    Then Order confirmation should be displayed
