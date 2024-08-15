Feature: Category Page

    Scenario: Products grid
        Given the user visits a category page
        When the user selects a filter
        Then the products should be arranged accordingly

    Scenario: Categories Sidebar List
        Given the user visits a category page
        When the user selects a category from the sidebar
        Then the products of that category should be shown

    Scenario: Product card
        Given the user visits a category page
        When the user clicks on the product card's img
        Then the user should see the product page of that particular page

    Scenario: Product card - Add to cart
        Given the user visits a category page
        When the user clicks on the 'Add to Cart'
        Then the product should be added to the cart
