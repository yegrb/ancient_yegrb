Feature: Next Event
	As a YEGrb organizer,
	trying to quickly broadcast events,
	I can see the next event on the homepage.

	Scenario: When there is only one event
		Given today is "01-Nov-2012"
		And there is an event called "November Meetup" on "10-Nov-2012"
		And I am on the homepage
		Then I should see "Next Event"
		And I should see "November Meetup"
		And I should see "10-Nov-2012"

	Scenario: When there are a few upcoming events
		Given today is "01-Jan-2013"
		And there is an event called "January Meetup" on "10-Jan-2013"
		And there is an event called "February Meetup" on "20-Feb-2013"
		And I am on the homepage
		Then I should see "Next Event"
		And I should see "January Meetup"
		And I should see "10-Jan-2013"

	Scenario: When there are past and future events
		Given today is "01-Oct-2012"
		And there is an event called "September Meetup" on "01-Sep-2012"
		And there is an event called "October Meetup" on "15-Oct-2012"
		And there is an event called "November Meetup" on "10-Nov-2012"
		And I am on the homepage
		Then I should see "Next Event"
		And I should see "October Meetup"
		And I should see "15-Oct-2012"
