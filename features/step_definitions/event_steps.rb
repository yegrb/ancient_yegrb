Given /^there is an event called "(.*?)" on "(.*?)"$/ do |name, date|
  Event.create!(:name => name, :starts => date)
end
