module Refinery
  module Productos
    module Admin
      class ProductosController < ::Refinery::AdminController

        crudify :'refinery/productos/producto',
                :title_attribute => 'name', :xhr_paging => true

      end
    end
  end
end
