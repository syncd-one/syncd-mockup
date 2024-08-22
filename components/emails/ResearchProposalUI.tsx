import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MessageCircle, FileText, Check, X } from "lucide-react";

const ResearchProposal = () => (
  <div className="space-y-6">
    <header className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/api/placeholder/48/48" alt="Dr. Emily Smith" />
          <AvatarFallback>ES</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold">Research Proposal Approval</h2>
          <p className="text-gray-600">From Dr. Emily Smith</p>
        </div>
      </div>
      <Badge variant="secondary">Urgent</Badge>
    </header>

    <section className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center space-x-2">
          <FileText className="h-4 w-4 text-blue-500" />
          <span>Climate Change Impact on Urban Agriculture</span>
        </div>
        <div className="flex items-center space-x-2">
          <FileText className="h-4 w-4 text-green-500" />
          <span>Timeline: 9 months</span>
        </div>
        <div className="flex items-center space-x-2">
          <FileText className="h-4 w-4 text-purple-500" />
          <span>Budget: $25,000</span>
        </div>
      </div>
    </section>

    <section className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">Approval Progress</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Department Head</span>
          <Badge variant="outline" className="bg-green-100">
            Approved
          </Badge>
        </div>
        <div className="flex justify-between">
          <span>Ethics Committee</span>
          <Badge variant="outline" className="bg-green-100">
            Approved
          </Badge>
        </div>
        <div className="flex justify-between">
          <span>You</span>
          <Badge variant="outline" className="bg-gray-100">
            Action Needed
          </Badge>
        </div>
      </div>
      <Progress value={66} className="mt-4" />
    </section>

    <footer className="flex justify-between items-center">
      <Button variant="outline" size="sm">
        <MessageCircle className="mr-2 h-4 w-4" />
        Request Meeting
      </Button>
      <div className="space-x-2">
        <Button variant="destructive" size="sm">
          <X className="mr-2 h-4 w-4" />
          Decline
        </Button>
        <Button variant="default" size="sm">
          <Check className="mr-2 h-4 w-4" />
          Approve
        </Button>
      </div>
    </footer>
  </div>
);

export default ResearchProposal;
