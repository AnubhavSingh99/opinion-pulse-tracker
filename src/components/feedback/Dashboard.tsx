
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, BarChart, TrendingUp, MessageCircle } from "lucide-react";

const Dashboard = () => {
  // Mocked data for the dashboard
  const feedbackStats = {
    total: 243,
    positive: 168,
    negative: 42,
    neutral: 33,
    recentSubmissions: 18,
    responseRate: 82,
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Feedback</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{feedbackStats.total}</div>
            <p className="text-xs text-muted-foreground">
              +{feedbackStats.recentSubmissions} in the last 7 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{feedbackStats.responseRate}%</div>
            <div className="h-4 w-full bg-slate-100 rounded-full mt-2">
              <div 
                className="h-4 bg-green-500 rounded-full" 
                style={{ width: `${feedbackStats.responseRate}%` }}
              ></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sentiment</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Positive</span>
              <span>Neutral</span>
              <span>Negative</span>
            </div>
            <div className="flex h-2 w-full">
              <div 
                className="h-2 bg-green-500 rounded-l" 
                style={{ width: `${(feedbackStats.positive / feedbackStats.total) * 100}%` }}
              ></div>
              <div 
                className="h-2 bg-blue-300" 
                style={{ width: `${(feedbackStats.neutral / feedbackStats.total) * 100}%` }}
              ></div>
              <div 
                className="h-2 bg-red-500 rounded-r" 
                style={{ width: `${(feedbackStats.negative / feedbackStats.total) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm font-medium">{Math.round((feedbackStats.positive / feedbackStats.total) * 100)}%</span>
              <span className="text-sm font-medium">{Math.round((feedbackStats.neutral / feedbackStats.total) * 100)}%</span>
              <span className="text-sm font-medium">{Math.round((feedbackStats.negative / feedbackStats.total) * 100)}%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-xl font-bold tracking-tight mt-10">Recent Activity</h3>
      <div className="rounded-lg border bg-white p-6">
        <div className="rounded-md bg-slate-50 p-4 text-center text-sm text-muted-foreground">
          <BarChart className="mx-auto h-10 w-10 text-slate-400" />
          <p className="mt-2">Connect to your MongoDB database to display real feedback data</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
