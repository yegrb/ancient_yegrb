if Rails.env.development?
  User.create(:email => "mark@yegrb.com", :password => "password")
end
