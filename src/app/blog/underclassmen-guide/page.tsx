import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  firstYearSchedule,
  secondYearSchedule,
  underclassmenGuideAccordionItems as accordionItems,
} from "@/constants/underclassmen-guide";
import type { ClassSchedule } from "@/types/schedule";

export const metadata = {
  title: "Northwestern Computer Science Underclassmen Guide | Emerging Coders",
  description:
    "A comprehensive guide for Northwestern University computer science underclassmen to navigate the computer science major, course selection, and career development",
};
export default function NorthwesternComputerScienceUnderlcassmenGuide() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 mt-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Northwestern University CS Underclassmen Guide
        </h1>
        <p className="text-zinc-400 mb-10">
          Author:{" "}
          <Link
            href="https://www.linkedin.com/in/ethanpineda/"
            target="_blank"
            className="text-purple-300 hover:text-purple-300 hover:underline font-medium"
          >
            Ethan Pineda
          </Link>
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-5">Introduction</h2>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-5">
              How to Use This Guide
            </h3>
            <p className="text-zinc-400 mb-5">
              The purpose of this guide is to provide additional context and
              guidance when it comes to navigating the Computer Science major at
              Northwestern. The department already provides lots of resources,
              guides, and opportunities for students to succeed, but we wanted
              to provide a more personal and condensed guide that is based on
              the experiences of our members and alumni. This guide by no means
              is perfect to every situation, interest, or path that you may
              embark on during your time at Northwestern but, if you someone
              that is completely new to Computer Science (like many of us were),
              or you don&apos;t have someone to ask questions to, we hope that
              this guide can help you out with answering some of your questions.
              Keep in mind also that this guide is mostly geared for those
              wanting to enter <strong>industry</strong> after graduation. A
              more detailed version for folks interested in graduate school will
              be coming soon!
              <br />
              <br />
              <strong>NOTE:</strong> This guide was built on the requirements
              for the Computer Science Major from the 2023-2024 Academic Year.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-5">
              What this Guide Covers
            </h3>
            <p className="text-zinc-400 mb-5">
              There are 3 main sections with various subsections to each topic
              to this guide:
            </p>
            <ul className="list-disc pl-6 text-zinc-400 space-y-2">
              <li>Should I Pursue a CS major?</li>
              <li>What is the CS major like at Northwestern?</li>
              <li>What should I do to prepare for a career in tech</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mb-10">
            Now let&apos;s get started!
          </h2>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-5">
            Should I Pursue a CS major?
          </h2>
          <p className="text-zinc-400 mb-10">
            Before we say anything, ultimately the decision to pursue a Computer
            Science degree is going to be up to you. Again, a lot of this advice
            in this guide is subjective and your mileage may vary, so take
            everything with a grain of salt.
          </p>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-5">
              What is Computer Science?
            </h3>
            <p className="text-zinc-400 mb-5">
              In simple terms, Computer science is like a magical world of
              instructions and thinking for computers. It&apos;s all about
              teaching computers how to do cool stuff. Just like you learn math
              and languages in school, computer scientists learn how to talk to
              computers. Imagine you have a really smart robot friend, and you
              want to tell it what to do. Computer science helps you do that.
              You can tell the robot to play your favorite game, draw pictures,
              solve math problems, or even talk to your friends on the internet.
              <br />
              <br />
              Here are some important things in computer science:
            </p>
            <ul className="list-disc pl-6 text-zinc-400 space-y-2 mb-6">
              <li>
                <strong>Coding: </strong> This is like giving instructions to
                your robot friend. You use special languages (like C, Python, or
                JavaScript) to write these instructions. It&apos;s like creating
                a recipe for the robot to follow.
              </li>
              <li>
                <strong>Algorithms: </strong>Think of this as a plan or a recipe
                for your robot. It&apos;s a step-by-step guide on how to solve a
                problem, like finding the best way to get from your house to the
                park.
              </li>
              <li>
                <strong>Data: </strong>This is like information that the robot
                needs to remember. It could be your favorite game scores, your
                friends&apos; names, or anything else. Computer scientists
                figure out how to store and use this data.
              </li>
              <li>
                <strong>Hardware: </strong> These are the physical parts of a
                computer, like the screen, keyboard, and memory. Computer
                scientists design and build these parts to make computers work.
              </li>
              <li>
                <strong>Software: </strong>This is like the apps and programs
                you use on your computer or tablet. Computer scientists create
                software to do all kinds of fun and useful things.
              </li>
            </ul>
            <p className="text-zinc-400">
              Computer science is like a big playground where you can create,
              explore, and solve puzzles with computers. It&apos;s not just
              about playing games but also about making the world a better place
              by solving real-world problems. So, if you&apos;re curious and
              love to learn, computer science can be a fantastic adventure for
              you!
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-5">
              Why Computer Science?
            </h3>
            <p className="text-zinc-400 mb-5">
              Pursuing a degree in computer science offers not only promising
              career prospects but also the chance to make a meaningful impact
              on the world through innovation and problem-solving. It&apos;s a
              field that rewards curiosity, adaptability, and a passion for
              learning. A Computer Science degree is very versatile and the
              skills that you learn in a CS degree can be applied to a wide
              variety of fields and industries. You don&apos;t have to become a
              software engineer after graduation, you can become a data
              scientist, a product manager, a UX designer, a technical writer, a
              technical recruiter, and so much more!
              <br />
              <br />
              Of course, if you choose to work in technology, you&apos;ll be
              joining a fast-growing industry with a lot of opportunities for
              career growth and advancement. The tech industry is also known for
              it&apos;s competitive salaries and benefits, as well as its
              flexible work arrangements.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-5">
            What is the CS major like at Northwestern?
          </h2>
          <p className="text-zinc-400 mb-10">
            The Computer Science major at Northwestern is a very diverse and
            versatile major. Because of the quarter system, its possible to take
            classes in a variety of different fields and topics in CS from
            systems/hardware, game development, human-computer interaction,
            artificial intelligence, and theory. Depending on your planning and
            how many credits you come into Northwestern with, it&apos;s even
            possible to double major or minor in another field or even graduate
            with a{" "}
            <Link
              href="https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/combined-bs-ba-ms-program.html"
              target="_blank"
              className="text-purple-300 hover:text-purple-300 hover:underline font-medium"
            >
              Masters in Computer Science in 4 years
            </Link>
            .
          </p>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-white mb-5">
              What are the requirements for the CS major?
            </h3>
            <p className="text-zinc-400 mb-6">
              The Computer Science Department already has a{" "}
              <Link
                href="https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/bachelors/#bs-ba-curriculum"
                target="_blank"
                className="text-purple-300 hover:text-purple-300 hover:underline font-medium"
              >
                general overview of the curriculum
              </Link>{" "}
              that you could use to get a better understanding of the
              requirements for the major.
              <br />
              <br />
              But, the curriculum can be broken down into the following:
            </p>

            <div className="max-w-4xl mx-auto">
              <Accordion
                type="single"
                collapsible
                className="mb-10 w-11/12 mx-auto"
              >
                {accordionItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-zinc-900 border-b last:border-b-0"
                  >
                    <AccordionTrigger className="text-white/90 font-bold">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <h3 className="text-xl font-bold text-white my-10 mb-5">
              Okay, but what does this all mean?
            </h3>
            <p className="text-zinc-400 mb-10">
              This is a lot of information! And for the most part, a lot of this
              information you could have just found online through the
              department website. Let&apos;s now break down some of the
              components of the major and what they mean.
            </p>

            <h3 className="text-xl font-bold text-white mb-5">
              Should I do a BA or BS in Computer Science?
            </h3>
            <p className="text-zinc-400 mb-10">
              If you choose to pursue Computer Science in either McCormick or
              Weinberg, the difference is only in the classes that you need to
              take outside of Computer Science (your graduation requirements)
              albeit, some of the specific math classes are different between
              the two schools. But, in terms of just Computer Science classes,
              both degrees have the <strong>same</strong> requirements.
              <br />
              <br />
              The McCormick version of Computer Science is more geared towards
              students who want to learn more about the &quot;engineering&quot;
              side of Computer Science. This just means that you&apos;ll take
              more engineering-focused classes such as DTC, and EA.
              <br />
              <br />
              On the contrary, the Weinberg route in CS is good if you want a
              more holistic education since you&apos;ll have more opportunities
              to take classes outside of CS such as humanities, social sciences,
              and other STEM classes. It&apos;s also worth noting that a lot of
              people choose Weinberg CS because it&apos;s a lot easier to
              double-major in CS and another &quot;fun&quot; field such as
              Creative Writing or Economics.
              <br />
              <br />
              <strong>
                It&apos;s important to emphasize that between the two schools,
                there is no difference in terms of job placement. Technology
                companies do not care if you graduate with a BS or BA in CS,
                what matters most is if you have the technical skills and
                background that they are looking for! Not what your degree type
                is.
              </strong>
            </p>

            <h3 className="text-xl font-bold text-white mb-5">
              What Order should I Take The Core Classes In?
            </h3>
            <p className="text-zinc-400 mb-6">
              Before we begin, it&apos;s important to note that the CS
              department already has sample 4-year schedules for both{" "}
              <Link
                href="https://www.mccormick.northwestern.edu/computer-science/documents/students/undergraduate/mcc-cs-4-year-plan.pdf"
                target="_blank"
                className="text-purple-300 hover:text-purple-300 hover:underline font-medium"
              >
                McCormick
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.mccormick.northwestern.edu/computer-science/documents/students/undergraduate/wcas-cs-4-year-plan.pdf"
                target="_blank"
                className="text-purple-300 hover:text-purple-300 hover:underline font-medium"
              >
                Weinberg
              </Link>{" "}
              students. And while these sample 4-year planners are useful, they
              don&apos;t provide as much context as to why you should take
              classes in a certain order. Likewise, there&apos;s a lot of
              subjectiveness in terms of what classes you should take first and
              what classes you should take later. So let&apos;s talk through
              some of the suggestions that we have.
            </p>

            <h4 className="text-lg font-bold text-white mb-5">
              Weinberg Students
            </h4>
            <div className="mb-8 rounded-lg overflow-hidden border border-zinc-800 bg-black/40">
              <Table>
                <TableHeader>
                  <TableRow className="bg-black/60 hover:bg-black/60">
                    <TableHead className="text-zinc-300 font-medium py-3 px-4 w-1/3">
                      Fall
                    </TableHead>
                    <TableHead className="text-zinc-300 font-medium py-3 px-4 w-1/3">
                      Winter
                    </TableHead>
                    <TableHead className="text-zinc-300 font-medium py-3 px-4 w-1/3">
                      Spring
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {firstYearSchedule.map(
                    (row: ClassSchedule, index: number) => (
                      <TableRow
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-black/30 hover:bg-black/30"
                            : "bg-black/40 hover:bg-black/40"
                        }
                      >
                        <TableCell className="text-zinc-400 py-3 px-4 border-t border-zinc-800">
                          {row.fall}
                        </TableCell>
                        <TableCell className="text-zinc-400 py-3 px-4 border-t border-zinc-800">
                          {row.winter}
                        </TableCell>
                        <TableCell className="text-zinc-400 py-3 px-4 border-t border-zinc-800">
                          {row.spring}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="mb-8 rounded-lg overflow-hidden border border-zinc-800 bg-black/40">
              <Table>
                <TableHeader>
                  <TableRow className="bg-black/60 hover:bg-black/60">
                    <TableHead className="text-zinc-300 font-medium py-3 px-4 w-1/3">
                      Fall
                    </TableHead>
                    <TableHead className="text-zinc-300 font-medium py-3 px-4 w-1/3">
                      Winter
                    </TableHead>
                    <TableHead className="text-zinc-300 font-medium py-3 px-4 w-1/3">
                      Spring
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {secondYearSchedule.map(
                    (row: ClassSchedule, index: number) => (
                      <TableRow
                        key={index}
                        className={
                          index % 2 === 0
                            ? "bg-black/30 hover:bg-black/30"
                            : "bg-black/40 hover:bg-black/40"
                        }
                      >
                        <TableCell className="text-zinc-400 py-3 px-4 border-t border-zinc-800">
                          {row.fall}
                        </TableCell>
                        <TableCell className="text-zinc-400 py-3 px-4 border-t border-zinc-800">
                          {row.winter}
                        </TableCell>
                        <TableCell className="text-zinc-400 py-3 px-4 border-t border-zinc-800">
                          {row.spring}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="mb-6 text-sm text-zinc-500 italic">
              Note: Unrestricted classes are open slots for you to take any
              class. This can be a CS breadth, and elective, or something else
              outside of CS.
            </div>
            <h4 className="text-lg font-bold text-white mb-5">
              The Key Takeaways
            </h4>
            <p className="text-zinc-400 mb-10">
              This recommended study plan is not exhaustive and won&apos;t work
              for everyone (since everyone&apos;s paths are different!). But the
              key things to take away from this is that:
              <br />
              <br />
              If you want to have a solid foundation for recruitment season, you
              should aim to take CS 214 <strong>first</strong>. This is because
              in CS 214, you learn about data structures and algorithms which
              are the bread and butter of technical interviews. The class will
              give you the foundation to be able to start to understand LeetCode
              style questions a bit better and will help you in your technical
              interviews. Likewise, doing CS 211 after 214 is an optimal choice
              since you&apos;ll learn about common languages such as C and C++
              as well as the Unix environment and learn more about
              Object-Oriented Programming. Additionally, both classes are the
              most popular pre-requisites for many of the 300-level CS classes.
              So the earlier you can take them, the more options you&apos;ll
              have during your second year of Computer Science.
              <br />
              <br />
              It&apos;s very common to pair CS 214 and CS 211 together. And
              while it&apos;s manageable, keep in mind that a lot of the content
              between the two classes is very different. So it&apos;s important
              to be able to manage your time well and be able to balance the
              workload between the two classes. But if you switched to CS late,
              or you&apos;re a second-year, it&apos;s very common to take CS 214
              and CS 211 together.
              <br />
              <br />
              Now, you may be wondering what&apos;s the reasoning behind putting
              CS 212 so late if you only need 111 to take it. The idea with CS
              212 so late in our schedules is because CS 212 is an{" "}
              <strong>extremely</strong> difficult class since it&apos;s a
              discrete maths course. You&apos;ll be learning about proofs,
              induction, and other topics that are very different from the other
              CS classes since it is very theory focused. CS 212 is by no means
              impossible to do well in, but you probably want to put it off
              while you learn some of the other CS topics first because in terms
              of industry, you&apos;ll probably never use the content from CS
              212 and <strong>very few</strong> classes have it as a pre-req.
            </p>

            <h3 className="text-xl font-bold text-white mb-5">
              Other Resources and Tips
            </h3>
            <p className="text-zinc-400 mb-10">
              If you&apos;re still curious to learn about the CS major at
              Northwestern and want to learn more about the differences between
              McCormick and Weinberg, we actually recently did a workshop going
              over this topic! You can find the link to the Google Drive
              Presentation by clicking on the image below.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
