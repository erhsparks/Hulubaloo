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
end
