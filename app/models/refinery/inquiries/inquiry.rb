module Refinery
  module Inquiries
    class Inquiry < Refinery::Core::BaseModel

      filters_spam :message_field => :message,
                   :email_field => :email,
                   :author_field => :name,
                   :other_fields => [:phone],
                   :extra_spam_words => %w()

      validates :name, :presence => true
      validates :message, :presence => true
      validates :empresa, :presence => true
      validates :email, :format=> { :with =>  /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i }

      acts_as_indexed :fields => [:name, :email, :message, :phone]

      default_scope :order => 'created_at DESC'

      attr_accessible :name, :phone, :message, :empresa, :email

      def self.latest(number = 7, include_spam = false)
        include_spam ? limit(number) : ham.limit(number)
      end

    end
  end
end