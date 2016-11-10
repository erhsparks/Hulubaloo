Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :videos, only: [:show]
    resources :categories, only: [:index, :show]
    resources :movie_nights, only: [:index, :show, :create]
    resources :comments, only: [:show, :create]
  end
end
