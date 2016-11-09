# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: false,
    message: 'must be at least six characters long' }
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :hosted_movie_nights,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :MovieNight,
  dependent: :destroy

  has_many :viewings,
  primary_key: :id,
  foreign_key: :viewer_id,
  class_name: :Screening,
  dependent: :destroy

  has_many :viewed_movie_nights,
  through: :viewings,
  source: :movie_night

  def self.find_by_credentials(user_params)
    test_user = User.find_by_username(user_params[:username])
    return ["Username not found!"] unless test_user

    if test_user.is_password?(user_params[:password])
      test_user
    else
      ["Password incorrect!"]
    end
  end

  def password=(password)
    @password = password

    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    digest = BCrypt::Password.new(self.password_digest)

    digest.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save

    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
