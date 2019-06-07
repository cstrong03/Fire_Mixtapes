Rails.application.routes.draw do

  get 'upload/new'
  get 'upload/create'
  get 'upload/index'
  resources :tracks
  resources :uploads

  scope '/user' do
    resources :tracks
  end

end
