import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NavLink({ to, children }) {
  return (
    <Link component={RouterLink} to={to} color="inherit" underline="none">
      {children}
    </Link>
  );
}
