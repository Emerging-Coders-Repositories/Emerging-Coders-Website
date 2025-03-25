import InternshipsComponent from "@/pages/opportunities/swe-internships/swe-internships-oppurtunities";

export const metadata = {
  title: "Software Engineering Internships",
  description:
    "Browse the latest software engineering internships for Summer 2024.",
};

export default function InternshipsPage() {
  return (
    <div className="min-h-screen">
      <InternshipsComponent />
    </div>
  );
}
