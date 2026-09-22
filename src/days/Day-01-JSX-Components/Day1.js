import ProfileHeader from "./ProfileHeader";
import ProfileCard from "./ProfileCard";
import ProfileFooter from "./ProfileFooter";

function Day1() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">

      <ProfileHeader />

      <div className="flex justify-center">
        <ProfileCard />
      </div>

      <ProfileFooter />

    </main>
  );
}

export default Day1;