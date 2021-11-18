class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home profile]

  def home
  end

  def profile
  end

  def dashboard
    @tattoos = Tattoo.all
    @arts = Art.all
  end

end
