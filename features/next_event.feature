Feature: Next Event
	As a YEGrb organizer,
	trying to quickly broadcast events,
	I expect the "Next Event" on the website to update automatically from the YEGrb calendar.

	Scenario: See the next event on the homepage
		Given I am on the homepage
		And there is an event called "November Meetup" on "10-Nov-2012"
		Then I should see "Next Event"
		And I should see "November Meetup"
		And I should see "10-Nov-2012"
