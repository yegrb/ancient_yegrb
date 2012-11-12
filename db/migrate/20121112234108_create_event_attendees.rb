class CreateEventAttendees < ActiveRecord::Migration
  def change
    create_table :event_attendees do |t|
      t.references :event
      t.references :user

      t.timestamps
    end
    add_index :event_attendees, :event_id
    add_index :event_attendees, :user_id
  end
end
