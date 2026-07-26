import { Card } from "../Card.js";

const skills = new Card(null)

skills.setTitle('Technical Skills')

skills.setSubtitle('Software Development')

skills.addSection(
    'Full-Stack Development'
)

skills.addSection(
    'REST APIs'
)

skills.addSection(
    'Backend Systems'
)

skills.addSection(
    'Software Architecture'
)

skills.addSection(
    'Application Design'
)

skills.addSection(
    'Automation Tools'
)

skills.addSection(
    'Algorithm Design & Implementation'
)

export default skills