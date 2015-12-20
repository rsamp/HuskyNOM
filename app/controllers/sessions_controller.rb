class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      login_user(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Username/Password combination is incorrect"]
      render :new
    end
  end

  def destroy
    logout_user
    render json: {sign_out: "complete"}
  end

end
