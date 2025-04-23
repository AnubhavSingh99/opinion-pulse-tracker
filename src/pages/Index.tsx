
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from "@/components/feedback/Dashboard";
import FeedbackList from "@/components/feedback/FeedbackList";
import SubmitFeedback from "@/components/feedback/SubmitFeedback";
import Header from "@/components/feedback/Header";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-6">
            <TabsList className="grid grid-cols-3 w-[400px]">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="submit">Submit</TabsTrigger>
            </TabsList>
            
            {activeTab === "feedback" && (
              <Button variant="outline">Export Data</Button>
            )}
          </div>
          
          <TabsContent value="dashboard" className="mt-6">
            <Dashboard />
          </TabsContent>
          
          <TabsContent value="feedback" className="mt-6">
            <FeedbackList />
          </TabsContent>
          
          <TabsContent value="submit" className="mt-6">
            <SubmitFeedback />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="border-t mt-12 py-6 text-center text-muted-foreground">
        <p>© 2025 Feedback Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
