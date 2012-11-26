Feature: Subscribe to event calendar
	As potential YEGrb attendee,
	in order to plan my schedule,
	I expect to be able to add the YEGrb calendar to my calendar.

	Scenario: Subscribe to event calendar from homepage
		Given I am on the homepage
		Then I should see a link called "Subscribe to the calendar" to "/yegrb.ical"
