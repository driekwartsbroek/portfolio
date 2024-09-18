import React from "react";
import { workExperiences } from "@/data/workExperiences";

interface WorkSidebarProps {
  selectedCompany: string;
  onSelectCompany: (company: string) => void;
}

const WorkSidebar: React.FC<WorkSidebarProps> = ({
  selectedCompany,
  onSelectCompany,
}) => {
  return (
    <div className="w-64 border-r border-black border-opacity-5 p-4">
      <h2 className="text-lg font-light uppercase mb-4">Companies</h2>
      <ul>
        {workExperiences.map((company) => (
          <li key={company.company} className="mb-2">
            <button
              onClick={() => onSelectCompany(company.company)}
              className={`w-full text-left p-2 rounded-lg transition-colors duration-200 ${
                selectedCompany === company.company
                  ? "bg-black bg-opacity-5 font-semibold"
                  : "hover:bg-black hover:bg-opacity-5"
              }`}
            >
              <i
                className={`bi ${
                  selectedCompany === company.company
                    ? "bi-folder-fill"
                    : "bi-folder"
                } mr-2 text-yellow-500`}
              ></i>
              {company.company}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkSidebar;
