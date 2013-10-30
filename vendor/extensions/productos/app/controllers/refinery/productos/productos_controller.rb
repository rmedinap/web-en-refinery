module Refinery
  module Productos
    class ProductosController < ::ApplicationController

      before_filter :find_all_productos
      before_filter :find_page

      def index
        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @producto in the line below:
        present(@page)
      end

      def show
        @producto = Producto.find(params[:id])

        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @producto in the line below:
        present(@page)
      end

    protected

      def find_all_productos
        @productos = Producto.order('position ASC')
      end

      def find_page
        @page = ::Refinery::Page.where(:link_url => "/productos").first
      end

    end
  end
end
