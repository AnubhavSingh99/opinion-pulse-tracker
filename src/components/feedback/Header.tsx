
import { MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-indigo-600" />
            <h1 className="text-xl font-semibold tracking-tight">Feedback Manager</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Admin Panel</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
