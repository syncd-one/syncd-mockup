"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Inbox,
  Send,
  Star,
  Trash,
  Search,
  Menu,
  Coffee,
  X,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EmailDetail from "@/components/EmailDetails";
import ViewsSection from "@/components/ViewsSection";
import ViewSettingsModal from "@/components/ViewSettingsModal";
import { allEmails, viewCodes } from "@/lib/emails";
import FocusMode from "@/components/FocusMode";
import { useToast } from "@/components/ui/use-toast";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

const EmailClient = () => {
  const [selectedEmail, setSelectedEmail] = useState(allEmails[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedViews, setSelectedViews] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState("");
  const [filteredEmails, setFilteredEmails] = useState(allEmails);
  const [hiddenEmails, setHiddenEmails] = useState<string[]>([]);
  const focusModes = [
    { time: "Morning", rule: "Non-emergency work emails are disabled" },
    { time: "Work Hours", rule: "Personal emails are turned off" },
    {
      time: "Fantasy Football",
      rule: "Fantasy football emails are disabled until 1 hour before kickoff",
    },
  ];
  const { toast } = useToast();

  useEffect(() => {
    if (selectedViews.length === 0) {
      setFilteredEmails(allEmails);
    } else {
      const filtered = allEmails.filter((email) =>
        email.view.some((v) => selectedViews.includes(v)),
      );
      setFilteredEmails(filtered);
    }
  }, [selectedViews]);

  const handleNextEmail = () => {
    setHiddenEmails(prev => [...prev, selectedEmail.id]);
    const currentIndex = filteredEmails.findIndex(e => e.id === selectedEmail.id);
    const nextIndex = (currentIndex + 1) % filteredEmails.length;
    setSelectedEmail(filteredEmails[nextIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        toast({
          title: "Actions Completed",
          description: "Email actions have been processed. Moving to next email...",
          duration: 2000,
        });
        
        setTimeout(handleNextEmail, 500);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toast, selectedEmail, filteredEmails]);

  const toggleView = (view: string) => {
    setSelectedViews((prev) => {
      const viewCode = viewCodes[view as keyof typeof viewCodes];
      return prev.includes(viewCode)
        ? prev.filter((v) => v !== viewCode)
        : [...prev, viewCode];
    });
  };

  const openModal = (view: string) => {
    setCurrentView(view);
    setIsModalOpen(true);
  };

  return (
    <ToastProvider>
      <div className="flex h-screen bg-gray-100">
        <ViewSettingsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          viewName={currentView}
        />
        {/* Sidebar */}
        <div
          className={`w-64 bg-gray-800 text-white p-4 transition-all duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="flex items-center justify-center">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-purple-600 flex items-center mb-4">
                <svg 
                  width="24"
                  height="24" 
                  viewBox="0 0 256 256"
                  className="mr-2 h-6 w-6"
                >
                  <path 
                    d="M232.7,50.48C229,45.7,221.84,40,209,40c-16.85,0-38.46,11.28-57.81,30.16A140.07,140.07,0,0,0,136,87.53V56a8,8,0,0,0-16,0V87.53a140.07,140.07,0,0,0-15.15-17.37C85.49,51.28,63.88,40,47,40,34.16,40,27,45.7,23.3,50.48c-6.82,8.77-12.18,24.08-.21,71.2,6.05,23.83,19.51,33,30.63,36.42A44,44,0,0,0,128,205.27a44,44,0,0,0,74.28-47.17c11.12-3.4,24.57-12.59,30.63-36.42C239.63,95.24,244.85,66.1,232.7,50.48ZM92,208A28.12,28.12,0,0,1,88.86,152a8,8,0,1,0-1.76-15.9A43.64,43.64,0,0,0,66.36,144c-8.43.09-22-3.57-27.76-26.26C35.72,106.39,27,71.86,35.94,60.3,37.37,58.46,40.09,56,47,56c27.27,0,73,44.88,73,71.67V180A28,28,0,0,1,92,208ZM217.4,117.74c-5.77,22.69-19.33,26.34-27.77,26.26a43.6,43.6,0,0,0-20.74-7.95,8,8,0,1,0-1.76,15.9A28.11,28.11,0,1,1,136,180V127.67C136,100.88,181.69,56,209,56c6.95,0,9.66,2.46,11.1,4.3C229.05,71.86,220.28,106.39,217.4,117.74Z"
                    fill="currentColor"
                  />
                </svg>
                Mauv
              </h1>
              <FocusMode />
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMenuOpen(false)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Button className="w-full mb-6" size="sm">
            <Mail className="mr-2 h-4 w-4" /> Compose
          </Button>
          <nav>
            <ul className="space-y-2">
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <Inbox className="mr-2 h-4 w-4" /> Inbox
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <Send className="mr-2 h-4 w-4" /> Sent
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <Star className="mr-2 h-4 w-4" /> Important
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <Trash className="mr-2 h-4 w-4" /> Trash
                </Button>
              </li>
            </ul>
            {/* Views section */}
            <ViewsSection
              openModal={openModal}
              selectedViews={selectedViews}
              toggleView={toggleView}
            />
          </nav>
        </div>

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-white border-b p-4 flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search emails..."
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium">Prof. John McCarthy</p>
                <p className="text-xs text-gray-500">CS Department</p>
              </div>
              <Avatar className="h-10 w-10">
                <AvatarImage src="/api/placeholder/40/40" alt="Professor" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="flex-1 flex overflow-hidden">
            {/* Email list */}
            <div className="w-1/3 bg-white border-r overflow-y-auto">
              <ul>
                {filteredEmails
                  .filter(email => !hiddenEmails.includes(email.id))
                  .map((email) => (
                  <li
                    key={email.id}
                    className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                      email.id === selectedEmail.id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => setSelectedEmail(email)}
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={email.avatar} alt={email.sender} />
                        <AvatarFallback>{email.sender[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p
                            className={`truncate font-medium ${
                              email.unread ? "text-gray-900" : "text-gray-600"
                            }`}
                          >
                            {email.sender}
                          </p>
                          <span className="text-xs text-gray-500">10:30 AM</span>
                        </div>
                        <h3
                          className={`text-sm truncate ${
                            email.unread ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {email.subject}
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email content */}
            <EmailDetail 
              email={selectedEmail} 
              onNextEmail={handleNextEmail}
            />
          </div>
        </div>
      </div>
      <Toaster />
    </ToastProvider>
  );
};

export default EmailClient;
