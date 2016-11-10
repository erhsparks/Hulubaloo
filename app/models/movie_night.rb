# == Schema Information
#
# Table name: movie_nights
#
#  id            :integer          not null, primary key
#  host_id       :integer          not null
#  video_id      :integer          not null
#  title         :string
#  date_and_time :datetime         not null
#  active        :boolean          default(FALSE)
#  currency      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class MovieNight < ActiveRecord::Base
  validates :host_id, :video_id, :date_and_time, presence: true
  after_initialize :set_title, :set_currency, :set_host_as_participant

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  belongs_to :video,
  primary_key: :id,
  foreign_key: :video_id,
  class_name: :Video

  has_many :viewings,
  primary_key: :id,
  foreign_key: :movie_night_id,
  class_name: :Screening,
  dependent: :destroy,
  inverse_of: :movie_night

  has_many :participants,
  through: :viewings,
  source: :viewer

  has_many :comments,
  primary_key: :id,
  foreign_key: :movie_night_id,
  class_name: :Comment,
  inverse_of: :movie_night

  def comments_by_parent
    unsorted_comments = self.comments
    nest = Hash.new do |h, k|
      h[k] = Hash.new
    end

    unsorted_comments.each do |comment|
      parent_id = comment.parent_id || 0
      time_after_video_start = comment.created_at - self.date_and_time
      hour, min, sec = find_time_components(time_after_video_start)
      comment_details = {
        body: comment.body,
        username: comment.author.username,
        hours_in: hour,
        minutes_in: min,
        seconds_in: sec,
        relative_creation_time: time_after_video_start
      }
      nest[parent_id][comment.id] = comment_details
    end

    nest
  end

  def find_time_components(time_after_video_start)
    seconds = time_after_video_start
    minutes = seconds / 60
    hours = minutes / 60

    hours_in = hours.floor
    minutes_in = minutes.floor % 60
    seconds_in = seconds.floor % 60

    [hours_in, minutes_in, seconds_in]
  end

  def set_title
    title = self.video.title
    day_of_week, day, month, year, time, gmt_offset = self.date_and_time_to_s
    time = self.strip_seconds(time)
    timezone = self.local_time.zone

    self.title = "#{title} on #{day_of_week} #{month} #{day} at #{time} #{timezone}"
  end

  def set_currency
    now = DateTime.now

    case self.date_and_time <=> now
    when -1, 0
      self.currency = 'past'
    when 1
      self.currency = 'upcoming'
    end
  end

  def set_host_as_participant
    self.viewings << Screening.new(movie_night: self, viewer_id: self.host.id)
  end

  def strip_seconds(time_string)
    time_string.split(":").slice(0,2).join(":")
  end

  def local_time
    self.date_and_time.to_time
  end

  def date_and_time_to_s
    self.local_time.to_datetime.readable_inspect.split(" ")
  end
end
