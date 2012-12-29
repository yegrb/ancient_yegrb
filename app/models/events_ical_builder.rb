require "ri_cal"

module EventsIcalBuilder
	extend self

	def events_to_ical(events)
		RiCal.Calendar.to_s
	end
end