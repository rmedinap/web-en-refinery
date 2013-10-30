module Refinery
  module Productos
    class Producto < Refinery::Core::BaseModel
      self.table_name = 'refinery_productos'

      attr_accessible :name, :fabricante, :propiedades, :aplicaciones, :disponibilidad, :position

      acts_as_indexed :fields => [:name, :fabricante, :propiedades, :aplicaciones, :disponibilidad]

      validates :name, :presence => true, :uniqueness => true
    end
  end
end
