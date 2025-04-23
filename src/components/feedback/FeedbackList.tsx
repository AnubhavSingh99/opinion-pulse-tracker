
import { useState } from "react";
import { Search, Star, StarOff } from "lucide-react";
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeedbackList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  
  // Mock feedback data
  const feedbackItems = [
    {
      id: 1,
      customer: "Sarah Johnson",
      email: "sarah.j@example.com",
      message: "The new dashboard feature is amazing! It's so much easier to track my metrics now.",
      rating: 5,
      date: "2025-04-21",
      status: "resolved",
      category: "Feature"
    },
    {
      id: 2,
      customer: "Michael Chen",
      email: "m.chen@example.com",
      message: "I'm having trouble exporting my data to CSV. The button doesn't seem to work.",
      rating: 2,
      date: "2025-04-20",
      status: "pending",
      category: "Bug"
    },
    {
      id: 3,
      customer: "Alex Rodriguez",
      email: "a.rodriguez@example.com",
      message: "Would it be possible to add dark mode to the application? It would help reduce eye strain.",
      rating: 4,
      date: "2025-04-19",
      status: "in-progress",
      category: "Suggestion"
    },
    {
      id: 4,
      customer: "Emma Wilson",
      email: "emma.w@example.com",
      message: "The mobile responsiveness could be improved. Some elements overlap on smaller screens.",
      rating: 3,
      date: "2025-04-18",
      status: "pending",
      category: "Bug"
    },
    {
      id: 5,
      customer: "James Smith",
      email: "james.s@example.com",
      message: "Love the customer support! Had my issue resolved within hours.",
      rating: 5,
      date: "2025-04-17",
      status: "resolved",
      category: "Support"
    }
  ];
  
  // Filter and search logic
  const filteredFeedback = feedbackItems.filter(item => {
    const matchesSearch = item.message.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || item.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "resolved":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Resolved</Badge>;
      case "in-progress":
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">In Progress</Badge>;
      case "pending":
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />);
      } else {
        stars.push(<StarOff key={i} className="h-4 w-4 text-slate-300" />);
      }
    }
    return <div className="flex items-center">{stars}</div>;
  };
  
  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search feedback..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-auto">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {filteredFeedback.length > 0 ? (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden md:table-cell">Feedback</TableHead>
                <TableHead className="hidden sm:table-cell">Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden lg:table-cell">Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFeedback.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{item.customer}</p>
                      <p className="text-xs text-muted-foreground">{item.email}</p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell max-w-[300px]">
                    <p className="truncate">{item.message}</p>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {renderStars(item.rating)}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(item.status)}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-muted-foreground">
                    {new Date(item.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-10 text-muted-foreground">
          No feedback found matching your criteria
        </div>
      )}
    </Card>
  );
};

export default FeedbackList;
