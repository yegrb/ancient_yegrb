class EventAttendancesController < ApplicationController

  before_filter :authenticate_user!

  def create
    attendance = EventAttendance.new(params[:event_attendance])
    attendance.user = current_user
    if attendance.save
      flash[:notice] = "You joined '#{attendance.event.name}'"
      redirect_to root_path
    end
  end

  def destroy
    attendance = EventAttendance.find(params[:event_attendance][:id])
    attendance.destroy
    flash[:notice] = "You left '#{attendance.event.name}'"
    redirect_to root_path
  end
end
