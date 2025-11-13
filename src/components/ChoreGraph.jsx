import React from 'react';
import { Button } from "@/components/ui/button"

const mockDataUser1={
  user: "joe",
  totalDuration: 100000 //time(unit not specified)
}
const mockDataUser2={
  user: "sarah",
  totalDuration: 100000 //time(unit not specified)

}
function ChoreGraph() {
  return(
    <div>
      <h1>Visual for the hours spent based on user</h1>
      <Button>Button Test</Button>
    </div>
    )

}

export default ChoreGraph;