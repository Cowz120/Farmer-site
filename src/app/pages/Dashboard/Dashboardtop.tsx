import { ArrowUp, ArrowDown } from 'lucide-react';


interface DashboardCardProps {
  title: string;
  value: string;
  change: string;
  comparedToLastMonth: string;
}
const DashboardCard = ({ title, value, change, comparedToLastMonth }:DashboardCardProps) => {
  const isPositive = change.includes('+');
  const Icon = isPositive ? ArrowUp : ArrowDown;
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <div className="flex items-center mt-2">
        <Icon className={`h-5 w-5 ${changeColor} mr-1`} />
        <span className={`${changeColor} text-sm`}>{change}</span>
        <span className="text-gray-400 text-sm ml-2">{comparedToLastMonth}</span>
      </div>
    </div>
  );
};

const Dashboardtop = () => {
  const dashboardData = [
    {
      title: "Total Livestock Sold",
      value: "3,000,000 KES",
      change: "+15%",
      comparedToLastMonth: "Compared to last month",
    },
    {
      title: "Livestock Available",
      value: "25",
      change: "+5%",
      comparedToLastMonth: "Compared to last month",
    },
    {
      title: "Pending Orders",
      value: "3",
      change: "-3%",
      comparedToLastMonth: "Compared to last month",
    },
    {
      title: "Livestock Sold",
      value: "1000",
      change: "+12%",
      comparedToLastMonth: "Compared to last month",
    },
  ];

  return (
    <div className=" py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardData.map((item, index) => (
            <DashboardCard
              key={index}
              title={item.title}
              value={item.value}
              change={item.change}
              comparedToLastMonth={item.comparedToLastMonth}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboardtop;