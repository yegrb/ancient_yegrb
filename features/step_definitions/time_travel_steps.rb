Given /^today is "(.*?)"$/ do |time|
  Timecop.freeze Time.parse(time)
end
