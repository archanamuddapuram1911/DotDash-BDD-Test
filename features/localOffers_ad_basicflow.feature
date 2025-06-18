Feature: Interact with Local Offers Advertisement

  As a visitor to the recipe page  
  I want to detect, click and validate the “Local Offers” ad  
  So that I can verify it loads the correct promotional content

  
  Scenario: As a general user, I should be able to see local offers ad, update the zip code and see refreshed results
    Given I open the smoked turkey recipe page
    When the Local Offers ad is visible
    Then I check for Local offers ad visibility and update the zipCode
   
  
  Scenario: As a general user, I should be able to swap and validate the items in the cart
    Given I open the smoked turkey recipe page
    When the Local Offers ad is visible
    Then I check for Local offers ad visibility and update the zipCode
    And I click on Add to walmart cart and validate total cart amount
    And I swap an item and validate the updated cart amount


  