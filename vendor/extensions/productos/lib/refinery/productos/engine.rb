module Refinery
  module Productos
    class Engine < Rails::Engine
      include Refinery::Engine
      isolate_namespace Refinery::Productos

      engine_name :refinery_productos

      initializer "register refinerycms_productos plugin" do
        Refinery::Plugin.register do |plugin|
          plugin.name = "productos"
          plugin.url = proc { Refinery::Core::Engine.routes.url_helpers.productos_admin_productos_path }
          plugin.pathname = root
          plugin.activity = {
            :class_name => :'refinery/productos/producto',
            :title => 'name'
          }
          
        end
      end

      config.after_initialize do
        Refinery.register_extension(Refinery::Productos)
      end
    end
  end
end
