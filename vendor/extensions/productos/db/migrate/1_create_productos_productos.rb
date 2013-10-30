class CreateProductosProductos < ActiveRecord::Migration

  def up
    create_table :refinery_productos do |t|
      t.string :name
      t.text :fabricante
      t.text :propiedades
      t.text :aplicaciones
      t.text :disponibilidad
      t.integer :position

      t.timestamps
    end

  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "refinerycms-productos"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/productos/productos"})
    end

    drop_table :refinery_productos

  end

end
