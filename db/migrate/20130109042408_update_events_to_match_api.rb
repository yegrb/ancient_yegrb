class UpdateEventsToMatchApi < ActiveRecord::Migration
  def up
    # Rename existing colums
    rename_column(:events, :starts, :starts_on)
    rename_column(:events, :location, :venue_address)

    # Add missing columns
    add_column(:events, :venue_url, :string)
    add_column(:events, :rsvp_url, :string)
  end

  def down
    # Rename existing colums
    rename_column(:events, :starts_on, :starts)
    rename_column(:events, :venue_address, :location)

    # Add missing columns
    remove_column(:events, :venue_url)
    remove_column(:events, :rsvp_url)
  end
end
