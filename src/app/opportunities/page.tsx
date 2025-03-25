import InternshipsComponent from "@/components/opportunities/swe-internships/swe-internships-oppurtunities";

export const metadata = {
  title: "Software Engineering Internships",
  description:
    "Browse the latest software engineering internships for Summer 2025.",
};

export default function InternshipsPage() {
  return (
    <div className="min-h-screen max-w-9/12 mx-auto mt-24">
      <InternshipsComponent />
    </div>
  );
}
