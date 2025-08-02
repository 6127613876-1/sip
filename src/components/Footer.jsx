import React from 'react';

// A simple Mail icon component using inline SVG
const MailIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </svg>
);

const Footer = () => {
  // Array of contacts to keep the code clean and scalable
  const contacts = [
    { name: 'Dr. G. Jeya Jeevakani', email: 'gjjeng@tce.edu' },
    { name: 'H. Sri Vinodhini', email: 'srivinodhini@tce.edu' },
    { name: 'C.V. Nisha Angeline', email: 'nishaangeline@gmail.com' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Helpdesk Title */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Helpdesk & Support
            </h2>
            <p className="mt-4 text-gray-400 max-w-lg">
              Our team is available to assist you with any inquiries. Please feel free to reach out to us via email.
            </p>
          </div>

          {/* Column 2: Contact Links */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              {contacts.map((contact) => (
                <li key={contact.email}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MailIcon className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">{contact.name}</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-base text-indigo-300 hover:text-indigo-200 hover:underline transition-colors duration-300"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Info Link */}
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">
              More
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/contact" className="text-base text-gray-300 hover:text-white hover:underline">
                  Full Contact List
                </a>
              </li>
               <li>
                <a href="/faq" className="text-base text-gray-300 hover:text-white hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Thiagarajar College of Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
