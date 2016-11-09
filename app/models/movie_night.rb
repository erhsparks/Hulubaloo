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

  def set_title
    title = self.video.title
    day_of_week, day, month, year, time, gmt_offset = self.date_and_time_to_s
    time = self.strip_seconds(time)
    timezone = self.timezone

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

  def timezone
    self.date_and_time.to_time.zone
  end

  def date_and_time_to_s
    self.date_and_time.to_datetime.readable_inspect.split(" ")
  end
end
