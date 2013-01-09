class Event < ActiveRecord::Base
  attr_accessible :name, :description, :starts_on, :venue_address, :venue_url,
                  :rsvp_url 

  has_many :event_attendances
  has_many :attendees, :through => :event_attendances, :source => :user

  scope :upcoming, lambda { where("starts_on >= ?", DateTime.now) }
  scope :ordered, order("starts_on ASC")

  def self.next_event
    Event.upcoming.ordered.first
  end
end
