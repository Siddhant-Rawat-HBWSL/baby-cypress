Feature: Cart Page

   Scenario: Frequently Bought Together
        Given the user adds a product to the cart
        Then the user should see the Frequently Bought Together products

    Scenario: Cart products
        Given the user adds a product to the cart
        Then the user should see the added products with the correct quantity & price

    Scenario: Delete product
        Given the user adds a product to the cart
        When the user clicks on the delete icon
        Then the product should be removed from the cart

    Scenario: Decrease product quantity
        Given the user adds a product to the cart
        When the user clicks on the minus icon
        Then the quantity of the product should be decreased by one

    Scenario: Increase product quantity
        Given the user adds a product to the cart
        When the user clicks on the plus icon
        Then the quantity of the product should be increased by one

    Scenario: Discount Coupon
        Given the user adds a product to the cart
        When the user applies a discount code
        Then the price of the product should be decreased accordingly
