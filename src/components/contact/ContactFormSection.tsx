'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Loader2, CheckCircle } from 'lucide-react';
import { useGenericMutation } from '@/hooks/useApi';

// Updated Interface for Tourism
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  destination: string; // Changed from projectType
  travelDate: string;  // Changed from budget
  message: string;
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '', lastName: '', email: '', phone: '', destination: '', travelDate: '', message: ''
  });
  const [success, setSuccess] = useState(false);

  // You might need to adjust the generic type arguments or endpoint
  const contactMutation = useGenericMutation<any, ContactFormData>('POST', '/contact'); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData, {
      onSuccess: () => { setSuccess(true); },
      onError: () => { alert("Failed to send."); }
    });
  };

  return (
    <section id='form-section' className="container mx-auto px-4 mb-24 -mt-20 relative z-20">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left: Contact Info (Dark Blue) */}
        <div className="bg-hercules-dark-blue p-12 text-white lg:w-1/3 flex flex-col justify-between">
           <div>
             <h3 className="text-2xl font-bold mb-6">Let's Plan Your Trip</h3>
             <p className="text-blue-200 mb-10">Visit our office or give us a call to start planning your next adventure.</p>
             <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-hercules-red mt-1" />
                  <div><h4 className="font-bold">Headquarters</h4><p className="text-sm text-blue-200">Indiranagar, Bangalore</p></div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-hercules-red mt-1" />
                  <div><h4 className="font-bold">Email</h4><p className="text-sm text-blue-200">hello@happyfeet.com</p></div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-hercules-red mt-1" />
                  <div><h4 className="font-bold">Phone</h4><p className="text-sm text-blue-200">+91 98450 59899</p></div>
                </div>
             </div>
           </div>
        </div>

        {/* Right: Form (White) */}
        <div className="p-12 lg:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input name="firstName" placeholder="First Name" onChange={handleChange} className="w-full p-4 bg-gray-50 rounded-lg border focus:border-hercules-blue outline-none" required />
              <input name="lastName" placeholder="Last Name" onChange={handleChange} className="w-full p-4 bg-gray-50 rounded-lg border focus:border-hercules-blue outline-none" required />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <input name="email" type="email" placeholder="Email Address" onChange={handleChange} className="w-full p-4 bg-gray-50 rounded-lg border focus:border-hercules-blue outline-none" required />
              <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-4 bg-gray-50 rounded-lg border focus:border-hercules-blue outline-none" required />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <select name="destination" onChange={handleChange} className="w-full p-4 bg-gray-50 rounded-lg border focus:border-hercules-blue outline-none">
                <option value="">Preferred Destination</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Domestic">India (Domestic)</option>
                <option value="Other">Other</option>
              </select>
              <input name="travelDate" type="date" onChange={handleChange} className="w-full p-4 bg-gray-50 rounded-lg border focus:border-hercules-blue outline-none" />
            </div>
            <textarea name="message" rows={4} placeholder="Tell us about your travel plans..." onChange={handleChange} className="w-full p-4 bg-gray-50 rounded-lg border focus:border-hercules-blue outline-none" required></textarea>
            
            <button type="submit" disabled={contactMutation.isPending} className="w-full bg-hercules-blue hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2">
              {contactMutation.isPending ? <Loader2 className="animate-spin" /> : success ? <><CheckCircle /> Enquiry Sent!</> : 'Send Enquiry'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}