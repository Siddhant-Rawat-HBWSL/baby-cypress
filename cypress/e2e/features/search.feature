Feature: Search page

    Scenario: User can click on search box and type text to search
        Given the user is on the home page
        When The user searches for a product via the search bar
        Then they should be able to see the products relevant to the search query 