Rails.application.routes.draw do
  resources :tracks

  root to: "tracks#index"

    scope '/user' do
    resources :tracks
  end
end
