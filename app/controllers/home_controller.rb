class HomeController < ApplicationController
  def index
    @next_event = Event.next_event

    if user_signed_in?
      @next_event_attendance = EventAttendance.find_or_initialize_by_event_id_and_user_id(@next_event.to_param, current_user.to_param)
    else
      @next_event_attendance = EventAttendance.new(:event => @next_event)
    end
  end
end
