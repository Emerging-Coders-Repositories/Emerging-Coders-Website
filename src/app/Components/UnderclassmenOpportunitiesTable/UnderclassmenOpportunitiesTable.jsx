import React from "react";
import { Link } from "@nextui-org/react";

export default function UnderclassmenOpportunities() {
  return (
    <section className="mb-8 mt-10">
      <div className="max-w-3xl mx-auto text-left">
        <h3 className="text-3xl font-bold mb-5">
          Underclassmen Opportunities Guide
        </h3>

        <div className="flex justify-center my-8">
          <div className="block max-w-3xl p-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ✋ Hey! This guide is primarily designed for current first-years and second years! Much of
              the information shared in this guide is based on anecdotal experiences
              from members and alumni of our community, which we’ve found to be
              effective for most folks within our network.
              <br />
              <br />
              If you have suggestions, comments, or ideas for improvements, please feel
              free to make a PR on the{" "}
              <Link
                showAnchorIcon
                href="https://github.com/Emerging-Coders-Repositories/Emerging-Coders-Website"
                target="_blank"
                color="secondary"
              >
                Emerging Coders Website Repo
              </Link>
              .
            </p>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-400 mb-10">
          In a saturated computer science market, getting started early in your
          career can give you a significant advantage, setting you up for
          valuable experiences and opening doors to more opportunities in the
          future. At Northwestern, underclassmen have access to a variety of
          resources and programs to build skills, connect with peers and
          professionals, and explore their interests in the tech industry.
        </p>

        <h4 className="text-2xl font-bold text-gray-900 mb-5">
          Campus-Based Opportunities
        </h4>
        <ul className="list-disc pl-6 mb-10">
          <li className="mb-3">
            <strong>Northwestern IEEE: </strong>
            IEEE NU supports aspiring engineers with workshops, hackathons, and
            hands-on projects, fostering technical growth, teamwork, and
            innovation. It emphasizes collaboration, real-world applications,
            and making a positive impact through engineering.
          </li>
          <li className="mb-3">
            <strong>Peer Mentorship Programs:</strong> These programs connect you with
            mentors in fields related to your interests, enabling you to seek
            guidance, receive constructive feedback, and navigate both academic
            and professional challenges effectively.
          </li>
          <li className="mb-3">
            <strong>Research Opportunities:</strong> Northwestern’s Office of
            Undergraduate Research provides endless opportunities for students
            to participate in faculty-led projects or design their own research
            initiatives, offering a robust foundation for future academic or
            professional pursuits.
          </li>
        </ul>

        <h4 className="text-2xl font-bold text-gray-900 mb-5">
          Conference Opportunities
        </h4>
        <p className="text-gray-700 dark:text-gray-400 mb-5">
          Conferences help with networking with professionals, recruiters, and
          provide access to several internship opportunities. Notable
          conferences include:
        </p>
        <ul className="list-disc pl-6 mb-10">
          <li className="mb-3">
            <Link showAnchorIcon href="https://tapiaconference.cmd-it.org/" color="secondary" target="_blank" size="lg">
              Tapia Conference:
            </Link>{" "}
            Focused on supporting marginalized groups in technology.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://ghc.anitab.org/" color="secondary" target="_blank" size="lg">
              Grace Hopper Celebration:
            </Link>{" "}
            Dedicated to uplifting women in technology.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://convention.nsbe.org/" color="secondary" target="_blank" size="lg">
              NSBE/SHPE National Convention:
            </Link>{" "}
            Tailored for Hispanic, Latine, and Black engineering students.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://afrotechconference.com/" color="secondary" target="_blank" size="lg">
              AfroTech:
            </Link>{" "}
            Emphasizes diversity and representation in the tech industry.
          </li>
        </ul>

        <h4 className="text-2xl font-bold text-gray-900 mb-5">
          Internship and Training Programs
        </h4>
        <ul className="list-disc pl-6 mb-10">
          <li className="mb-3">
            <Link showAnchorIcon href="https://buildyourfuture.withgoogle.com/programs/step" color="secondary" target="_blank" size="lg">
              Google STEP:
            </Link>{" "}
            Opens in August. Real-world projects and mentorship for first- and
            second-year undergraduates.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://www.metacareers.com/careerprograms/pathways/metauniversity" color="secondary" target="_blank" size="lg">
              Meta University:
            </Link>{" "}
            Opens in September. Focus on hands-on experience in software
            engineering and mentorship.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://info.codepath.org/futureforce-tech-launchpad" color="secondary" target="_blank" size="lg">
              Salesforce Futureforce Tech Launchpad:
            </Link>{" "}
            Opens in August. Focuses on full-stack development and career
            preparation.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://www.codepath.org/courses/tech-interview-prep" color="secondary" target="_blank" size="lg">
              CodePath:
            </Link>{" "}
            Rolling admissions. Free courses in industry needs like mobile
            development and interview prep.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://mlt.org/career-prep/" color="secondary" target="_blank" size="lg">
              Management Leadership of Tomorrow (MLT):
            </Link>{" "}
            Opens in July. Personalized coaching, leadership training, and
            networking.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://careers.microsoft.com/v2/global/en/exploremicrosoft" color="secondary" target="_blank" size="lg">
              Microsoft Explore Program:
            </Link>{" "}
            Opens in September. A 12-week program focusing on engineering
            fundamentals and team projects.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://www.amazon.jobs/en/jobs/2808739/software-development-engineer-internship-2025-us" color="secondary" target="_blank" size="lg">
              Amazon Propel:
            </Link>{" "}
            Opens in August. A mentorship-driven program exploring careers at
            Amazon.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://www.uber.com/us/en/careers/uberstar/" color="secondary" target="_blank" size="lg">
              Uber Star Program:
            </Link>{" "}
            Opens in September. A 12-week summer internship providing
            engineering experience.
          </li>
          <li className="mb-3">
            <Link showAnchorIcon href="https://blog.duolingo.com/duolingo-thrive-intern-program/" color="secondary" target="_blank" size="lg">
              Duolingo Thrive:
            </Link>{" "}
            Opens in September. Focused on software engineering experience and
            mentorship.
          </li>
        </ul>

        <h4 className="text-2xl font-bold text-gray-900 mb-5">Getting Started</h4>
        <p className="text-gray-700 dark:text-gray-400 mb-5">
          Guides or steps to obtain the internships and training programs above
          begin with building a strong foundation in programming and technical
          skills. Here’s a step-by-step approach:
        </p>
        <ul className="list-disc pl-6 mb-10">
          <li className="mb-5">
            <strong>Learn Programming to a Comfortable Level:</strong> 
            Begin by mastering at least one programming language commonly used in
            technical interviews, such as Python, C++, or Java. At Northwestern,
            this can be achieved by taking courses like CS 150, CS 211, and CS 111.
            While self-studying is an option, these structured courses provide a
            comprehensive and guided approach. Focus on writing clean, efficient
            code and understanding foundational programming concepts thoroughly.
          </li>
          <li className="mb-5">
            <strong>Master Foundational Data Structures and Algorithms:</strong> 
            A solid grasp of data structures and algorithms is critical for
            technical interviews. As an underclassman, focus on the following
            foundational topics to gain a significant edge:
            <ul className="list-disc pl-6">
              <li className="mb-2">Big-O Analysis</li>
              <li className="mb-2">Lists</li>
              <li className="mb-2">Stacks and Queues</li>
              <li className="mb-2">Trees and Graphs</li>
              <li className="mb-2">Sets and Hashes/Maps</li>
              <li>Strings</li>
            </ul>
            Courses like CS 214 are especially helpful for mastering these areas.
          </li>
          <li className="mb-5">
            <strong>Practice Problem-Solving Skills:</strong> 
            Understanding concepts is one thing; applying them to solve problems
            effectively is another. Use platforms like LeetCode, HackerRank, or
            CodeSignal to practice problem-solving. Start with easy problems, then
            gradually tackle medium and hard problems to build confidence. 
            Additionally, familiarize yourself with common interview question types
            and practice articulating your solutions through mock interviews.
            Learning to communicate your thought process is as important as
            solving the problem.
          </li>
          <li>
            <strong>Leverage Resources for Interview Preparation:</strong> 
            Take advantage of Northwestern’s career services, Emerging Coders
            workshops, and mentorship programs to prepare for interviews. Attend
            events offering mock interviews or technical prep sessions to build
            confidence and improve your skills.
          </li>
        </ul>
      </div>
    </section>
  );
}
