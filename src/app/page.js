"use client"
import React from 'react';
import {NextUIProvider} from "@nextui-org/react";
import MainComp from './Components/MainComp/MainComp';

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <MainComp />
      </NextUIProvider>
    </>
  );
};
