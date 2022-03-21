Rails.application.routes.draw do
  get 'visits/index'
  get 'posts/new'
  post 'insta_posts/create'
  get 'index/new'
  get 'index/create'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root to: 'pages#home'
  get 'pages/profile'
  get 'pages/dashboard'
  get 'pages/shop'
  resources "contacts", only: %i[new create index]

  resources :tattoos

  resources :arts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
