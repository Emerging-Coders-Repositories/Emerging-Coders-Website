import Link from 'next/link';

export const metadata = {
  title: 'Underclassmen Opportunities Guide | Emerging Coders',
  description:
    'A comprehensive guide to software engineering opportunities for first and second-year students at Northwestern.',
};

export default function UnderclassmenInternshipPrograms() {
  return (
    <div className='container mx-auto py-12 px-4 md:px-6 mt-12'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8 text-white'>
          Underclassmen Opportunities Guide
        </h1>

        <p className='text-zinc-400 mb-10'>
          In a saturated computer science market, getting started early in your
          career can give you a significant advantage, setting you up for
          valuable experiences and opening doors to more opportunities in the
          future. At Northwestern, underclassmen have access to a variety of
          resources and programs to build skills, connect with peers and
          professionals, and explore their interests in the tech industry.
        </p>

        <h2 className='text-2xl font-bold text-white mb-5'>
          Campus-Based Opportunities
        </h2>
        <ul className='list-disc pl-6 mb-10 text-zinc-400 space-y-4'>
          <li>
            <span className='font-semi-bold text-zinc-300'>
              Develop and Innovate for Social Change (DISC):{' '}
            </span>
            DISC is a student organization that focuses on using technology for
            social good. DISC hosts workshops during the fall to help teach you
            full-stack development using the latest and modern web technologies.
            During the winter, you can apply for the Discover program, where you
            will have the chance to work on technical projects for non-profits
            in the Evanston and Chicago land areas.
          </li>
          <li>
            <span className='font-semibold text-zinc-300'>
              Northwestern IEEE:{' '}
            </span>
            IEEE NU supports aspiring engineers with workshops, hackathons, and
            hands-on projects, fostering technical growth, teamwork, and
            innovation. It emphasizes collaboration, real-world applications,
            and making a positive impact through engineering.
          </li>
          <li>
            <span className='font-semibold text-zinc-300'>
              Peer Mentorship Programs:{' '}
            </span>
            These programs connect you with mentors in fields related to your
            interests, enabling you to seek guidance, receive constructive
            feedback, and navigate both academic and professional challenges
            effectively.
          </li>
          <li>
            <span className='font-semibold text-zinc-300'>
              Research Opportunities:{' '}
            </span>
            Northwestern&apos;s Office of Undergraduate Research provides
            endless opportunities for students to participate in faculty-led
            projects or design their own research initiatives, offering a robust
            foundation for future academic or professional pursuits.
          </li>
        </ul>

        <p className='text-zinc-400 mb-6'>
          If you want a full list of clubs and organizations on campus at
          Northwestern to explore, you can vist the supported student groups and
          clubs from the Northwestern Computer Science department{' '}
          <Link
            href='https://www.mccormick.northwestern.edu/electrical-computer/students/groups-organizations.html'
            target='_blank'
            className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
          >
            here
          </Link>
        </p>

        <h2 className='text-2xl font-bold text-white mb-5'>
          Conference Opportunities
        </h2>
        <p className='text-zinc-400 mb-5'>
          Conferences help with networking with professionals, recruiters, and
          provide access to several internship opportunities. Notable
          conferences include:
        </p>
        <ul className='list-disc pl-6 mb-10 text-zinc-400 space-y-4'>
          <li>
            <Link
              href='https://tapiaconference.cmd-it.org/'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              Tapia Conference
            </Link>
            <span className='ml-2'>
              — Focused on supporting marginalized groups in technology.
            </span>
          </li>
          <li>
            <Link
              href='https://ghc.anitab.org/'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              Grace Hopper Celebration
            </Link>
            <span className='ml-2'>
              — Dedicated to uplifting women in technology.
            </span>
          </li>
          <li>
            <Link
              href='https://convention.nsbe.org/'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              NSBE/SHPE National Convention
            </Link>
            <span className='ml-2'>
              — Tailored for Hispanic, Latine, and Black engineering students.
            </span>
          </li>
          <li>
            <Link
              href='https://afrotechconference.com/'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              AfroTech
            </Link>
            <span className='ml-2'>
              — Emphasizes diversity and representation in the tech industry.
            </span>
          </li>
        </ul>

        <h2 className='text-2xl font-bold text-white mb-5'>
          Internship and Training Programs
        </h2>
        <ul className='list-disc pl-6 mb-10 text-zinc-400 space-y-4'>
          <li>
            <Link
              href='https://buildyourfuture.withgoogle.com/programs/step'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              Google STEP
            </Link>
            <span className='ml-2'>
              — Opens in August. Real-world projects and mentorship for first-
              and second-year undergraduates.
            </span>
          </li>
          <li>
            <Link
              href='https://www.metacareers.com/careerprograms/pathways/metauniversity'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              Meta University
            </Link>
            <span className='ml-2'>
              — Opens in September. Focus on hands-on experience in software
              engineering and mentorship.
            </span>
          </li>
          <li>
            <Link
              href='https://info.codepath.org/futureforce-tech-launchpad'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              Salesforce Futureforce Tech Launchpad
            </Link>
            <span className='ml-2'>
              — Opens in latest fall. Focuses on full-stack development and
              career preparation.
            </span>
          </li>
          <li>
            <Link
              href='https://www.wayup.com/i-Financial-Services-j-Technology-Internship-Program-Summer-2024-Capital-One-466174007828339/'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              Capital One Technology Internship Program
            </Link>
            <span className='ml-2'>
              — Opens in September. A 10-week program focusing on software
              engineering and professional development.
            </span>
          </li>
          <li>
            <Link
              href='https://www.codepath.org/courses/tech-interview-prep'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              CodePath
            </Link>
            <span className='ml-2'>
              — Rolling admissions. Free courses in industry needs like mobile
              development and interview prep.
            </span>
          </li>
          <li>
            <Link
              href='https://mlt.org/career-prep/'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              Management Leadership of Tomorrow (MLT)
            </Link>
            <span className='ml-2'>
              — Opens in July. Personalized coaching, leadership training, and
              networking.
            </span>
          </li>
          <li>
            <Link
              href='https://www.colorstack.org/'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              ColorStack
            </Link>
            <span className='ml-2'>
              — Rolling admissions. A community for Black/Latine students in
              technology.
            </span>
          </li>
          <li>
            <Link
              href='https://careers.microsoft.com/v2/global/en/exploremicrosoft'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              Microsoft Explore Program
            </Link>
            <span className='ml-2'>
              — Opens in September. A 12-week program focusing on engineering
              fundamentals and team projects.
            </span>
          </li>
          <li>
            <Link
              href='https://www.uber.com/us/en/careers/uberstar/'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              Uber Star Program
            </Link>
            <span className='ml-2'>
              — Opens in September. A 12-week summer internship providing
              engineering experience.
            </span>
          </li>
          <li>
            <Link
              href='https://blog.duolingo.com/duolingo-thrive-intern-program/'
              target='_blank'
              className='text-purple-300 hover:text-purple-300 hover:underline font-medium'
            >
              Duolingo Thrive
            </Link>
            <span className='ml-2'>
              — Opens in September. Focused on software engineering experience
              and mentorship.
            </span>
          </li>
        </ul>

        <h2 className='text-2xl font-bold text-white mb-5'>Getting Started</h2>
        <p className='text-zinc-400 mb-5'>
          Guides or steps to obtain the internships and training programs above
          begin with building a strong foundation in programming and technical
          skills. Here&apos;s a step-by-step approach:
        </p>
        <ul className='list-disc pl-6 mb-10 text-zinc-400 space-y-6'>
          <li>
            <span className='font-semibold text-zinc-300'>
              Learn Programming to a Comfortable Level:{' '}
            </span>
            Begin by mastering at least one programming language commonly used
            in technical interviews, such as Python, C++, or Java. At
            Northwestern, this can be achieved by taking courses like CS 150, CS
            211, and CS 111. While self-studying is an option, these structured
            courses provide a comprehensive and guided approach. Focus on
            writing clean, efficient code and understanding foundational
            programming concepts thoroughly.
          </li>
          <li>
            <span className='font-semibold text-zinc-300'>
              Master Foundational Data Structures and Algorithms:{' '}
            </span>
            A solid grasp of data structures and algorithms is critical for
            technical interviews. As an underclassman, focus on the following
            foundational topics to gain a significant edge:
            <ul className='list-disc pl-6 mt-2 space-y-1'>
              <li>Big-O Analysis</li>
              <li>Lists</li>
              <li>Stacks and Queues</li>
              <li>Trees and Graphs</li>
              <li>Sets and Hashes/Maps</li>
              <li>Strings</li>
            </ul>
            <span className='block mt-2'>
              Courses like CS 214 are especially helpful for mastering these
              areas.
            </span>
          </li>
          <li>
            <span className='font-semibold text-zinc-300'>
              Practice Problem-Solving Skills:{' '}
            </span>
            Understanding concepts is one thing; applying them to solve problems
            effectively is another. Use platforms like LeetCode, HackerRank, or
            CodeSignal to practice problem-solving. Start with easy problems,
            then gradually tackle medium and hard problems to build confidence.
            Additionally, familiarize yourself with common interview question
            types and practice articulating your solutions through mock
            interviews. Learning to communicate your thought process is as
            important as solving the problem.
          </li>
          <li>
            <span className='font-semibold text-zinc-300'>
              Leverage Resources for Interview Preparation:{' '}
            </span>
            Take advantage of Northwestern&apos;s career services, Emerging
            Coders workshops, and mentorship programs to prepare for interviews.
            Attend events offering mock interviews or technical prep sessions to
            build confidence and improve your skills.
          </li>
        </ul>

        <div className='mt-16 pt-6 border-t border-zinc-800 text-xs text-zinc-600'>
          Last updated: March 24th, 2025 by Ethan Pineda
        </div>
      </div>
    </div>
  );
}
