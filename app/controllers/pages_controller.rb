class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home profile]

  def home
  end

  def profile
  end

  def shop
  end

  def dashboard
    @tattoos = Tattoo.sorted_by_created_at
    @arts = Art.sorted_by_created_at
  end

end
