User.destroy_all

admin = User.create!(email: "toto@mail.com", password: "azerty")

p "#{User.count} users created"
