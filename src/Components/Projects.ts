import { Card } from "../Card.js";

const requestHQ = new Card(null)

requestHQ.setTitle(
    'RequestHQ'
)

requestHQ.setSubtitle(
    'Collaborative Request Management Platform'
)

requestHQ.addSection(
    'A software platform that enables users to create, manage, and respond to requests within a collaborative environment.'
)

requestHQ.addSection(
    'Currently developing frontend and backend functionality focused on usability, scalability, and efficient request handling.'
)

requestHQ.addSection(
    'Applying full-stack development principles and object-oriented programming.'
)

requestHQ.addSection(
    `
    Check out the app live on
    https://request-hq.vercel.app/
    `
)
requestHQ.addPicture("https://res.cloudinary.com/donb9wx88/image/upload/v1785099733/requesthq/post_1785099733330_d823b5db-d7a5-4636-a883-465e462d536e.png")
requestHQ.addSection(
    'GitHub: github.com/Rellow09-code/RequestHQ'
)

const neuralNetwork = new Card(null)

neuralNetwork.setTitle(
    'Neural Network Library'
)

neuralNetwork.setSubtitle(
    'Machine Learning & Deep Learning'
)

neuralNetwork.addSection(
    'Designed and developed a lightweight neural network library to strengthen understanding of machine learning and deep learning fundamentals.'
)

neuralNetwork.addSection(
    'Implemented forward propagation, backpropagation, activation functions, and gradient-based optimization.'
)

neuralNetwork.addSection(
    'Applied mathematical and algorithmic principles to simulate foundational AI learning processes.'
)

neuralNetwork.addSection(
    'GitHub: github.com/Rellow09-code/Neural-Network'
)

neuralNetwork.addPicture(
    'https://as2.ftcdn.net/jpg/07/10/20/97/1000_F_710209758_38pqFRJ59ZcwjoLhWWl5sDqbXs5Q2gMb.jpg'
)

const dungeonRun = new Card(null)

dungeonRun.setTitle(
    'DungeonRun'
)

dungeonRun.setSubtitle(
    '3D Graphics Game Development'
)

dungeonRun.addSection(
    'Collaborated within a university development team to design and develop an interactive 3D game using WebGL and computer graphics principles.'
)

dungeonRun.addSection(
    'My role: Focused on development of the game level designs, lighting and rendering concepts, shader development, and graphics pipeline implementation.'
)

dungeonRun.addSection(
    'Used Blender to create, model, and shade 3D assets integrated into the game environment.'
)

dungeonRun.addSection(
    'Participated in game design, debugging, testing, and optimization.'
)

dungeonRun.addSection(
    'GitHub: github.com/DungeonRun/DungeonRun'
)
dungeonRun.addPicture(
    "https://res.cloudinary.com/donb9wx88/image/upload/v1785100483/requesthq/post_1785100482934_d823b5db-d7a5-4636-a883-465e462d536e.png")
const studyBuddy = new Card(null)

studyBuddy.setTitle(
    'Study Buddy'
)

studyBuddy.setSubtitle(
    'Collaborative Learning Platform'
)

studyBuddy.addSection(
    'Co-developed a platform that enables students to share learning resources and academic support materials.'
)

studyBuddy.addSection(
    'Assisted in designing user-focused features to improve collaboration and student engagement.'
)

studyBuddy.addSection(
    'Check out the app live on: https://sdp-project-blond-ten.vercel.app/'
)

studyBuddy.addSection(
    'GitHub: github.com/SDP-LSDTFH-2025/SDP-Project'
)


export {requestHQ, neuralNetwork, dungeonRun, studyBuddy }