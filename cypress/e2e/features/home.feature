Feature: Home Page

    Scenario: Shop Now redirects to correct page
        Given the user visits the home page
        When the user clicks on the 'Shop Now' button on the banner
        Then the user should see the sonoline product

    Scenario: Add to cart functionality
        Given the user visits the home page
        When the user clicks on the 'Add to cart' on the products slider
        Then the product should be added to the minicart
