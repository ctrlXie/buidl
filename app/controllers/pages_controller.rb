class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :search, :test]

  def home

  end

  def search

  end

  def test
    @user = User.create(username: "hilmarx", email: "h@h.h", password: "hhhhhh")
    @user.fetch_github
  end
end
