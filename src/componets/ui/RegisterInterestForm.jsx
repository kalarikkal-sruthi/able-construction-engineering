import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RegisterInterestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectName: '',
    phoneCode: '+91 (India)',
    apartmentType: '',
    agreeToTerms: false
  });

  const apartmentTypes = [
    'Studio',
    '1 Bedroom',
    '2 Bedroom',
    '3 Bedroom',
    'Penthouse',
    'Villa'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            REGISTER
            <br />
            YOUR
            <br />
            <span className="text-yellow-400">INTEREST</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-12 border border-white/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row - First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  FIRST NAME*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  LAST NAME*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Second Row - Email & Project Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  EMAIL*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  PROJECT NAME*
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                  placeholder="Enter project name"
                />
              </div>
            </div>

            {/* Third Row - Phone & Apartment Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  PHONE CODE
                </label>
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                >
                  <option value="+91 (India)">+91 (India)</option>
                  <option value="+256 (Uganda)">+256 (Uganda)</option>
                  <option value="+974 (Qatar)">+974 (Qatar)</option>
                  <option value="+971 (UAE)">+971 (UAE)</option>
                  <option value="+968 (Oman)">+968 (Oman)</option>
                </select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  APARTMENT TYPE
                </label>
                <select
                  name="apartmentType"
                  value={formData.apartmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors"
                >
                  <option value="">Select apartment type</option>
                  {apartmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-yellow-400 bg-white/5 border-white/20 rounded focus:ring-yellow-400 focus:ring-2"
              />
              <label className="text-white text-sm">
                I have read and agree to the Terms & Conditions
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={!formData.agreeToTerms}
              className="w-full bg-yellow-400 text-gray-900 py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-300 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
            >
              SUBMIT
            </motion.button>

            {/* reCAPTCHA Notice */}
            <div className="text-center">
              <p className="text-gray-400 text-xs">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#" className="text-yellow-400 hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-yellow-400 hover:underline">
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterInterestForm;