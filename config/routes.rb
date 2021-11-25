Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'pages/profile'
  get 'pages/dashboard'
  resources "contacts", only: %i[new create index]

  resources :tattoos

  resources :arts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
