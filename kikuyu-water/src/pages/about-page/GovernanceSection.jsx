import React from "react";

const GovernanceSection = () => {
  return (
    <section id="governance-structure" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Governance & Management Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent leadership ensuring accountability and excellence
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Board of Directors
            </h3>
            <div className="grid grid-cols-3 gap-8">
              <div id="board-member-1" className="text-center">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                  alt="Board Chair"
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary"
                />
                <h4 className="font-bold text-gray-900 text-lg">
                  XXXXXXXX
                </h4>
                <p className="text-primary font-bold mb-2">Board Chairperson</p>
                <p className="text-gray-600 text-sm">
                  XXXXXXXXX
                </p>
              </div>
              <div id="board-member-2" className="text-center">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  alt="Board Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary"
                />
                <h4 className="font-bold text-gray-900 text-lg">
                  XXXXXXXXXX
                </h4>
                <p className="text-primary font-bold mb-2">Board Member</p>
                <p className="text-gray-600 text-sm">
                  XXXXXXXXX
                </p>
              </div>
              <div id="board-member-3" className="text-center">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                  alt="Board Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary"
                />
                <h4 className="font-bold text-gray-900 text-lg">
                  XXXXXXXXXX
                </h4>
                <p className="text-primary font-bold mb-2">Board Member</p>
                <p className="text-gray-600 text-sm">Finance & Audit Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
