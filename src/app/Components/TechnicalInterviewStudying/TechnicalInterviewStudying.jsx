import React from  "react"; 
import { Link, Image,  } from "@nextui-org/react";

export default function TechnicalInterviewStudying() {

    return (
        <section class="mb-10">
            <div class="max-w-3xl mx-auto text-left">
                <h3 class="text-3xl font-bold mb-10">
                    Studying and Preparing for Technical Interviews
                </h3>
            <div class="mb-5">
                <h4 class="text-2xl font-bold mb-5">
                    Choosing a Programming Language
                </h4>
                <p class="text-gray-700 dark:text-gray-400 mb-5">
                    The first step in preparing for technical interviews is to choose a programming Language to study with. Generally, your interviewers will allow you to choose between popular coding languages such as Python, C, C++, and JavaScript. While you could technically do your technical interviews in a language such as Racket, it is not recommended as it is not a popular language and is not used in industry. 
                    Unless you are interviewing for a more specific role such as a mobile app developer or a front-end developer position,  you should be able to have free reign over the coding language that you do your interviews in.
                </p>
                <p class="text-gray-700 dark:text-gray-400 mb-5">
                    Ideally, you should a choose a programming language that you already have some experience with or at least used in one of your classes. This will allow you to focus more in studying the problem solving aspects of the technical interview more than the syntax of the language.
                    However, if you are not familiar with any of the popular programming languages, it is recommended that you choose a language that is easy to learn and has a lot of resources available online such as Python.
                </p>
                <p class="text-gray-700 dark:text-gray-400 mb-10">
                    Our recommendation based on what we've seen and used ourselves, is to use a language such as Python or JavaScript. This is due to the fact that these languages are easy to learn and have a lot of resources available online.
                    Additionally, they already have a lot of built in functions, data structures, and libraries that you can use to solve problems. This makes your job during the interview a lot easier as you don't have to worry about implementing these things yourself. Thus, giving you more time to focus on the problem solving aspect of the interview.
                </p>
            </div>
            <div>
                <h4 class="text-2xl font-bold mb-5">
                    Practicing and Studying
                </h4>
                <p class="text-gray-700 dark:text-gray-400 mb-5">
                    Nowadays, there are a lot of resources that exists on the internet that can help you prepare for technical interviews. These resources can range from books, to online courses, to practice problems, and more.
                    Unfortunately, some resources are mostly just trying to make money off of you and don't offer anything useful behind their paywalls. So, we've compiled a list of resources and tools that we've used in our studying and preparing that we felt were the most helpful while accommodating for various learning styles! 
                </p>
                <h5 class="text-xl font-bold mb-5">
                    Books
                </h5>
                <div class="mb-5">
                    <Link showAnchorIcon href="https://github.com/Avinash987/Coding/blob/master/Cracking-the-Coding-Interview-6th-Edition-189-Programming-Questions-and-Solutions.pdf" color="secondary" target="_blank" size="lg">
                        Cracking the Coding Interview
                    </Link>
                    <p class="text-gray-700 dark:text-gray-400 mb-2 my-3">
                        "Cracking the Coding Interview" is a renowned book by Gayle Laakmann McDowell. It offers a comprehensive collection of 189 programming questions and solutions, making it an invaluable resource for interview preparation. This book covers various coding topics and provides detailed explanations to help you understand the concepts better.
                    </p>
                </div>
                    <div class="mb-5">
                        <Link showAnchorIcon href="https://github.com/lakhbawa/PDF---Grokking-the-Coding-Interview-Patterns-for-Coding-Questions/blob/main/Grokking%20the%20Coding%20Interview%20in%2016%20Patterns.pdf" color="secondary" target="_blank" size="lg" >Grokking the Coding Interview</Link>
                        <p class="text-gray-700 dark:text-gray-400 mb-2 my-3">
                            "Grokking the Coding Interview" is a book that focuses on problem-solving patterns for coding questions. It helps you understand common patterns and techniques used in technical interviews, making it easier to tackle a wide range of coding challenges.
                        </p>
                    </div>
                    <h5 class="text-xl font-bold mb-5">
                        Coding Practice Websites
                    </h5>
                    <div class="mb-5">
                        <Link showAnchorIcon href="https://leetcode.com/" color="secondary" target="_blank" size="lg">
                            LeetCode
                        </Link>
                        <p class="text-gray-700 dark:text-gray-400 mb-2 my-3">
                            LeetCode is the most popular and widely-used platform that provides coding challenges and mock interviews. Leetcode is most known for its large and extensive collection of practice problems ranging in various difficulties that are frequently asked in technical interviews.
                        </p>
                    </div>
                    <div class="mb-5">
                        <Link showAnchorIcon href="https://neetcode.io/" color="secondary" target="_blank" size="lg">
                            NeetCode
                        </Link>
                        <p class="text-gray-700 dark:text-gray-400 mb-2 my-3">
                            NeetCode is very similar to LeetCode in that it provides a large collection of practice problems that are frequently asked in technical interviews. However, NeetCode is unique in that it provides list of curated problems that are organized by topic and difficulty. This makes it easier to find problems that you want to practice. This helps balance off the fact that LeetCode can get overwhelming with the amount of problems that it has whereas NeetCode gives you more structure and insight into what you should be focusing on. 
                        </p>
                    </div>
                    <div class="mb-5">
                        <Link showAnchorIcon href="https://www.codewars.com/" color="secondary" target="_blank" size="lg">
                            CodeWars
                        </Link>
                        <p class="text-gray-700 dark:text-gray-400 mb-2 my-3">
                            CodeWars offers a unique approach to coding challenges by using kata, which are small coding exercises that you can complete to improve your skills. It's a fun and interactive way to practice coding.
                        </p>
                    </div>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold mb-5">
                            Mock Interviews
                        </h4>
                        <p class="text-gray-700 dark:text-gray-400 mb-5">
                            Mock interviews are arguably the best and most efficient way to prepare for technical interviews. Mock interviews are essentially practice interviews that you do with someone else such as a friend, an upperclassmen, or your roommate. 
                            The purpose of mock interviews is to simulate the experience of a real technical interview. This allows you to get a feel for what a real technical interview is like and allows you to practice your problem solving skills in a more realistic environment.
                            The best thing about doing mock interviews is that you are able to gain insights into your strengths and weaknesses. This allows you to focus on improving your weaknesses and building on your strengths. You can also become comfortable with having to solve technical problems on a time crunch and pressure. 
                            Overall, it is <strong>strongly</strong> suggested that you do at least a couple of mock interviews while preparing for an interview. When you doing a mock interview, we recommend using this <a href="https://www.algoexpert.io/mock-interviews/feedback?id=fake_feedback_form" class="text-purple-700" target="_blank">scorecard</a> to provide quantitative feedback to the interviewee.
                        </p>
                        <p class="text-gray-700 dark:text-gray-400 mb-5">
                            If you're unsure what a mock interview should look like, here is a video of a mock interview between software engineers. 
                        </p>
                        <a href="https://www.youtube.com/watch?v=1qw5ITr3k9E" target="_blank">
                            <Image src="https://www.freecodecamp.org/news/content/images/2023/03/software-mock.png" />
                        </a>
                    </div>
            </div>
        </section>
    );
};