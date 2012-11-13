class EventAttendance < ActiveRecord::Base
  belongs_to :event
  belongs_to :user

  attr_accessible :event, :event_id, :user, :user_id
end
