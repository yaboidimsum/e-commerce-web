import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  // It gets the user from the kindeserver session
  const { getUser } = getKindeServerSession();
  //user is saved in the variable
  const user = await getUser();
  // check user email if it is the admin email
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 flex font-semibold">
            Case <span className="text-green-600">Cobra</span>
          </Link>
          <div className="flex h-full items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign Out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/api/auth/logout"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard✨
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "itemss-center hidden gap-1 sm:flex",
                  })}
                >
                  Create Case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign Up
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>
                <div className="hidden h-6 w-px bg-zinc-200 sm:block" />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "itemss-center hidden gap-1 sm:flex",
                  })}
                >
                  Create Case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
