class API < Grape::API
  prefix 'api'
  version 'v0', :using => :header, :vendor => 'yegrb', :format => 'json'
  format :json

  resource :events do
    get :next_event do
      Event.next_event
    end
  end
end
