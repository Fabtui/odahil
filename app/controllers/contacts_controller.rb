class ContactsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = "Message envoyé"
    else
      flash.now[:error] = "Erreur"
      render :new
    end
  end

  private

  def art_params
    params.require(:art).permit(:id, :name, :message, :email)
  end
end
