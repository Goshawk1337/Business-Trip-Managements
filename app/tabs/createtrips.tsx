"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
type station = {
    name: string
    gasPrice: number
}

export default function CreateTrip() {
    const [stations, setStations] = useState<station[]>([])
    const [files, setFiles] = useState<{ name: string; file: File }[]>([])

    const addFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files
        if (!fileList || fileList.length === 0) return
        const incoming = Array.from(fileList).map(f => ({ name: f.name, file: f }))
        setFiles(prev => [...prev, ...incoming])
        e.currentTarget.value = ""
    }

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index))
    }

    const uploadFiles = async () => {
        if (files.length === 0) return null
        const form = new FormData()
        files.forEach(f => form.append("files", f.file))
        const res = await fetch("/api/upload", {
            method: "POST",
            body: form,
        })
        if (!res.ok) throw new Error("Upload failed")
        return res.json()
    }
    const addStation = () => setStations(s => [...s, { name: "", gasPrice: 0 }])
    const updateStation = (index: number, data: Partial<station>) =>
        setStations(s => s.map((st, i) => (i === index ? { ...st, ...data } : st)))
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-3">
                <Label htmlFor="label">Trips label</Label>
                <Input id="label" type="text" placeholder="Label" name="label" />
            </div>
            <div className="flex flex-col gap-3">
                <Label htmlFor="desc">Short description</Label>
                <Input id="desc" type="text" placeholder="Description" name="desc" />
            </div>
            <div className="flex flex-col gap-3">
                <Label htmlFor="vehdata">Vehicle plate</Label>
                <Input id="vehdata" type="text" placeholder="Vehicle plate" name="vehdata" />
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-5">
                    <Label htmlFor="gasStations"> Gas Stations & Gas prices</Label> <Button onClick={addStation}> <Plus /> New station</Button>
                </div>
                {stations.map((st, i) => (
                    <div className="flex flex-row gap-5 items-end" key={i}>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor={`stationName-${i}`}> Station name</Label>
                            <Input
                                id={`stationName-${i}`}
                                type="text"
                                placeholder="station name"
                                value={st.name}
                                onChange={e => updateStation(i, { name: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor={`price-${i}`}> Gas price</Label>
                            <Input
                                id={`price-${i}`}
                                type="number"
                                placeholder="gas price"
                                value={st.gasPrice}
                                onChange={e => updateStation(i, { gasPrice: Number(e.target.value) })}
                            />
                        </div>
                        <div className="flex items-center">
                            <Button
                                onClick={() => setStations(s => s.filter((_, idx) => idx !== i))}
                                aria-label={`Remove station ${i}`}
                            >
                                ×
                            </Button>
                        </div>
                    </div>
                ))}
                {/* <Input id="gasStations" type="text" placeholder="Vehicle plate" name="vehdata" /> */}
            </div>
            <div className="flex flex-col gap-3">
                <Label htmlFor="receipt">Receipts</Label>
                <Input id="receipt" type="file" multiple onChange={addFile} />
            </div>
            <div className="flex flex-col gap-5">
                {files.map((file, idx) => (
                    <Item variant="outline" key={`${file.name}-${idx}`}>
                        <ItemContent>
                            <ItemTitle>Receipt</ItemTitle>
                            <ItemDescription>
                                {file?.name}
                            </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            <Button variant="outline" size="sm" onClick={() => removeFile(idx)}>
                                Remove
                            </Button>
                        </ItemActions>
                    </Item>
                ))}
            </div>
        </div>
    )
}