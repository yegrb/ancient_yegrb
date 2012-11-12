class HomeController < ApplicationController
  def index
    @next_event = Event.next_event
  end
end
