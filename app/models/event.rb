class Event < ActiveRecord::Base
  attr_accessible :name, :starts

  scope :upcoming, lambda { where("starts >= ?", DateTime.now) }
  scope :ordered, order("starts ASC")

  def self.next_event
    Event.upcoming.ordered.first
  end
end
