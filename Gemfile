if RUBY_VERSION =~ /1.9/
 Encoding.default_external = Encoding::UTF_8
 Encoding.default_internal = Encoding::UTF_8
end

source 'https://rubygems.org'

gem 'rails', '3.2.14'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'mysql2'


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

#gem 'jquery-rails'
gem 'jquery-rails', '~> 2.0.0'
gem "jquery-ui-rails"

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
gem 'unicorn'

# Deploy with Capistrano
group :development, :test do
  gem 'capistrano'
  gem 'capistrano-unicorn', :require => false
  gem 'capistrano-rbenv'
end

# To use debugger
# gem 'debugger'

gem 'refinerycms', '~> 2.0.3', :git => 'git://github.com/refinery/refinerycms.git', :branch => '2-0-stable'

# USER DEFINED

# Specify additional Refinery CMS Engines here (all optional):
gem 'refinerycms-i18n', '~> 2.0.0'
gem 'refinerycms-blog', '~> 2.0.0'
gem 'refinerycms-inquiries', '~> 2.0.0'
gem 'refinerycms-search', '~> 2.0.0'
gem 'refinerycms-page-images', '~> 2.0.0'
gem 'refinerycms-image_slideshows', '~> 2.0.1'
gem 'refinerycms-photo-gallery', '~> 0.1.0', :git => 'git://github.com/Matho/refinerycms-photo-gallery.git', :branch=>'0-1-stable'

# END USER DEFINED

gem 'refinerycms-productos', :path => 'vendor/extensions'