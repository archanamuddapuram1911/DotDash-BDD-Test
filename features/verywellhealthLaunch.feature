Feature: Verywell Health Site Navigation

  As a visitor to very well health page 
  I want to see and interact with the “brainAndNervousSystemComponent” 
  So that I can verify it’s displayed correctly and leads to the right page
  
  Scenario: Verify presence and clickability of brainAndNervousSystemComponent
    Given I navigate to the Verywell Health homepage
      | url                              |
      | https://www.verywellhealth.com/  |
    When I click on the "brainAndNervousSystemComponent" link
    Then I should see the article header on the page