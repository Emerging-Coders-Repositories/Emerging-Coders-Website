import React from "react";
import {
    Box,
    Container,
    Stack,
    Text,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {

    return (
    <footer class="p-4 bg-gray-800 md:p-8 lg:p-10 dark:bg-gray-800 z-100">
        <div class="mx-auto max-w-screen-xl text-center z-100">
            <a href="#" class="flex justify-center items-center text-2xl font-semibold text-white dark:text-white">
                
          Emerging Coders    
      </a>
      <p class="my-6 text-white dark:text-gray-400">Your community of First-Generation and Low-Income Technologist at Northwestern University</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-white dark:text-white">
          <li>
              <a href="/FAQ" class="mr-4 hover:underline md:mr-6">FAQ</a>
          </li>
          <li>
              <a href="ExecutiveBoard" class="mr-4 hover:underline md:mr-6">Executive Board</a>
          </li>
          <li>
              <a href="Contact" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <div class="flex flex-col justify-center mt-6 space-x-4 gap-2">
        <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Emerging Coders™</a>. All Rights Reserved.</span>
        <span class="text-sm text-white sm:text-center dark:text-gray-400">Built and Designed By: <a href="https://www.linkedin.com/in/ethanpineda/" target="blank" class="hover:underline">Ethan Pineda</a></span>
    </div>
</div>
</footer>
    );
};