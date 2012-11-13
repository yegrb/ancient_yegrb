class Event < ActiveRecord::Base
  attr_accessible :name, :starts, :location, :description

  has_many :event_attendances
  has_many :attendees, :through => :event_attendances, :source => :user

  scope :upcoming, lambda { where("starts >= ?", DateTime.now) }
  scope :ordered, order("starts ASC")

  def self.next_event
    Event.upcoming.ordered.first
  end
end
