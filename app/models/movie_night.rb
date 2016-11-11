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

  def formatted_for_collection
    {
      self.id => {
        id: self.id,
        host: self.host.username,
        title: self.title,
        active: self.active,
        currency: self.currency,
        preview_image_url: self.video.preview_image_url
      }
    }
  end

  def formatted_for_viewing
    usernames = self.participants.map &:username
    {
      id: self.id,
      host: self.host.username,
      title: self.title,
      active: self.active,
      video_id: self.video_id,
      participants: usernames
    }
  end

  def comments_by_parent
    parent_comments = self.comments.where(parent_id: nil)
    nest = {}

    parent_comments.each do |comment|
      nest[comment.id] = comment.format_details
    end

    nest
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
