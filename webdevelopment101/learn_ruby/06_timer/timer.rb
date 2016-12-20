class Timer
  attr_accessor :seconds

  def initialize
      @seconds = 0
  end

  def time_string
      hours = @seconds / 3600
      minutes = (@seconds - hours * 3600) / 60
      seconds = @seconds - hours * 3600 - minutes * 60
      "%02d:%02d:%02d" % [hours, minutes, seconds]
  end

end
