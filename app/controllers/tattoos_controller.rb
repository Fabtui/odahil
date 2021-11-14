class TattoosController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :index, :show ]

  def index
    @tattoos = Tattoo.all
  end

  def dashboard
    @tattoos = Tattoo.all
  end

  def show
    @tattoo = Tattoo.find(params[:id])
  end

  def new
    @tattoo = Tattoo.new
  end

  def create
    @tattoo = Tatoo.new(tatoo_params)
    @tattoo.save
  end

  def edit
    @tattoo = Tattoo.find(params[:id])
  end

  def update
    @tattoo = Tattoo.find(params[:id])
    @tattoo.update(tattoo_params)
    if @tattoo.save
      redirect_to :root
    else
      render :edit
    end
  end

  def destroy
    @tattoo = Tattoo.find(params[:id])
    @tattoo.destroy
    redirect_to tattoos_path
  end

  private

  def tattoo_params
    params.require(:tattoo).permit(:id, :date, :name, :description, :customer, :on_home_slider)
  end
end
