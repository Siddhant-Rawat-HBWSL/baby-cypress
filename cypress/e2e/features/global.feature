Feature: Global Features

    Scenario: Language dropdown in header
        Given the user visits home page
        When the user clicks on the language dropdown at the top-right & selects a language
        Then the user should see the page for that specific language & the text should be changed to that specific language

    Scenario: Navbar categories
        Given the user visits home page
        When the user hovers over the 'Shop' navbar tab & clicks on a category
        Then the user should be redirected to that category page

    Scenario: Download BabyDoppler App
        Given the user visits home page
        When the user clicks on the 'Download BabyDoppler App' button
        Then the user should be redirected to the download app page

    Scenario: Delivery Location dropdown
        Given the user visits home page
        When the user selects a country from the 'Select your Delivery Location' dropdown
        Then the user should be redirected to that country's store view

    Scenario: Stay in touch form
        Given the user visits home page
        When the user enters their details in the form
        Then the user should be able to submit the form

    Scenario: Footer
        Given the user visits home page
        When the user is not logged in & clicks on the Order Status link in the footer
        Then the user should be redirected to the login page
