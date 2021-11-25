# class Contact < MailForm::Base
class Contact < ApplicationRecord
  attribute :name,      validate: true
  attribute :email,     validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message

  scope :sorted_by_date, -> { order(created_at: :desc) }

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      subject: "My Contact Form",
      to: "fabrice.tuitui@gmail.com",
      from: %("#{name}" <#{email}>)
    }
  end
end
