'use client'
import { use } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from 'next/link'
export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)

  return (
    <div className='flex flex-col gap-3 items-center justify-center'>
      <h1 className='text-2xl font-bold'>Budapest to Atlanta Trip details</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Trip creator</CardTitle>
            <CardDescription>The person who created the trip</CardDescription>
          </CardHeader>
          <CardContent>
            <p>BoJack Horseman</p>
          </CardContent>
          <CardFooter>
            <p>is the creator</p>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Approver</CardTitle>
            <CardDescription>The HR worker who approved the trip</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Mrs. Double Door</p>
          </CardContent>
          <CardFooter>
            <p>who approved this trip </p>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Length</CardTitle>
            <CardDescription>Lenght of the trip</CardDescription>
          </CardHeader>
          <CardContent>
            <p>200 KM</p>
          </CardContent>
          <CardFooter>
            <p>was the length of the trip</p>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Price</CardTitle>
            <CardDescription>Price of the trip</CardDescription>
          </CardHeader>
          <CardContent>
            <p>200.000 HUF</p>
          </CardContent>
          <CardFooter>
            <p>was the price of the trip</p>
          </CardFooter>
        </Card>


      </div>
      <Button asChild className='h-10 w-full md:w-1/2'>
        <Link href="/">Back to trips</Link>
      </Button>
    </div>
  )
}