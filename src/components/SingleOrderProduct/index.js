const SingleOrderProduct = ({
  product: { name, image_url, price },
  quantity,
}) => {
  return (
    <section className="">
      <div className="flex my-4">
        <img
          src={`${process.env.REACT_APP_BACKEND_ROOT_URL}/${image_url}`}
          alt={name}
          className="w-24 h-24 object-cover p-1"
        />

        <div className="p-1">
          <h3 className="capitalize font-medium text-blue-700">{name}</h3>
          <p className="capitalize">
            price : $ <span className="font-medium">{price}</span>
          </p>
          <p className="capitalize">
            quantity : <span className="font-medium">{quantity}</span>
          </p>
          <p className="capitalize">
            total price :
            <span className="font-medium">{(price * quantity).toFixed(2)}</span>
            $
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default SingleOrderProduct;
