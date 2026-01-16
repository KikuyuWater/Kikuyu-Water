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
          <div className="p-4 sm:p-6 md:p-8">
            <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
              <i
                className={`fa-solid ${dept.icon} text-${
                  textColorMap[dept.theme.color]
                } text-2xl sm:text-3xl group-hover:text-white transition`}
              ></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              {dept.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              {dept.description}
            </p>
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              {dept.features.map((service, index) => (
                <div className="flex items-start text-gray-700 text-sm sm:text-base" key={index}>
                  <i
                    className={`fa-solid fa-check-circle text-${dept.theme.color} mr-2 sm:mr-3 mt-0.5 flex-shrink-0`}
                  ></i>
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-3 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <div className="flex items-center">
                <i className="fa-solid fa-user-tie text-gray-400 mr-2"></i>
                <span className="text-xs sm:text-sm text-gray-600">Head: {dept.head}</span>
              </div>
              <Link
                to={`/departments/${dept.id}`}
                className="text-primary font-bold flex items-center hover:underline text-sm sm:text-base"
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
    <section id="departments-overview" className="py-12 sm:py-16 md:py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
            Explore Our Departments
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Each department plays a vital role in ensuring we deliver quality
            services to our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {displayDepartments()}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsOverviewSection;
