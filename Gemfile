source 'https://rubygems.org'

gem 'rails', '3.2.11'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

# We're using Postgres
gem 'pg'

# ActiveAdmin provides the admin interface for now
gem 'activeadmin'

# We manage required processes with Foreman
gem 'foreman'

# Used to publish in iCalendar format
gem 'ri_cal'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  gem 'therubyracer', :platforms => :ruby
  gem 'less-rails'
  gem 'twitter-bootstrap-rails'

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

group :development do
  gem 'cucumber-rails', :require => false
  gem 'database_cleaner'
  gem 'guard-cucumber'
  gem 'guard-rspec'
  gem 'rb-readline'
  gem 'rb-fsevent', '~> 0.9.1'
end

group :test, :development do
  gem 'rspec-rails'
  gem 'timecop'
end

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'

# API gems
gem 'grape'
gem 'rack-cors', :require => 'rack/cors'
