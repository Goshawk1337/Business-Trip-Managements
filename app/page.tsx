import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Overview from "./tabs/overview"
import Trips from "./tabs/trips"
import ManagedTrips from "./tabs/mngdTrips"
import CreateTrip from "./tabs/createtrips"
import { ReactNode } from "react"
type tabsPage = {
  value: string
  title: string
  tabs: ReactNode | null
  onlyAdmin: boolean
}
const pages: tabsPage[] = [
  {
    value: "overv",
    title: "Overview",
    tabs: <Overview/> ,
    onlyAdmin: false
  },
  {
    value: "trips",
    title: "Trips",
    tabs: <Trips/>,
    onlyAdmin: false
  },
  {
    value: "managedTrips",
    title: "Handled trips",
    tabs: <ManagedTrips/>,
    onlyAdmin: false
  },
  {
    value: "create",
    title: "Create Trips",
    tabs: <CreateTrip/>,
    onlyAdmin: false
  },
]
export default function Home() {
  return (
    <div className="w-full mt-5 flex flex-col items-center justify-center">

      <h1 className="font-bold  text-3xl underline underline-offset-5">Business trip management</h1>
      <Tabs defaultValue="overv" className="w-full items-center mt-3 px-3">
        <TabsList className="">
          {pages.map((page) => (
            <TabsTrigger key={page.value} className=" " value={page.value}>
              {page.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {pages.map((page) => (
          <TabsContent className="w-full" key={page.value} value={page.value}>
            {page.tabs ?? <div className="p-4">{page.title} content goes here.</div>}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
