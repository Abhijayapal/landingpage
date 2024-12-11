
"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";


import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
    items: {
        title: string;
        design?: string;  // Make design optional
        description: string;
        link: string;
        dp?: React.ReactNode;  // Make dp optional
        github?: React.ReactNode;  // Make github optional
        linkedin?: React.ReactNode;  // Make linkedin optional
        insta?: React.ReactNode;  // Make insta optional
      }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (

    

    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >

      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-zinc-400 dark:bg-slate-800/[0.8] block  rounded-3xl "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.05,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            
            <div className="flex justify-center items-center">
            {item.dp}
            </div>
            <CardTitle className="flex justify-center items-center">{item.title}</CardTitle>
            <CardDesignation className="flex justify-center items-center ">{item.design}</CardDesignation>
            <CardDescription>{item.description}</CardDescription>
            <div className="flex flex-row  space-x-4 p-2 justify-center items-center">
            {item.github}
            {item.linkedin}
            </div>
            
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-zinc-100 border-2 border-gray-50 dark:border-gray/[0.2]  group-hover:border-black relative z-20 ",
        className
      )}
    >
      
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};



export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-500 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardDesignation = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <p
        className={cn(
          "mt-1 text-gray-600  tracking-wide leading-relaxed text-sm",
          className
        )}
      >
        {children}
      </p>
    );
  };