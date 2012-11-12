Given /^there is an event called "(.*?)" on "(.*?)" in "(.*?)" about "(.*?)"$/ do |name, date, location, description|
  Event.create!(:name => name, :starts => date, :location => location, :description => description)
end
