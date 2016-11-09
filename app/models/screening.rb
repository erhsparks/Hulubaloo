# == Schema Information
#
# Table name: screenings
#
#  id             :integer          not null, primary key
#  movie_night_id :integer          not null
#  viewer_id      :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Screening < ActiveRecord::Base
  validates :movie_night, presence: true, uniqueness: { scope: :viewer_id }
  validates :viewer_id, presence: true

  belongs_to :movie_night,
  primary_key: :id,
  foreign_key: :movie_night_id,
  class_name: :MovieNight,
  inverse_of: :viewings

  belongs_to :viewer,
  primary_key: :id,
  foreign_key: :viewer_id,
  class_name: :User
end
