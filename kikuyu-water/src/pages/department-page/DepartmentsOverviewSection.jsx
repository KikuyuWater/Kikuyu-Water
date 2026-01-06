import { Departments } from "../../data";
import { Link } from "react-router-dom";

const DepartmentsOverviewSection = () => {
  const textColorMap = {
    primary: "text-primary",
    "green-500": "text-green-500",
    "purple-500": "text-purple-500",
    "orange-500": "text-orange-500",
    "blue-500": "text-blue-500",
    "teal-500": "text-teal-500",
    "red-500": "text-red-500",
    "indigo-500": "text-indigo-500",
  };

  const displayDepartments = () => {
    const results = Departments.map((dept) => {
      return (
        <div
          key={dept.id}
          id="dept-card-technical"
          className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border-t-4 border-${dept.theme.color} group cursor-pointer`}
        >
          <div className="p-8">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
              <i
                className={`fa-solid ${dept.icon} text-${
                  textColorMap[dept.theme.color]
                } text-3xl group-hover:text-white transition`}
              ></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {dept.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {dept.description}
            </p>
            <div className="space-y-3 mb-6">
              {dept.features.map((service, index) => (
                <div className="flex items-center text-gray-700" key={index}>
                  <i
                    className={`fa-solid fa-check-circle text-${dept.theme.color} mr-3`}
                  ></i>
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
              <div className="flex items-center">
                <i className="fa-solid fa-user-tie text-gray-400 mr-2"></i>
                <span className="text-sm text-gray-600">Head: {dept.head}</span>
              </div>
              <Link
                to={`/departments/${dept.id}`}
                className="text-primary font-bold flex items-center hover:underline"
              >
                View Details <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      );
    });

    return results;
  };

  return (
    <section id="departments-overview" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Explore Our Departments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each department plays a vital role in ensuring we deliver quality
            services to our customers
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-12">
          {displayDepartments()}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsOverviewSection;
