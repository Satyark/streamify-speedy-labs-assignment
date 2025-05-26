"use client"

import { ColumnDef } from "@tanstack/react-table"
type RecentStream = {
  id: number
  songName: string
  artist: string
  dateStreamed: string
  streamCount: number
  userId: string
  duration: number
  location: string
}

export const columns: ColumnDef<RecentStream>[] = [
  {
    accessorKey: "songName",
    header: "Song",
    cell: ({ row }) => row.original.songName,
    enableSorting: false
  },
  {
    accessorKey: "artist",
    header: "Artist",
    cell: ({ row }) => {const artist = row.original.artist.split(','); 
      return artist[0];
    },
    enableSorting: true
  },
  {
    accessorKey: "dateStreamed",
    header: "Date",
    cell: ({ row }) => {
      const date = new Date(row.original.dateStreamed)
      return date.toLocaleDateString("en-GB") // DD/MM/YYYY
    },
    enableSorting: true,
  },
  {
    accessorKey: "streamCount",
    header: "Streams",
    cell: ({ row }) => row.original.streamCount,
    enableSorting: true,
  },
  {
    accessorKey: "duration",
    header: "Duration",
    cell: ({ row }) => 
        {
      const mins = Math.floor(row.original.duration / 60)
      const secs = row.original.duration % 60
      return `${mins}:${secs.toString().padStart(2, "0")}`
    },
    enableSorting: false,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => row.original.location,
    enableSorting: false
  }
]
