class NormalUser < ApplicationRecord
    has_secure_password
    has_one_attached :avatar

    before_save :email_downcase

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

    validates :name, presence: true, length: { maximum: 50 }
    validates :password, length: { minimum: 6 }
    validates :email, presence: true, length: { maximum: 255 },
                                      format: { with: VALID_EMAIL_REGEX },
                                      uniqueness: { case_sensitive: true }
    validates :phone, presence: true, length: { minimum: 10, maximum: 11 }

    private
      def email_downcase
        self.email.downcase!
      end
end
