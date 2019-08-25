import React from "react"
import Badge from "react-bootstrap/Badge"
import Card from "react-bootstrap/Card"
import { Link } from "gatsby"

export default props => {
  return (
    <Card className="mb-3 bg-secondary text-white">
      <Card.Body>
        <Link to={props.report.fields.slug} className="text-white">{props.report.parent.name}</Link>&nbsp;
        <Badge pill variant="info">{props.report.findings.length}&nbsp;findings</Badge>
        <div className="float-right">{props.report.parent.ctime}</div>
      </Card.Body>
    </Card>
  )
}
