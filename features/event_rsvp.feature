Feature: RSVPing for Events
	As a YEGrb admin,
	in order to share the YEGrb community in Edmonton, 
	I expect attendees to be able to RSVP for events.

	Scenario: RSVP for event on the homepage when logged in
		Given a logged in user
		And today is "01-Nov-2012"
		And there is an event called "November Meetup" on "10-Nov-2012" in "The UofA CompSci Building" about "Stuff"
		And I am on the homepage
		When I press the "RSVP" button
		Then I see I have RSVPed

	Scenario: RSVP for an event on the homepage when logged out
		Given today is "01-Nov-2012"
		And there is an event called "November Meetup" on "10-Nov-2012" in "The UofA CompSci Building" about "Stuff"
		And I am on the homepage
		When I press the "RSVP" button
		Then I should be on the login page
