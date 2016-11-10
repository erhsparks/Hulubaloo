# == Schema Information
#
# Table name: comments
#
#  id             :integer          not null, primary key
#  body           :text             not null
#  author_id      :integer          not null
#  movie_night_id :integer          not null
#  parent_id      :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :body, :author_id, :movie_night_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User,
  inverse_of: :authored_comments

  belongs_to :movie_night,
  primary_key: :id,
  foreign_key: :movie_night_id,
  class_name: :MovieNight,
  inverse_of: :comments

  belongs_to :parent,
  primary_key: :id,
  foreign_key: :parent_id,
  class_name: :Comment

  has_many :children,
  primary_key: :id,
  foreign_key: :parent_id,
  class_name: :Comment

  def format_details
    movie_night_start = self.movie_night.date_and_time
    time_after_video_start = self.created_at - movie_night_start
    hour, min, sec = find_time_components(time_after_video_start)

    {
      self.id => {
        body: self.body,
        username: self.author.username,
        hours_in: hour,
        minutes_in: min,
        seconds_in: sec,
        relative_creation_time: time_after_video_start
      }
    }
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
end
