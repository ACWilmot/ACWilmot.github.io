
import { Question } from '@/types/questionTypes';

const nonVerbalQuestions: Question[] = [
  {
    id: 'nv1',
    subject: 'non-verbal',
    text: 'Which shape comes next in the sequence? [Circle, Square, Triangle, Circle, Square, ?]',
    options: ['Circle', 'Square', 'Triangle', 'Pentagon'],
    correctAnswer: 'Triangle',
    explanation: 'The pattern alternates between circle, square, and triangle, so triangle comes next.'
  },
  {
    id: 'nv2',
    subject: 'non-verbal',
    text: 'If you fold the flat shape on the left, which 3D object would it form?',
    options: ['Cube', 'Pyramid', 'Cylinder', 'Cone'],
    correctAnswer: 'Cube',
    explanation: 'The flat shape is a net for a cube, with six connected squares.'
  },
  {
    id: 'nv3',
    subject: 'non-verbal',
    text: 'Which of the following shapes does NOT belong in the group?',
    options: ['Triangle', 'Square', 'Pentagon', 'Oval'],
    correctAnswer: 'Oval',
    explanation: 'Triangle, Square, and Pentagon are all polygons with straight sides, while an Oval has curved sides.'
  },
  {
    id: 'nv4',
    subject: 'non-verbal',
    text: 'If the pattern continues, how many dots will be in the next figure?',
    options: ['7', '8', '9', '10'],
    correctAnswer: '9',
    explanation: 'The pattern shows an increase of 2 dots in each figure (3, 5, 7), so the next figure would have 9 dots.'
  },
  {
    id: 'nv5',
    subject: 'non-verbal',
    text: 'Which image is the mirror reflection of the given shape?',
    options: ['Image A', 'Image B', 'Image C', 'Image D'],
    correctAnswer: 'Image B',
    explanation: 'Image B shows the exact mirror reflection of the original shape, while the others are rotated or different.'
  },
  {
    id: 'nv6',
    subject: 'non-verbal',
    text: 'Which pattern would complete the sequence?',
    options: ['Pattern A', 'Pattern B', 'Pattern C', 'Pattern D'],
    correctAnswer: 'Pattern C',
    explanation: 'The sequence follows a rotation pattern where each shape rotates 45 degrees clockwise. Pattern C continues this rotation.'
  },
  {
    id: 'nv7',
    subject: 'non-verbal',
    text: 'Which piece completes the puzzle?',
    options: ['Piece 1', 'Piece 2', 'Piece 3', 'Piece 4'],
    correctAnswer: 'Piece 3',
    explanation: 'Piece 3 has the correct shape and orientation to fit perfectly into the missing section of the puzzle.'
  },
  {
    id: 'nv8',
    subject: 'non-verbal',
    text: 'If you rotate the shape on the left 90 degrees clockwise, which shape would you get?',
    options: ['Shape A', 'Shape B', 'Shape C', 'Shape D'],
    correctAnswer: 'Shape B',
    explanation: 'When the original shape is rotated 90 degrees clockwise, it matches Shape B exactly.'
  },
  {
    id: 'nv9',
    subject: 'non-verbal',
    text: 'Which option shows the cube from the opposite side?',
    options: ['View A', 'View B', 'View C', 'View D'],
    correctAnswer: 'View C',
    explanation: 'View C shows the opposite side of the cube based on the pattern and positions of the symbols on each face.'
  },
  {
    id: 'nv10',
    subject: 'non-verbal',
    text: 'What comes next in this grid pattern sequence?',
    options: ['Pattern 1', 'Pattern 2', 'Pattern 3', 'Pattern 4'],
    correctAnswer: 'Pattern 2',
    explanation: 'The pattern follows a rule where black squares move one position clockwise around the grid. Pattern 2 continues this sequence.'
  },
  {
    id: 'nv11',
    subject: 'non-verbal',
    text: 'Which figure completes the analogy? Figure A is to Figure B as Figure C is to ?',
    options: ['Figure D', 'Figure E', 'Figure F', 'Figure G'],
    correctAnswer: 'Figure E',
    explanation: 'The relationship between Figures A and B is that B has double the number of elements as A. The same relationship exists between Figures C and E.'
  },
  {
    id: 'nv12',
    subject: 'non-verbal',
    text: 'Which is the odd one out?',
    options: ['Design 1', 'Design 2', 'Design 3', 'Design 4'],
    correctAnswer: 'Design 3',
    explanation: 'Designs 1, 2, and 4 all have rotational symmetry, while Design 3 has only reflection symmetry.'
  },
  {
    id: 'nv13',
    subject: 'non-verbal',
    text: 'If the sequence continues, which figure comes next?',
    options: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    correctAnswer: 'Figure A',
    explanation: 'The sequence follows a pattern where each shape appears twice before changing. Figure A is the next in this pattern.'
  },
  {
    id: 'nv14',
    subject: 'non-verbal',
    text: 'Which object would look like this when viewed from above?',
    options: ['Object 1', 'Object 2', 'Object 3', 'Object 4'],
    correctAnswer: 'Object 2',
    explanation: 'When viewed from above, Object 2 creates the exact shadow or projection shown in the question.'
  },
  {
    id: 'nv15',
    subject: 'non-verbal',
    text: 'Which pattern follows the rule shown in the first three examples?',
    options: ['Example A', 'Example B', 'Example C', 'Example D'],
    correctAnswer: 'Example C',
    explanation: 'The rule is that the number of small shapes equals the number of sides in the large shape. Example C follows this pattern.'
  },
  {
    id: 'nv16',
    subject: 'non-verbal',
    text: 'If you unfold this cube, which net would you get?',
    options: ['Net 1', 'Net 2', 'Net 3', 'Net 4'],
    correctAnswer: 'Net 3',
    explanation: 'When the cube is unfolded, the relative positions of the symbols on each face would match Net 3.'
  },
  {
    id: 'nv17',
    subject: 'non-verbal',
    text: 'Which image shows the correct shadow of the 3D object when light shines from above?',
    options: ['Shadow A', 'Shadow B', 'Shadow C', 'Shadow D'],
    correctAnswer: 'Shadow A',
    explanation: 'When light shines from above on the 3D object, Shadow A accurately represents the projection that would be cast.'
  },
  {
    id: 'nv18',
    subject: 'non-verbal',
    text: 'Which option shows the correct image when the given pattern is folded along the dotted lines?',
    options: ['Result 1', 'Result 2', 'Result 3', 'Result 4'],
    correctAnswer: 'Result 2',
    explanation: 'When the pattern is folded along the dotted lines, the shapes align to create the image shown in Result 2.'
  },
  {
    id: 'nv19',
    subject: 'non-verbal',
    text: 'Which shape does NOT belong in the group?',
    options: ['Shape A', 'Shape B', 'Shape C', 'Shape D'],
    correctAnswer: 'Shape C',
    explanation: 'Shapes A, B, and D all have rotational symmetry, while Shape C only has reflection symmetry.'
  },
  {
    id: 'nv20',
    subject: 'non-verbal',
    text: 'What comes next in this sequence: 2, 6, 12, 20, ?',
    options: ['24', '28', '30', '36'],
    correctAnswer: '30',
    explanation: 'The differences between consecutive terms are 4, 6, 8, so the next difference should be 10. 20 + 10 = 30.'
  },
  {
    id: 'nv21',
    subject: 'non-verbal',
    text: 'Which option shows the paper after it has been hole-punched and unfolded?',
    options: ['Pattern A', 'Pattern B', 'Pattern C', 'Pattern D'],
    correctAnswer: 'Pattern B',
    explanation: 'Based on the fold lines and punch locations, Pattern B accurately shows where the holes would appear when the paper is unfolded.'
  },
  {
    id: 'nv22',
    subject: 'non-verbal',
    text: 'Which figure completes the grid?',
    options: ['Figure 1', 'Figure 2', 'Figure 3', 'Figure 4'],
    correctAnswer: 'Figure 3',
    explanation: 'The pattern in each row and column follows a specific rule of shape transformations. Figure 3 completes this pattern correctly.'
  },
  {
    id: 'nv23',
    subject: 'non-verbal',
    text: 'If the pattern continues, which shape comes next?',
    options: ['Triangle', 'Square', 'Pentagon', 'Hexagon'],
    correctAnswer: 'Pentagon',
    explanation: 'The pattern shows an increase in the number of sides: triangle (3 sides), square (4 sides), so pentagon (5 sides) would come next.'
  },
  {
    id: 'nv24',
    subject: 'non-verbal',
    text: 'Which option shows the reflection of the given shape across the vertical axis?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option C',
    explanation: 'Option C shows the exact reflection of the original shape across a vertical axis, maintaining the correct orientation of all elements.'
  },
  {
    id: 'nv25',
    subject: 'non-verbal',
    text: 'Which design follows the same rule as the examples?',
    options: ['Design W', 'Design X', 'Design Y', 'Design Z'],
    correctAnswer: 'Design X',
    explanation: 'The rule is that the number of inner elements equals the number of outer elements. Design X is the only one that follows this rule.'
  },
  {
    id: 'nv26',
    subject: 'non-verbal',
    text: 'If you rotate this 3D object 90 degrees to the right, what would it look like?',
    options: ['View 1', 'View 2', 'View 3', 'View 4'],
    correctAnswer: 'View 2',
    explanation: 'When the 3D object is rotated 90 degrees to the right, the faces and features would align exactly as shown in View 2.'
  },
  {
    id: 'nv27',
    subject: 'non-verbal',
    text: 'Which diagram represents the relationship: "All A are B, and some B are C"?',
    options: ['Diagram 1', 'Diagram 2', 'Diagram 3', 'Diagram 4'],
    correctAnswer: 'Diagram 2',
    explanation: 'Diagram 2 correctly shows circle A completely inside circle B, with circle B partially overlapping circle C.'
  },
  {
    id: 'nv28',
    subject: 'non-verbal',
    text: 'Which image would you see if you looked at the given shape from directly above?',
    options: ['Image A', 'Image B', 'Image C', 'Image D'],
    correctAnswer: 'Image C',
    explanation: 'When viewed from directly above, the shape would create the projection shown in Image C, accounting for all visible elements.'
  },
  {
    id: 'nv29',
    subject: 'non-verbal',
    text: 'Which option shows the correct combination of shapes used to create the final figure?',
    options: ['Combination 1', 'Combination 2', 'Combination 3', 'Combination 4'],
    correctAnswer: 'Combination 3',
    explanation: 'The shapes in Combination 3, when properly arranged, would form the exact pattern shown in the final figure.'
  },
  {
    id: 'nv30',
    subject: 'non-verbal',
    text: 'What comes next in this sequence?',
    options: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    correctAnswer: 'Figure D',
    explanation: 'The sequence follows a pattern where each new figure adds one element and rotates the entire design 45 degrees. Figure D continues this pattern.'
  },
  {
    id: 'nv31',
    subject: 'non-verbal',
    text: 'Which option is the missing piece that completes the pattern?',
    options: ['Piece 1', 'Piece 2', 'Piece 3', 'Piece 4'],
    correctAnswer: 'Piece 3',
    explanation: 'The pattern follows a rule where each row and column must contain specific elements. Piece 3 is the only one that satisfies all constraints.'
  },
  {
    id: 'nv32',
    subject: 'non-verbal',
    text: 'If you combine shapes A and B, which result would you get?',
    options: ['Result W', 'Result X', 'Result Y', 'Result Z'],
    correctAnswer: 'Result Y',
    explanation: 'When shapes A and B are overlapped correctly, they form exactly the pattern shown in Result Y, with all elements in the right position.'
  },
  {
    id: 'nv33',
    subject: 'non-verbal',
    text: 'Which shape is the odd one out?',
    options: ['Sphere', 'Cube', 'Cylinder', 'Cone'],
    correctAnswer: 'Cube',
    explanation: 'A sphere, cylinder, and cone all have at least one curved surface, while a cube has only flat surfaces.'
  },
  {
    id: 'nv34',
    subject: 'non-verbal',
    text: 'What would the pattern look like after the next iteration?',
    options: ['Pattern W', 'Pattern X', 'Pattern Y', 'Pattern Z'],
    correctAnswer: 'Pattern X',
    explanation: 'The pattern evolves by adding elements according to specific rules. Pattern X correctly shows the next step in this evolution.'
  },
  {
    id: 'nv35',
    subject: 'non-verbal',
    text: 'Which option represents the correct folded version of the flat pattern?',
    options: ['Model 1', 'Model 2', 'Model 3', 'Model 4'],
    correctAnswer: 'Model 2',
    explanation: 'When the flat pattern is folded according to the fold lines, it creates the 3D shape shown in Model 2.'
  }
];

export default nonVerbalQuestions;
