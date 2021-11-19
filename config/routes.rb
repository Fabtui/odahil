Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'pages/profile'
  get 'pages/dashboard'
  match '/contacts', to: 'contacts#new', via: 'get'
  resources "contacts", only: %i[new create]

  resources :tattoos

  resources :arts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
