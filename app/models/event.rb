class Event < ActiveRecord::Base
  attr_accessible :name, :starts, :location, :description

  has_many :event_attendees
  has_many :attendees, :through => :event_attendees, :source => :user

  scope :upcoming, lambda { where("starts >= ?", DateTime.now) }
  scope :ordered, order("starts ASC")

  def self.next_event
    Event.upcoming.ordered.first
  end
end
