// app/components/DateToday.tsx
import { BsCalendarDateFill } from 'react-icons/bs';

interface OrdersCardProps {
  price: number;
}

const OrdersCard = ({ price }: OrdersCardProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      {[
        { title: 'Total Orders', value: price },
        { title: 'Return Orders', value: price },
        { title: 'Fulfilled Orders Over Time', value: price },
        { title: 'Delivered Orders Over Time', value: price },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
        >
          <span className="text-sm font-medium text-gray-600">{item.title}</span>
          <span className="text-xl font-bold text-gray-800">
            ${item.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

const DateToday = () => {
  const today = new Date();
  const dayOfMonth = today.getDate();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col w-full    ">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Orders</h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative inline-flex items-center justify-center">
          <BsCalendarDateFill className="h-8 w-8 text-blue-500" />
          <span className="absolute text-sm font-bold text-white bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
            {dayOfMonth}
          </span>
        </div>
        <span className="text-lg text-gray-600">{formattedDate}</span>
      </div>
      <OrdersCard price={10000} />
    </div>
  );
};

export default DateToday;