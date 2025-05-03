""" Complete page.tsx code for the dashboard (same as earlier) """
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const allLeads = [
  {
    name: "Rajesh Kumar",
    phone: "9876543210",
    stage: "Potential",
    source: "Website",
    project: "KDMG Heights",
    leadOwner: "Anjali Mehra",
    nextFollowUp: "2025-05-05",
    score: 80,
    contactTime: "Morning",
    channel: "Call"
  },
  {
    name: "Priya Verma",
    phone: "9876500000",
    stage: "Site Visit Scheduled",
    source: "Broker",
    project: "Green Villas",
    leadOwner: "Suresh Rana",
    nextFollowUp: "2025-05-04",
    score: 60,
    contactTime: "Afternoon",
    channel: "WhatsApp"
  },
  {
    name: "Amit Singh",
    phone: "9876522222",
    stage: "Hot Lead",
    source: "Facebook",
    project: "Urban Nest",
    leadOwner: "Neha Sharma",
    nextFollowUp: "2025-05-06",
    score: 90,
    contactTime: "Evening",
    channel: "Email"
  },
];

export default function CRMKDMGDashboard() {
  const [selectedStage, setSelectedStage] = useState("");
  const [sortKey, setSortKey] = useState("");

  let filteredLeads = selectedStage
    ? allLeads.filter((lead) => lead.stage === selectedStage)
    : allLeads;

  if (sortKey === "score") {
    filteredLeads = [...filteredLeads].sort((a, b) => b.score - a.score);
  } else if (sortKey === "nextFollowUp") {
    filteredLeads = [...filteredLeads].sort((a, b) => new Date(a.nextFollowUp) - new Date(b.nextFollowUp));
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">KDMG CRM Dashboard</h1>
      <Tabs defaultValue="leads">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="site-visits">Site Visits</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="post-sales">Post Sales</TabsTrigger>
        </TabsList>

        <TabsContent value="leads">
          <Card className="mt-4">
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center gap-4 flex-wrap">
                <Input placeholder="Search by name or phone..." className="w-full md:w-1/4" />
                <Select onValueChange={setSelectedStage} value={selectedStage}>
                  <SelectTrigger className="w-full md:w-1/4">
                    <span>{selectedStage || "Filter by Stage"}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All</SelectItem>
                    <SelectItem value="Potential">Potential</SelectItem>
                    <SelectItem value="Hot Lead">Hot Lead</SelectItem>
                    <SelectItem value="Site Visit Scheduled">Site Visit Scheduled</SelectItem>
                  </SelectContent>
                </Select>
                <Select onValueChange={setSortKey} value={sortKey}>
                  <SelectTrigger className="w-full md:w-1/4">
                    <span>{sortKey || "Sort By"}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">None</SelectItem>
                    <SelectItem value="score">Lead Score</SelectItem>
                    <SelectItem value="nextFollowUp">Next Follow-Up</SelectItem>
                  </SelectContent>
                </Select>
                <Button>Add Lead</Button>
              </div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Stage</TableCell>
                    <TableCell>Lead Owner</TableCell>
                    <TableCell>Next Follow-Up</TableCell>
                    <TableCell>Score</TableCell>
                    <TableCell>Preferred Time</TableCell>
                    <TableCell>Channel</TableCell>
                    <TableCell>Source</TableCell>
                    <TableCell>Project</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredLeads.map((lead, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{lead.name}</TableCell>
                      <TableCell>{lead.phone}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{lead.stage}</Badge>
                      </TableCell>
                      <TableCell>{lead.leadOwner}</TableCell>
                      <TableCell>{lead.nextFollowUp}</TableCell>
                      <TableCell>{lead.score}</TableCell>
                      <TableCell>{lead.contactTime}</TableCell>
                      <TableCell>{lead.channel}</TableCell>
                      <TableCell>{lead.source}</TableCell>
                      <TableCell>{lead.project}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card className="mt-4">
            <CardContent>
              <p>Project data and inventory will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="site-visits">
          <Card className="mt-4">
            <CardContent>
              <p>Schedule and track site visits here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card className="mt-4">
            <CardContent>
              <p>Manage customer payment details and milestones.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card className="mt-4">
            <CardContent>
              <p>Upload and manage customer documents.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="post-sales">
          <Card className="mt-4">
            <CardContent>
              <p>Track possession, service requests, and handover details.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
