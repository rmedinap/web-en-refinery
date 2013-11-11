class AddEmpresaToRefineryInquiriesInquiries < ActiveRecord::Migration
  def change
    add_column :refinery_inquiries_inquiries, :empresa, :string
  end
end
