import * as React from "react";

import style from "@/styles/components/Card.module.scss";

import { cn } from "@/utils/shadcnUI";

import { BaseProps } from "../../../global";

const Card = React.forwardRef(({ className, ...props }: BaseProps, ref: React.LegacyRef<HTMLDivElement>) => (
  <div
    ref={ref}
    className={cn(`rounded-xl bg-card text-card-foreground shadow-sm ${style['card']}`, className)}
    {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }: BaseProps, ref: React.LegacyRef<HTMLDivElement>) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }: BaseProps, ref: React.LegacyRef<HTMLDivElement>) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }: BaseProps, ref: React.LegacyRef<HTMLDivElement>) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }: BaseProps, ref: React.LegacyRef<HTMLDivElement>) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }: BaseProps, ref: React.LegacyRef<HTMLDivElement>) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
