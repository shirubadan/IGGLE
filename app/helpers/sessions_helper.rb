module SessionsHelper

    def sign_in(user)
        session[:user_id] = user.id
    end

    def sign_out
        session.delete(:user_id)
    end

    def current_user
        @current_user ||= NormalUser.find_by(id: session[:user_id]) or ProfessionalUser.find_by(id: session[:user_id])
    end

    def user_signed_in?
        !current_user.nil?
    end
    
end