#http://niczsoft.com/2012/03/fast-deployment-using-capistrano-rvm-and-more/

#APP_ROOT = File.expand_path(File.dirname(File.dirname(__FILE__)))
APP_ROOT = "/home/ccastillo/apps/platensa_nuevo/current"
#ENV['BUNDLE_GEMFILE'] = File.expand_path('../Gemfile', File.dirname(__FILE__))
#require 'bundler/setup'

working_directory APP_ROOT
worker_processes 1
preload_app true
timeout 60
# listen "127.0.0.1:9000"
listen APP_ROOT + "/tmp/pids/unicorn.sock", :backlog => 64
# Spawn unicorn master worker for user apps (group: apps)
user 'ccastillo' 

# Should be 'production' by default, otherwise use other env 
rails_env = ENV['RAILS_ENV'] || 'production'

pid APP_ROOT + "/tmp/pids/unicorn.pid"
stderr_path APP_ROOT + "/log/unicorn.stderr.log"
stdout_path APP_ROOT + "/log/unicorn.stdout.log"

before_fork do |server, worker|
  defined?(ActiveRecord::Base) && ActiveRecord::Base.connection.disconnect!

  old_pid = APP_ROOT + '/tmp/pids/unicorn.pid.oldbin'
  if File.exists?(old_pid) && server.pid != old_pid
    begin
      Process.kill("QUIT", File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
      puts "Old master already dead"
    end
  end
end
after_fork do |server, worker|
  defined?(ActiveRecord::Base) && ActiveRecord::Base.establish_connection
end

# before_fork do |server, worker|
#   ActiveRecord::Base.connection.disconnect!
# 
#   old_pid = "#{server.config[:pid]}.oldbin"
#   if File.exists?(old_pid) && server.pid != old_pid
#     begin
#       Process.kill("QUIT", File.read(old_pid).to_i)
#     rescue Errno::ENOENT, Errno::ESRCH
#       # someone else did our job for us
#     end
#   end
# end

#after_fork do |server, worker|
#  ActiveRecord::Base.establish_connection
#end



