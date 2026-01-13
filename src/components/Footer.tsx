import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Challenge Logo" className="h-10 w-10 object-contain" />
              <span className="font-semibold text-foreground">MultiBypass 2026</span>
            </div>
            <p className="text-sm text-muted-foreground">
              MultiBypass Surgical Action Triplet Challenge at MICCAI 2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/challenge" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Challenge Details
              </Link>
              <Link to="/dataset" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Dataset
              </Link>
              <Link to="/submission" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                How to Submit
              </Link>
              <Link to="/leaderboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Leaderboard
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              For inquiries, please contact us at:
            </p>
            <a
              href="mailto:multibypass2026@miccai.org"
              className="text-sm text-primary hover:underline"
            >
              multibypass2026@miccai.org
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 MultiBypass Surgical Action Triplet Challenge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
