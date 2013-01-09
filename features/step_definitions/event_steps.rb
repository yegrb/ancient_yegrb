Given /^there is an event called "(.*?)" on "(.*?)" in "(.*?)" about "(.*?)"$/ do |name, date, location, description|
  Event.create!(:name => name, :starts_on => date, :venue_address => location, :description => description)
end

Then /^I see I have RSVPed$/ do
  page.should have_content("joined")
end
