import React from 'react'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card'

export default () => {
  return (
    <div className="main">
      <Card>
        <CardHeader title="New York Times" showExpandableButton={true}/>
        <CardTitle
          title="Article Title"
          subtitle="Author Name"
          actAsExpander={true}
        />
        <CardText expandable={true}>
          Blah blah blah...
        </CardText>
      </Card>
    </div>
  )
}
