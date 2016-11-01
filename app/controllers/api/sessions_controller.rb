class Api::SessionsController < ApplicationController
  def create
    result = User.find_by_credentials(user_params)

    if result.is_a?(User)
      @user = result
      login!(@user)

      render "api/users/show"
    else
      errors = result

      render json: errors, status: 401
    end
  end

  def destroy
    if current_user
      logout!

      render json: {}
    else
      render json: ["No one to log out"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
