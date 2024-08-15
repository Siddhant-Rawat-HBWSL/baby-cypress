Feature: Checkout page
    
    Scenario: Place an order
        Given The user is on the checkout page
        When the user places an order
        Then they should see the order confirmation page
