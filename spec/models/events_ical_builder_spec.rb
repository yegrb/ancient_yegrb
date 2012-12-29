require 'spec_helper'

describe EventsIcalBuilder do
	it "should generate an empty iCal given no events" do
		EventsIcalBuilder.events_to_ical([]).should eql ""
	end
end