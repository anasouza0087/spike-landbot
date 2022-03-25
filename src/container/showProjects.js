import React, { useState } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import { TabPanel, TabContext } from '@material-ui/lab';
import ScratcheBlocks from './diagrams/scratcheBlocks';
import BeautifulDiagrams from './diagrams/beautifulDiagrams';
import DynamicDiagrams from './diagrams/DynamicDiagrams';

const ShowProjects = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div style={{
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
        }}>
            <TabContext
                value={value}>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    <Tab label='Scratch Blocks' value='0' />
                    <Tab label='Beautiful Diagrams' value='1' />
                    <Tab label='Diagramas Dinâmicos' value='3' />
                </Tabs>
                <TabPanel value='0'>
                    <ScratcheBlocks />
                </TabPanel>
                <TabPanel value='1'>
                    <BeautifulDiagrams />
                </TabPanel>
                <TabPanel value='3'>
                    <DynamicDiagrams />
                </TabPanel>
            </TabContext>
        </div>
    )
}

export default ShowProjects