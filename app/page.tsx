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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EmailDetail from "@/components/EmailDetails";
import ViewsSection from "@/components/ViewsSection";
import ViewSettingsModal from "@/components/ViewSettingsModal";
import { allEmails, viewCodes } from "@/lib/emails";

const EmailClient = () => {
  const [selectedEmail, setSelectedEmail] = useState(allEmails[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedViews, setSelectedViews] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState("");
  const [filteredEmails, setFilteredEmails] = useState(allEmails);

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
        <div className="flex items-center justify-center mb-8">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-purple-600 flex items-center">
              <Coffee className="mr-2 h-6 w-6" />
              Syncd
            </h1>
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
              {filteredEmails.map((email) => (
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
          <EmailDetail email={selectedEmail} />
        </div>
      </div>
    </div>
  );
};

export default EmailClient;
