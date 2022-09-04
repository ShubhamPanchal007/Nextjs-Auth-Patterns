import Login from "../Components/Login";
import { useSession, signOut } from "next-auth/react";
export default function Home() {
  // The useSession() React Hook in the NextAuth.js client is the easiest way to check if someone is signed in.
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      {session ? (
        <div>
          Welcome {session.user.name}, logout if you want{" "}
          <p>your Email: {session.user.email}</p>
          <p>
            your pitcure:
            <img
              src={session.user.image}
              height={50}
              width={50}
              alt={"image"}
            />
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut({ redirect: false });
            }}
          >
            SignOut
          </button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
