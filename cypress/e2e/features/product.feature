Feature: Product Page

    Scenario: Add to cart
        Given the user visits a product page
        When the user increases the product count & adds the product to cart
        Then the product should be added to the minicart with that quantity

