import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import Navbar from "../components/Navbar";
import Register from "~/components/Register";
import Login from "~/components/Login";
import VerifyEmail from "~/components/VerifyEmail";
import InterestsCard from "~/components/InterestsCard";

export default async function Home() {
  // const hello = await api.auth.hello({ text: "from tRPC" });

  return (
    <>
      <Navbar />
      <InterestsCard />
    </>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
