
FactoryGirl.define do
  factory :producto, :class => Refinery::Productos::Producto do
    sequence(:name) { |n| "refinery#{n}" }
  end
end

