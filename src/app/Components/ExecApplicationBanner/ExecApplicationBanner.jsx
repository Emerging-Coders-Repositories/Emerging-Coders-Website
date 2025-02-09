import React from "react";

export default function ExecApplicationBanner() {
  return (
    <div className="flex justify-center py-4">
      <div className="bg-gray-100 border border-gray-300 text-black px-6 py-3 rounded-md shadow-md flex items-center space-x-3 max-w-3xl">
        

        
        <div>
          <p className="font-medium">
            The  Emerging Coders <a 
              href="https://docs.google.com/forms/d/1vld2rOTfUFxal73Nk_vCdBGOiB9PR6kduTQ7nKapGKI" 
              className="text-blue-600 underline font-bold"
              target="_blank" 
              rel="noopener noreferrer"
            >
              2025-2026 Executive Board application
            </a> is now open. The deadline to submit applications is <strong>Monday, February 17th, 11:59 PM</strong> .
          </p>
        </div>
      </div>
    </div>
  );
}
