import OrderItem from "../Components/OrderItem";

const CardPage = () => {
  return (
    <div className="sm:p-5 p-2">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <div className="sm:flex-3">
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
        </div>
        <div className="border sm:flex-1 "></div>
      </div>
    </div>
  );
};

export default CardPage;
