class HomeController < ApplicationController
  def index
    @next_event = Event.first
  end
end
