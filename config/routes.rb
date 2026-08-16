Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  root "pages#landing"
  get "/landing" => "pages#landing", as: :landing
  get "/about" => "pages#landing", as: :about
  get "/work" => "pages#work", as: :work
  get "/poems" => "pages#poems", as: :poems
  get "/events" => "pages#events", as: :events
  get "/now" => "pages#now", as: :now
  get "/contact" => "pages#contact", as: :contact
  post "/contact" => "pages#send_contact", as: :send_contact
end
