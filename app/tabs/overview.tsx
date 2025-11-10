import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Overview() {
    return (
        <div className="w-full flex justify-center mt-5 ">
            <div className="grid md:grid-cols-3 grid-cols-1   gap-5  justify-items-center w-full  max-w-4xl">
                    <Card className="w-full">
                        <CardHeader>
                            <CardTitle>Total trips</CardTitle>
                            <CardDescription>Total trips done all time</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>32</p>
                        </CardContent>
                        <CardFooter>
                            <p>trips were done</p>
                        </CardFooter>
                    </Card>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Money spent on trips</CardTitle>
                        <CardDescription>Total money spent on trips</CardDescription>
                     </CardHeader>
                    <CardContent>
                        <p>10.000$</p>
                    </CardContent>
                    <CardFooter>
                        <p>Was spent on trips</p>
                    </CardFooter>
                </Card>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Most expensive trip</CardTitle>
                        <CardDescription>See her our most expensive trip</CardDescription>
                     </CardHeader>
                    <CardContent>
                        <p>B5: 3000$</p>
                    </CardContent>
                    <CardFooter>
                        <p>was the cost</p>
                    </CardFooter>
                </Card>
                <Card className="md:col-span-3 w-full h-128    ">
                    <CardHeader>
                        <CardTitle>Chart</CardTitle>
                        <CardDescription>Overview chart</CardDescription>
                     </CardHeader>
                    <CardContent>
                        <p>Chart goes here</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}