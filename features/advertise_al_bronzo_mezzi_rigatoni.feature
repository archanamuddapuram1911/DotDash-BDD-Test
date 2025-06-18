Feature: View AL BRONZO MEZZI RIGATONI Advertisement

  As a visitor to the Food & Wine featured article  
  I want to see and interact with the “AL BRONZO MEZZI RIGATONI” ad  
  So that I can verify it’s displayed correctly and leads to the right promotional page
  
  Scenario: Verify presence and clickability of AL BRONZO MEZZI RIGATONI ad
    Given I navigate to Food & Wine featured article page
      | url                                                                                   |
      | https://www.foodandwine.com/featured/original/unforgettable-dinner-party-barilla-2023 |
    Then I should see and click the AL BRONZO MEZZI RIGATONI product component
    And I should see click and verify the last text block on the page
      | url                                                                                   |
      | https://www.foodandwine.com/featured/original/unforgettable-dinner-party-barilla-2023 |
