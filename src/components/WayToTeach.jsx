export default function WayToTeach({ title, description }) { // Можно просто (props) передать внутрь функции. Делаем с помощью деструктуризации
    return (
      <li>
        <p>{title}</p> {description} {/*Тогда здесь будет props.title и props.description */}
      </li>
    )
  }