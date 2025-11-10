
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Key } from "lucide-react"
import Link from "next/link"


type trips = {
    id: string
    title: string
    description: string,
    length: number
}

const tripList: trips[] = [
    {
        id: "b1",
        title: "Trip to Budapest",
        description: "Going from A to B in BP",
        length: 20
    },
    {
        id: "b2",
        title: "Trip to Budapest",
        description: "Going from A to B in BP",
        length: 20
    },
    {
        id: "b3",
        title: "Trip to Budapest",
        description: "Going from A to B in BP",
        length: 20
    },
    {
        id: "b4",
        title: "Trip to Budapest",
        description: "Going from A to B in BP",
        length: 20
    },
]


export default function Trips() {
    return (
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {tripList.map((trip) => (
                <Link href={`/tabs/trips/${trip.id}`} key={trip.id} >
                    <Card className="w-full" >
                        <CardHeader>
                            <CardTitle>{trip.title}</CardTitle>
                            <CardDescription>{trip.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{trip.length} KM</p>
                        </CardContent>
                        <CardFooter>
                            <p>Click on the card to see the details</p>
                        </CardFooter>
                    </Card>
                </Link>

            ))}
        </div>
    )
}