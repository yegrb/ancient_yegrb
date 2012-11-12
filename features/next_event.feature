Feature: Next Event
	As a YEGrb organizer,
	trying to quickly broadcast events,
	I can see the next event on the homepage.

	Scenario: See the next event on the homepage
		Given there is an event called "November Meetup" on "10-Nov-2012"
		And I am on the homepage
		Then I should see "Next Event"
		And I should see "November Meetup"
		And I should see "10-Nov-2012"
