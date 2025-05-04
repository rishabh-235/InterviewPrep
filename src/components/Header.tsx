import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./Container";
import { LogoContainer } from "./LogoContainer";
import { Navigator } from "./Navigator";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./ProfileContainer";
import { ToggleContainer } from "./ToggleContainer";

export const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full border-b  duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/* Left section */}
          <LogoContainer />

          {/* Middle section */}
          <nav className="hidden md:flex items-center gap-3">
            <Navigator />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>

          {/* Right section */}
          <div className="ml-auto flex items-center gap-6">
            {/* Profile section */}
            <ProfileContainer />

            {/* toggler */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};
