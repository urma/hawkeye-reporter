import React from "react"
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge"

export default props => {
  return (
    <Card className="mb-3 bg-secondary text-white">
      <Card.Title as="h5" className="m-2">
        {props.data.description}
        <Badge pill variant="info" className="float-right">
          {props.data.level}
        </Badge>
      </Card.Title>
      <Card.Body>
        <div className="row">
          <div className="col-sm-2">
            <strong>Module</strong>
          </div>
          <div className="col-sm-10">{props.data.module}</div>          
        </div>
        <div className="row">
          <div className="col-sm-2">
            <strong>Resource</strong>
          </div>
          <div className="col-sm-10">{props.data.offender}</div>          
        </div>
        <div className="row">
          <div className="col-sm-2">
            <strong>Remediation</strong>
          </div>
          <div className="col-sm-10">{props.data.mitigation}</div>          
        </div>
      </Card.Body>
    </Card>
  )
}
