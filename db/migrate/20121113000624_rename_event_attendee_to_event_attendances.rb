class RenameEventAttendeeToEventAttendances < ActiveRecord::Migration
  def up
    rename_table :event_attendees, :event_attendances
  end

  def down
    rename_table :event_attendances, :event_attendees
  end
end
