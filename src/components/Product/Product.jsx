export const Product = ({ product }) => (
  <tr data-cy="Product">
    <td className="has-text-weight-bold" data-cy="ProductId">
      {product.id}
    </td>

    <td data-cy="ProductName">{product.name}</td>
    <td data-cy="ProductCategory">
      {product.categories.icon} - {product.categories.title}
    </td>

    <td
      data-cy="ProductUser"
      className={
        product.users.sex !== 'f' ? 'has-text-link' : 'has-text-danger'
      }
    >
      {product.users.name}
    </td>
  </tr>
);
