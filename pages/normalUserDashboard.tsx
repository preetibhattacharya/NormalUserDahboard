import React from 'react';
import { Button } from '../src/components/ui/button';
import { Card, CardHeader, CardContent } from '../src/components/ui/card';
import { MapPin, Bell, FileText } from 'lucide-react';

const NormalUserDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Navigation Sidebar */}
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold">SCADA Network Tool</h2>
        </div>
        <ul className="mt-4">
          {['Topology Mapping', 'Reports & Analytics'].map((item) => (
            <li key={item} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">{item}</li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Button className="h-16 text-lg"><MapPin className="mr-2" /> View Topology</Button>
          <Button className="h-16 text-lg"><Bell className="mr-2" /> View Alerts</Button>
          <Button className="h-16 text-lg"><FileText className="mr-2" /> Generate Report</Button>
        </div>

        {/* Recent Reports Section */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Recent Reports</h2>
          </CardHeader>
          <CardContent>
            <ul>
              <li className="mb-2 text-blue-600 cursor-pointer hover:underline">Network Performance Report - June 2024</li>
              <li className="mb-2 text-blue-600 cursor-pointer hover:underline">Monthly Security Audit - May 2024</li>
              <li className="text-blue-600 cursor-pointer hover:underline">Quarterly Topology Changes - Q2 2024</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NormalUserDashboard;