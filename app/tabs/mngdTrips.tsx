
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
type managedTrips = {
    id: string
    title: string
    description: string,
    length: number
    handler: string
    status: boolean
}

const mngdTrips: managedTrips[] = [
    {
        id: "b1",
        title: "BP TO ATLANTA",
        description: "Valaki ment valahova",
        length: 20,
        handler: "Bertalan csinytalan",
        status: true
    },
    {
        id: "b1",
        title: "BP TO ATLANTA",
        description: "Valaki ment valahova",
        length: 20,
        handler: "Bertalan csinytalan",
        status: false
    }
]

export default function ManagedTrips() {
    return (
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {mngdTrips.map((trip) => (
                <Card className={`w-full border-[0.05rem] ${trip.status ? "border-green-700" : "border-red-700"} shadow-xl transition-all duration-150 hover:scale-95`}>
                    <CardHeader>
                        <CardTitle>{trip.title}</CardTitle>
                        <CardDescription>{trip.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Mrs. Double Door</p>
                    </CardContent>
                    <CardFooter>
                        <p>{trip.title} {trip.status ? "Approved" : "Rejected"} the trip</p>
                    </CardFooter>
                </Card>
            ))}


        </div>
    )
}