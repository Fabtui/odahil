User.destroy_all
Tatoo.destroy_all

admin = User.create!(email: "toto@mail.com", password: "azerty")

puppet = Tattoo.create!(
  name: "Puppet",
  description: "Masta of puppetz",
  customer: "Fab",
  date: "2021-09-03T21:30",
  on_home_slider: true
)
puppet.photos.attach(io: File.open('app/assets/images/IMG_20190627_093002.jpg'), filename: 'puppet.jpg', content_type:'image/jpg')

p "#{User.count} users created"
p "#{Tattoo.count} Tattoos created"
