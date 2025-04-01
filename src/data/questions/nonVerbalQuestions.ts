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
    explanation: 'A sphere, cylinder, and cone all have at least one curved surface, while a Cube has only flat surfaces.'
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
  },
  {
    id: 'nv36',
    subject: 'non-verbal',
    text: 'What number comes next in the sequence: 2, 3, 5, 8, 12, 17, ?',
    options: ['21', '23', '24', '25'],
    correctAnswer: '23',
    explanation: 'The difference between consecutive terms increases by 1: 3-2=1, 5-3=2, 8-5=3, 12-8=4, 17-12=5, so 17+6=23.'
  },
  {
    id: 'nv37',
    subject: 'non-verbal',
    text: 'Which is the odd one out based on its visual properties?',
    options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
    correctAnswer: 'Circle',
    explanation: 'Square, Triangle, and Rectangle all have straight sides and angles, while a Circle has curved sides and no angles.'
  },
  {
    id: 'nv38',
    subject: 'non-verbal',
    text: 'If you fold the given net, which 3D shape would you form?',
    options: ['Tetrahedron', 'Cube', 'Octahedron', 'Dodecahedron'],
    correctAnswer: 'Tetrahedron',
    explanation: 'The net consists of four equilateral triangles arranged in a way that, when folded, creates a tetrahedron (a pyramid with a triangular base).'
  },
  {
    id: 'nv39',
    subject: 'non-verbal',
    text: 'Which image shows the correct reflection of the given shape across the vertical axis?',
    options: ['Image 1', 'Image 2', 'Image 3', 'Image 4'],
    correctAnswer: 'Image 2',
    explanation: 'In a reflection across a vertical axis, points move horizontally to the opposite side of the axis while keeping the same vertical position. Image 2 shows this correct reflection.'
  },
  {
    id: 'nv40',
    subject: 'non-verbal',
    text: 'What comes next in this pattern sequence?',
    options: ['Pattern A', 'Pattern B', 'Pattern C', 'Pattern D'],
    correctAnswer: 'Pattern A',
    explanation: 'The pattern alternates between rotating 90° clockwise and adding a dot. Pattern A continues this sequence correctly.'
  },
  {
    id: 'nv41',
    subject: 'non-verbal',
    text: 'Which shape does NOT belong in this group?',
    options: ['Cube', 'Sphere', 'Pyramid', 'Cone'],
    correctAnswer: 'Cube',
    explanation: 'Sphere, Pyramid, and Cone all have at least one curved or pointed surface, while a Cube has only flat surfaces.'
  },
  {
    id: 'nv42',
    subject: 'non-verbal',
    text: 'If you rotate the given 3D object 180°, what would it look like?',
    options: ['View 1', 'View 2', 'View 3', 'View 4'],
    correctAnswer: 'View 3',
    explanation: 'When the 3D object is rotated 180°, the orientation of features would match View 3, with elements on opposite sides from the original position.'
  },
  {
    id: 'nv43',
    subject: 'non-verbal',
    text: 'Which pattern completes the grid?',
    options: ['Pattern W', 'Pattern X', 'Pattern Y', 'Pattern Z'],
    correctAnswer: 'Pattern X',
    explanation: 'The grid follows a rule where each row and column must contain specific shapes. Pattern X is the only one that satisfies all constraints for the empty cell.'
  },
  {
    id: 'nv44',
    subject: 'non-verbal',
    text: 'What number comes next in this sequence: 1, 4, 9, 16, 25, ?',
    options: ['30', '36', '42', '49'],
    correctAnswer: '36',
    explanation: 'These are square numbers: 1=1², 4=2², 9=3², 16=4², 25=5², so the next number is 6²=36.'
  },
  {
    id: 'nv45',
    subject: 'non-verbal',
    text: 'Which of these shapes has the greatest number of lines of symmetry?',
    options: ['Equilateral triangle', 'Square', 'Regular pentagon', 'Regular hexagon'],
    correctAnswer: 'Regular hexagon',
    explanation: 'A regular hexagon has 6 lines of symmetry, compared to 3 for an equilateral triangle, 4 for a square, and 5 for a regular pentagon.'
  },
  {
    id: 'nv46',
    subject: 'non-verbal',
    text: 'Which shape would you get if you sliced a cube horizontally through its center?',
    options: ['Circle', 'Triangle', 'Square', 'Rectangle'],
    correctAnswer: 'Square',
    explanation: 'A horizontal cross-section through the center of a cube creates a square shape.'
  },
  {
    id: 'nv47',
    subject: 'non-verbal',
    text: 'Which diagram correctly represents the relationship: "Some A are B, all B are C"?',
    options: ['Diagram 1', 'Diagram 2', 'Diagram 3', 'Diagram 4'],
    correctAnswer: 'Diagram 3',
    explanation: 'Diagram 3 shows circle B completely inside circle C, and circle A partially overlapping with circle B, correctly representing the relationship.'
  },
  {
    id: 'nv48',
    subject: 'non-verbal',
    text: 'Which option shows the paper after it has been folded according to the instructions and hole-punched once?',
    options: ['Result A', 'Result B', 'Result C', 'Result D'],
    correctAnswer: 'Result B',
    explanation: 'Based on the fold lines and punch location, Result B correctly shows where the holes would appear when the paper is unfolded.'
  },
  {
    id: 'nv49',
    subject: 'non-verbal',
    text: 'What comes next in this sequence: ◯, △, □, ◯, △, ?',
    options: ['△', '□', '◯', '▽'],
    correctAnswer: '□',
    explanation: 'The sequence repeats the pattern: circle, triangle, square. After triangle, square comes next.'
  },
  {
    id: 'nv50',
    subject: 'non-verbal',
    text: 'Which image shows the correct view of the 3D object from above?',
    options: ['View A', 'View B', 'View C', 'View D'],
    correctAnswer: 'View C',
    explanation: 'When viewed directly from above, the 3D object would create the projection shown in View C, accounting for all visible elements.'
  },
  {
    id: 'nv51',
    subject: 'non-verbal',
    text: 'What number comes next in this sequence: 3, 6, 4, 8, 5, ?',
    options: ['7', '10', '12', '15'],
    correctAnswer: '10',
    explanation: 'The sequence alternates between multiplying by 2 and subtracting 2: 3×2=6, 6-2=4, 4×2=8, 8-2=5, 5×2=10.'
  },
  {
    id: 'nv52',
    subject: 'non-verbal',
    text: 'Which shape is formed when two cones are joined at their bases?',
    options: ['Cylinder', 'Sphere', 'Torus', 'Spindle'],
    correctAnswer: 'Spindle',
    explanation: 'When two cones are joined at their circular bases, they form a spindle shape (also known as a bicone).'
  },
  {
    id: 'nv53',
    subject: 'non-verbal',
    text: 'Which option shows the net that, when folded, creates the given 3D shape?',
    options: ['Net 1', 'Net 2', 'Net 3', 'Net 4'],
    correctAnswer: 'Net 3',
    explanation: 'When folded along the given lines, Net 3 creates the exact 3D shape shown, with all faces connecting properly.'
  },
  {
    id: 'nv54',
    subject: 'non-verbal',
    text: 'What comes next in this sequence: AB, EF, IJ, MN, ?',
    options: ['OP', 'QR', 'ST', 'UV'],
    correctAnswer: 'QR',
    explanation: 'Each pair starts 4 letters after the previous pair: A→E (4 letters), E→I (4), I→M (4), M→Q (4), so QR follows MN.'
  },
  {
    id: 'nv55',
    subject: 'non-verbal',
    text: 'Which of these has rotational symmetry but NOT line symmetry?',
    options: ['Square', 'Regular pentagon', 'Swastika symbol', 'Equilateral triangle'],
    correctAnswer: 'Swastika symbol',
    explanation: 'The swastika symbol has rotational symmetry (looks the same when rotated 90°) but does not have line symmetry (cannot be divided by a line to create identical halves).'
  },
  {
    id: 'nv56',
    subject: 'non-verbal',
    text: 'What is the next number in this pattern: 2, 6, 12, 20, 30, ?',
    options: ['36', '40', '42', '48'],
    correctAnswer: '42',
    explanation: 'The differences between consecutive terms increase by 2: 6-2=4, 12-6=6, 20-12=8, 30-20=10, so 30+12=42.'
  },
  {
    id: 'nv57',
    subject: 'non-verbal',
    text: 'Which image shows the correct unfolded version of the given cube?',
    options: ['Image A', 'Image B', 'Image C', 'Image D'],
    correctAnswer: 'Image A',
    explanation: 'When the cube is unfolded, the relative positions of symbols on each face would match those shown in Image A.'
  },
  {
    id: 'nv58',
    subject: 'non-verbal',
    text: 'If you rotate shape X 90° clockwise and overlay it with shape Y, which result would you get?',
    options: ['Result 1', 'Result 2', 'Result 3', 'Result 4'],
    correctAnswer: 'Result 3',
    explanation: 'When shape X is rotated 90° clockwise and overlaid with shape Y, the combined shape matches Result 3.'
  },
  {
    id: 'nv59',
    subject: 'non-verbal',
    text: 'What is the next letter in this sequence: A, C, F, J, ?',
    options: ['M', 'N', 'O', 'P'],
    correctAnswer: 'O',
    explanation: 'The gaps between consecutive letters increase: A→C (2 letters), C→F (3 letters), F→J (4 letters), J→O (5 letters).'
  },
  {
    id: 'nv60',
    subject: 'non-verbal',
    text: 'Which is the odd one out based on its 3D properties?',
    options: ['Cube', 'Rectangular prism', 'Pyramid', 'Cuboid'],
    correctAnswer: 'Pyramid',
    explanation: 'Cube, Rectangular prism, and Cuboid all have 6 faces and 12 edges, while a Pyramid has 5 faces and 8 edges (assuming a square base).'
  },
  {
    id: 'nv61',
    subject: 'non-verbal',
    text: 'What comes next in this number pattern: 81, 36, 16, 9, ?',
    options: ['4', '6', '5', '8'],
    correctAnswer: '4',
    explanation: 'These are square numbers decreasing: 81=9², 36=6², 16=4², 9=3², so the next number is 4=2².'
  },
  {
    id: 'nv62',
    subject: 'non-verbal',
    text: 'Which option provides a pattern that can be repeated to tile a plane with no gaps or overlaps?',
    options: ['Pentagon', 'Square', 'Regular Hexagon', 'Circle'],
    correctAnswer: 'Square',
    explanation: 'Among the options, only squares can tile a plane completely with no gaps or overlaps. Regular hexagons can also tile a plane, but pentagons and circles cannot tile without gaps.'
  },
  {
    id: 'nv63',
    subject: 'non-verbal',
    text: 'Which sequence follows the pattern established by 2, 6, 18, 54?',
    options: ['3, 9, 27, 81', '4, 8, 16, 32', '5, 10, 20, 40', '3, 6, 12, 24'],
    correctAnswer: '3, 9, 27, 81',
    explanation: 'In the pattern 2, 6, 18, 54, each number is multiplied by 3 to get the next number. Similarly, 3×3=9, 9×3=27, 27×3=81.'
  },
  {
    id: 'nv64',
    subject: 'non-verbal',
    text: 'Which shape has exactly 8 edges?',
    options: ['Cube', 'Square-based pyramid', 'Triangular prism', 'Tetrahedron'],
    correctAnswer: 'Square-based pyramid',
    explanation: 'A square-based pyramid has 8 edges: 4 edges at the base and 4 edges connecting the base to the apex.'
  },
  {
    id: 'nv65',
    subject: 'non-verbal',
    text: 'If you combine shapes P and Q by overlapping them, which result would you get?',
    options: ['Combined Shape 1', 'Combined Shape 2', 'Combined Shape 3', 'Combined Shape 4'],
    correctAnswer: 'Combined Shape 3',
    explanation: 'When shapes P and Q are overlapped correctly, they form the pattern shown in Combined Shape 3.'
  },
  {
    id: 'nv66',
    subject: 'non-verbal',
    text: 'What comes next in this pattern: ◆◆◇, ◆◇◇, ◇◇◇, ?',
    options: ['◆◆◆', '◆◇◆', '◇◆◇', '◇◇◆'],
    correctAnswer: '◆◆◆',
    explanation: 'The pattern cycles through replacing diamonds with empty diamonds and vice versa. After all empty diamonds, the pattern restarts with all filled diamonds.'
  },
  {
    id: 'nv67',
    subject: 'non-verbal',
    text: 'Which shape can be created by rotating a rectangle around one of its sides?',
    options: ['Sphere', 'Cylinder', 'Cone', 'Torus'],
    correctAnswer: 'Cylinder',
    explanation: 'When a rectangle is rotated around one of its sides, it sweeps out a cylinder shape.'
  },
  {
    id: 'nv68',
    subject: 'non-verbal',
    text: 'What is the next number in this sequence: 5, 8, 12, 17, 23, ?',
    options: ['28', '29', '30', '32'],
    correctAnswer: '30',
    explanation: 'The differences between consecutive terms increase by 1: 8-5=3, 12-8=4, 17-12=5, 23-17=6, so 23+7=30.'
  },
  {
    id: 'nv69',
    subject: 'non-verbal',
    text: 'Which image shows the correct shadow of the 3D object when light shines from the left?',
    options: ['Shadow 1', 'Shadow 2', 'Shadow 3', 'Shadow 4'],
    correctAnswer: 'Shadow 2',
    explanation: 'Based on the shape of the 3D object and the direction of light (from the left), Shadow 2 correctly represents the projection that would be cast.'
  },
  {
    id: 'nv70',
    subject: 'non-verbal',
    text: 'What comes next in this sequence: ▢, ▢▢, ▢▢▢, ▢▢, ?',
    options: ['▢', '▢▢▢', '▢▢▢▢', '▢▢▢▢▢'],
    correctAnswer: '▢',
    explanation: 'The sequence follows the pattern of 1, 2, 3, 2, 1, cycling between increasing and decreasing the number of squares.'
  },
  {
    id: 'nv71',
    subject: 'non-verbal',
    text: 'Which of these shapes has the smallest ratio of perimeter to area?',
    options: ['Circle', 'Square', 'Equilateral Triangle', 'Rectangle'],
    correctAnswer: 'Circle',
    explanation: 'For a given area, a circle has the smallest possible perimeter among all shapes, giving it the smallest ratio of perimeter to area.'
  },
  {
    id: 'nv72',
    subject: 'non-verbal',
    text: 'If you unfold the given 3D shape, which net would you get?',
    options: ['Net W', 'Net X', 'Net Y', 'Net Z'],
    correctAnswer: 'Net Y',
    explanation: 'When the 3D shape is unfolded, the arrangement of faces and their connections match the pattern shown in Net Y.'
  },
  {
    id: 'nv73',
    subject: 'non-verbal',
    text: 'What is the next letter pair in this sequence: AZ, BY, CX, ?',
    options: ['DU', 'DV', 'DW', 'EW'],
    correctAnswer: 'DW',
    explanation: 'The pattern moves forward through the alphabet on the left (A→B→C→D) and backward through the alphabet on the right (Z→Y→X→W).'
  },
  {
    id: 'nv74',
    subject: 'non-verbal',
    text: 'Which option shows the correct combination of shapes needed to create the given compound shape?',
    options: ['Combination 1', 'Combination 2', 'Combination 3', 'Combination 4'],
    correctAnswer: 'Combination 2',
    explanation: 'The shapes in Combination 2, when properly arranged, form the exact compound shape shown in the question.'
  },
  {
    id: 'nv75',
    subject: 'non-verbal',
    text: 'What is the next number in this pattern: 2, 4, 7, 11, 16, ?',
    options: ['21', '22', '23', '24'],
    correctAnswer: '22',
    explanation: 'The differences between consecutive terms increase by 1: 4-2=2, 7-4=3, 11-7=4, 16-11=5, so 16+6=22.'
  },
  {
    id: 'nv76',
    subject: 'non-verbal',
    text: 'Which 3D object has exactly 6 vertices?',
    options: ['Cube', 'Triangular prism', 'Octahedron', 'Square-based pyramid'],
    correctAnswer: 'Triangular prism',
    explanation: 'A triangular prism has 6 vertices: 3 on one triangular face and 3 on the other.'
  },
  {
    id: 'nv77',
    subject: 'non-verbal',
    text: 'If shape A is rotated 180° and combined with shape B, which result would you get?',
    options: ['Result I', 'Result II', 'Result III', 'Result IV'],
    correctAnswer: 'Result III',
    explanation: 'When shape A is rotated 180° and combined with shape B, the resulting pattern matches Result III exactly.'
  },
  {
    id: 'nv78',
    subject: 'non-verbal',
    text: 'What comes next in this sequence: ●○○, ○●○, ○○●, ?',
    options: ['●●●', '○○○', '●○○', '●●○'],
    correctAnswer: '●○○',
    explanation: 'The filled circle cycles through each position from left to right, then repeats. After position 3, it returns to position 1.'
  },
  {
    id: 'nv79',
    subject: 'non-verbal',
    text: 'Which option shows the correct cross-section of a cone cut parallel to its base?',
    options: ['Triangle', 'Rectangle', 'Circle', 'Ellipse'],
    correctAnswer: 'Circle',
    explanation: 'When a cone is cut by a plane parallel to its base, the cross-section is always a circle.'
  },
  {
    id: 'nv80',
    subject: 'non-verbal',
    text: 'What is the next number in this sequence: 1, 1, 2, 3, 5, 8, ?',
    options: ['11', '12', '13', '15'],
    correctAnswer: '13',
    explanation: 'This is the Fibonacci sequence, where each number is the sum of the two preceding ones: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13.'
  },
  {
    id: 'nv81',
    subject: 'non-verbal',
    text: 'Which option shows the correct mirror image of the given shape across a horizontal axis?',
    options: ['Image P', 'Image Q', 'Image R', 'Image S'],
    correctAnswer: 'Image R',
    explanation: 'In a reflection across a horizontal axis, points move vertically to the opposite side of the axis. Image R shows this correct reflection.'
  },
  {
    id: 'nv82',
    subject: 'non-verbal',
    text: 'What is the next pattern in this sequence?',
    options: ['Pattern 1', 'Pattern 2', 'Pattern 3', 'Pattern 4'],
    correctAnswer: 'Pattern 2',
    explanation: 'The pattern alternates between adding a line and rotating 45° clockwise. Pattern 2 continues this sequence correctly.'
  },
  {
    id: 'nv83',
    subject: 'non-verbal',
    text: 'Which 3D shape has more faces than edges?',
    options: ['Cube', 'Tetrahedron', 'Octahedron', 'None of these'],
    correctAnswer: 'None of these',
    explanation: 'According to Euler\'s formula for polyhedra (F+V-E=2), no convex polyhedron can have more faces (F) than edges (E).'
  },
  {
    id: 'nv84',
    subject: 'non-verbal',
    text: 'What comes next in this letter pattern: Z, W, T, Q, ?',
    options: ['N', 'M', 'O', 'P'],
    correctAnswer: 'N',
    explanation: 'The pattern subtracts 3, then 3, then 3 letters each time in reverse alphabetical order: Z→W (3 letters), W→T (3), T→Q (3), Q→N (3).'
  },
  {
    id: 'nv85',
    subject: 'non-verbal',
    text: 'Which of these has the greatest volume for the same height and base dimensions?',
    options: ['Pyramid', 'Prism', 'Cone', 'Cylinder'],
    correctAnswer: 'Cylinder',
    explanation: 'Given the same base area and height, a cylinder has the greatest volume compared to a pyramid, prism (triangular), or cone.'
  },
  {
    id: 'nv86',
    subject: 'non-verbal',
    text: 'What is the next number in this pattern: 3, 8, 15, 24, 35, ?',
    options: ['42', '45', '48', '50'],
    correctAnswer: '48',
    explanation: 'These are of the form n²+2. For n=1,2,3,4,5,6: 1²+2=3, 2²+2=6, 3²+2=11, 4²+2=18, 5²+2=27, 6²+2=38. The correct pattern is actually n²+n+2, giving 48 as the next number.'
  },
  {
    id: 'nv87',
    subject: 'non-verbal',
    text: 'Which image shows the correct result after the given shape is rotated 270° counterclockwise?',
    options: ['Result A', 'Result B', 'Result C', 'Result D'],
    correctAnswer: 'Result B',
    explanation: 'When the shape is rotated 270° counterclockwise (which is equivalent to 90° clockwise), the orientation matches Result B.'
  },
  {
    id: 'nv88',
    subject: 'non-verbal',
    text: 'What shape comes next in this sequence: △, □, ○, △, □, ?',
    options: ['□', '○', '△', '◇'],
    correctAnswer: '○',
    explanation: 'The sequence repeats the pattern: triangle, square, circle. After square, circle comes next.'
  },
  {
    id: 'nv89',
    subject: 'non-verbal',
    text: 'Which 3D object has exactly 5 faces?',
    options: ['Cube', 'Tetrahedron', 'Square-based pyramid', 'Triangular prism'],
    correctAnswer: 'Square-based pyramid',
    explanation: 'A square-based pyramid has 5 faces: 1 square base and 4 triangular faces.'
  },
  {
    id: 'nv90',
    subject: 'non-verbal',
    text: 'What is the next shape in this pattern: ◯, ◐, ●, ◐, ?',
    options: ['◑', '◯', '●', '◒'],
    correctAnswer: '◯',
    explanation: 'The pattern cycles through empty circle, half-filled circle, filled circle, half-filled circle, then repeats with empty circle.'
  },
  {
    id: 'nv91',
    subject: 'non-verbal',
    text: 'Which of these has the greatest volume for the same height and base dimensions?',
    options: ['Pyramid', 'Prism', 'Cone', 'Cylinder'],
    correctAnswer: 'Cylinder',
    explanation: 'Given the same base area and height, a cylinder has the greatest volume compared to a pyramid, prism (triangular), or cone.'
  },
  {
    id: 'nv92',
    subject: 'non-verbal',
    text: 'What comes next in this sequence: 16, 8, 4, 2, ?',
    options: ['0', '1', '0.5', '-1'],
    correctAnswer: '1',
    explanation: 'Each number is divided by 2 to get the next number: 16÷2=8, 8÷2=4, 4÷2=2, 2÷2=1.'
  },
  {
    id: 'nv93',
    subject: 'non-verbal',
    text: 'Which image shows the correct view of the 3D object from the right side?',
    options: ['View P', 'View Q', 'View R', 'View S'],
    correctAnswer: 'View Q',
    explanation: 'When the 3D object is viewed from the right side, the visible faces and features align as shown in View Q.'
  },
  {
    id: 'nv94',
    subject: 'non-verbal',
    text: 'What appears next in this pattern sequence?',
    options: ['Pattern W', 'Pattern X', 'Pattern Y', 'Pattern Z'],
    correctAnswer: 'Pattern Z',
    explanation: 'The pattern alternates between adding a dot and rotating 90° counterclockwise. Pattern Z continues this sequence correctly.'
  },
  {
    id: 'nv95',
    subject: 'non-verbal',
    text: 'Which of these is NOT a regular polyhedron?',
    options: ['Tetrahedron', 'Cube', 'Rectangular prism', 'Icosahedron'],
    correctAnswer: 'Rectangular prism',
    explanation: 'A regular polyhedron has all faces as identical regular polygons. A rectangular prism has rectangular faces of different dimensions, so it\'s not regular.'
  },
  {
    id: 'nv96',
    subject: 'non-verbal',
    text: 'What is the next number in this sequence: 7, 12, 19, 28, 39, ?',
    options: ['48', '49', '50', '52'],
    correctAnswer: '52',
    explanation: 'The differences between consecutive terms increase by 2: 12-7=5, 19-12=7, 28-19=9, 39-28=11, so 39+13=52.'
  },
  {
    id: 'nv97',
    subject: 'non-verbal',
    text: 'Which option shows the correct top view of the given 3D structure?',
    options: ['Top View 1', 'Top View 2', 'Top View 3', 'Top View 4'],
    correctAnswer: 'Top View 3',
    explanation: 'When viewed directly from above, the 3D structure would create the projection shown in Top View 3, accounting for all vertical elements.'
  },
  {
    id: 'nv98',
    subject: 'non-verbal',
    text: 'What comes next in this pattern: AABABC?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A',
    explanation: 'The pattern expands by adding new letters: A, then AA(B), then AAB(A), then AABA(B), then AABAB(C), so the next letter is A.'
  },
  {
    id: 'nv99',
    subject: 'non-verbal',
    text: 'Which of these has the same number of faces, edges, and vertices?',
    options: ['Cube', 'Tetrahedron', 'Octahedron', 'None of these'],
    correctAnswer: 'Tetrahedron',
    explanation: 'A tetrahedron has 4 faces, 4 vertices, and 6 edges. According to Euler\'s formula (F+V-E=2), only a tetrahedron has the property where the number of faces equals the number of vertices.'
  },
  {
    id: 'nv100',
    subject: 'non-verbal',
    text: 'What is the next number in this sequence: 1, 2, 6, 24, 120, ?',
    options: ['620', '720', '600', '520'],
    correctAnswer: '720',
    explanation: 'These are factorials: 1=1!, 2=2!, 6=3!, 24=4!, 120=5!, so the next number is 6! = 720.'
  }
];

export default nonVerbalQuestions;
