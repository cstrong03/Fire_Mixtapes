Rails.application.routes.draw do
  resources :tracks


  scope '/user' do
    resources :tracks
  end

end
