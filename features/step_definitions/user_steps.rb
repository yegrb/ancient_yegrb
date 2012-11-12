Given /^a valid user$/ do
  pending
  @user = User.create!({
             :email => "batman@wayne.com",
             :password => "12345678",
             :password_confirmation => "12345678"
           })
end

Given /^a logged in user$/ do
  pending
  Given "a valid user"
  visit signin_url
  fill_in "Email", :with => "batman@wayne.com"
  fill_in "Password", :with => "12345678"
  click_button "Sign in"
end
