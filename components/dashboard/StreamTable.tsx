import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TableComponent from './table/Table';
import useData from '@/store/useData';
import { Button } from '../ui/button';
import { Funnel } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { filterData } from '@/lib/utils';


const StreamTable = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const { recentStreams } = useData();

    const locations = [...new Set(recentStreams.map(exp => exp.location))];
    const filteredStreams = filterData(recentStreams, selectedLocations);

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>Recent Streams</CardTitle>
        <CardDescription className='text-sm text-muted-foreground'>Detailed information about recent streams</CardDescription>
      </CardHeader>
      <Button variant="outline" size="sm" className='mb-4 ml-6 text-sm p-3' onClick={() => setIsFilterOpen(!isFilterOpen)}>
      <Funnel />    
        Filter
    </Button>
   {isFilterOpen && <div className='flex flex-row gap-4 mb-4 ml-6 mr-6 border rounded-md p-4'>
        <div className='flex flex-col gap-2'>
            <h3 className='text-sm font-medium text-muted-foreground'>Locations</h3>
            <div className='grid grid-cols-3 gap-2'>
                {locations.map((location) => (
                    <span key={location} className='flex gap-2 text-sm mt-2'>
                    <Checkbox key={location} checked={selectedLocations.includes(location)} onCheckedChange={(checked) => {
                        if (checked) {
                            setSelectedLocations([...selectedLocations, location]);
                        } else {
                            setSelectedLocations(selectedLocations.filter(loc => loc !== location));
                        }
                    }} />
                    <p>{location}</p>
                    </span>
                ))}
            </div>
        </div>
    </div>}
      <CardContent>
        {/* tan stack table */}
        <TableComponent data={selectedLocations.length > 0 ? filteredStreams : recentStreams} />
     </CardContent>
    </Card>
  )
}

export default StreamTable