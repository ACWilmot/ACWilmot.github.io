import { Question } from '@/types/questionTypes';

const nonVerbalQuestions: Question[] = [
  {
    id: 'nv1',
    subject: 'non-verbal',
    text: 'Which shape completes the pattern?',
    options: ['Circle', 'Square', 'Triangle', 'Pentagon'],
    correctAnswer: 'Triangle',
    explanation: 'The pattern alternates between shapes with straight edges and curved edges.',
    difficulty: 'medium'
  },
  {
    id: 'nv2',
    subject: 'non-verbal',
    text: 'Identify the next image in the sequence.',
    options: ['Image A', 'Image B', 'Image C', 'Image D'],
    correctAnswer: 'Image B',
    explanation: 'The sequence involves rotating the image 90 degrees clockwise each time.',
    difficulty: 'medium'
  },
  {
    id: 'nv3',
    subject: 'non-verbal',
    text: 'Which figure is different from the others?',
    options: ['Figure 1', 'Figure 2', 'Figure 3', 'Figure 4'],
    correctAnswer: 'Figure 3',
    explanation: 'All figures except Figure 3 are symmetrical.',
    difficulty: 'medium'
  },
  {
    id: 'nv4',
    subject: 'non-verbal',
    text: 'Select the box that continues the series.',
    options: ['Box A', 'Box B', 'Box C', 'Box D'],
    correctAnswer: 'Box D',
    explanation: 'The series adds one line to the figure in each subsequent box.',
    difficulty: 'medium'
  },
  {
    id: 'nv5',
    subject: 'non-verbal',
    text: 'Choose the image that fits the empty space.',
    options: ['Option X', 'Option Y', 'Option Z', 'Option W'],
    correctAnswer: 'Option Z',
    explanation: 'The correct image maintains the pattern of alternating colors and shapes.',
    difficulty: 'medium'
  },
  {
    id: 'nv6',
    subject: 'non-verbal',
    text: 'Find the missing piece to complete the larger image.',
    options: ['Piece 1', 'Piece 2', 'Piece 3', 'Piece 4'],
    correctAnswer: 'Piece 2',
    explanation: 'Piece 2 is the only piece that correctly aligns with the surrounding shapes and colors.',
    difficulty: 'medium'
  },
  {
    id: 'nv7',
    subject: 'non-verbal',
    text: 'Which of the following does not belong in the group?',
    options: ['Item A', 'Item B', 'Item C', 'Item D'],
    correctAnswer: 'Item C',
    explanation: 'All items except Item C are types of geometric shapes.',
    difficulty: 'medium'
  },
  {
    id: 'nv8',
    subject: 'non-verbal',
    text: 'Identify the mirror image of the given shape.',
    options: ['Mirror A', 'Mirror B', 'Mirror C', 'Mirror D'],
    correctAnswer: 'Mirror A',
    explanation: 'Mirror A correctly reflects the original shape across a vertical axis.',
    difficulty: 'medium'
  },
  {
    id: 'nv9',
    subject: 'non-verbal',
    text: 'Select the image that is embedded in the larger picture.',
    options: ['Embedded 1', 'Embedded 2', 'Embedded 3', 'Embedded 4'],
    correctAnswer: 'Embedded 3',
    explanation: 'Embedded 3 is the only image that can be found within the lines of the larger picture.',
    difficulty: 'medium'
  },
  {
    id: 'nv10',
    subject: 'non-verbal',
    text: 'Which cube can be made from the unfolded net?',
    options: ['Cube X', 'Cube Y', 'Cube Z', 'Cube W'],
    correctAnswer: 'Cube Y',
    explanation: 'Cube Y is the only cube that matches the pattern and orientation of the unfolded net.',
    difficulty: 'medium'
  },
  {
    id: 'nv11',
    subject: 'non-verbal',
    text: 'Complete the analogy: Square is to Cube as Circle is to what?',
    options: ['Sphere', 'Cylinder', 'Cone', 'Pyramid'],
    correctAnswer: 'Sphere',
    explanation: 'A square is a 2D shape that forms a cube (3D), similarly, a circle is a 2D shape that forms a sphere (3D).',
    difficulty: 'medium'
  },
  {
    id: 'nv12',
    subject: 'non-verbal',
    text: 'Find the odd one out.',
    options: ['Image A', 'Image B', 'Image C', 'Image D'],
    correctAnswer: 'Image C',
    explanation: 'All images except Image C are symmetrical along a vertical axis.',
    difficulty: 'medium'
  },
  {
    id: 'nv13',
    subject: 'non-verbal',
    text: 'Which of the following completes the sequence?',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correctAnswer: 'Option 2',
    explanation: 'The sequence involves adding a line segment to the figure in each step.',
    difficulty: 'medium'
  },
  {
    id: 'nv14',
    subject: 'non-verbal',
    text: 'Select the figure that is identical to the first.',
    options: ['Figure A', 'Figure B', 'Figure C', 'Figure D'],
    correctAnswer: 'Figure B',
    explanation: 'Figure B is the only figure that matches the exact shape and orientation of the first figure.',
    difficulty: 'medium'
  },
  {
    id: 'nv15',
    subject: 'non-verbal',
    text: 'Which of the following is the rotated version of the original image?',
    options: ['Rotated A', 'Rotated B', 'Rotated C', 'Rotated D'],
    correctAnswer: 'Rotated C',
    explanation: 'Rotated C is the original image rotated 180 degrees.',
    difficulty: 'medium'
  },
  {
    id: 'nv16',
    subject: 'non-verbal',
    text: 'Identify the next logical element in the series.',
    options: ['Element X', 'Element Y', 'Element Z', 'Element W'],
    correctAnswer: 'Element Z',
    explanation: 'The series alternates between adding and subtracting a shape.',
    difficulty: 'medium'
  },
  {
    id: 'nv17',
    subject: 'non-verbal',
    text: 'Which shape fits both patterns?',
    options: ['Shape P', 'Shape Q', 'Shape R', 'Shape S'],
    correctAnswer: 'Shape R',
    explanation: 'Shape R is the only shape that maintains consistency in both horizontal and vertical patterns.',
    difficulty: 'medium'
  },
  {
    id: 'nv18',
    subject: 'non-verbal',
    text: 'Select the image that results from folding the paper.',
    options: ['Folded 1', 'Folded 2', 'Folded 3', 'Folded 4'],
    correctAnswer: 'Folded 3',
    explanation: 'Folded 3 correctly shows the result of folding the paper along the indicated lines.',
    difficulty: 'medium'
  },
  {
    id: 'nv19',
    subject: 'non-verbal',
    text: 'Which of the following is the correct water reflection of the image?',
    options: ['Reflection A', 'Reflection B', 'Reflection C', 'Reflection D'],
    correctAnswer: 'Reflection B',
    explanation: 'Reflection B is the original image reflected across a horizontal axis.',
    difficulty: 'medium'
  },
  {
    id: 'nv20',
    subject: 'non-verbal',
    text: 'Find the figure that completes the matrix.',
    options: ['Matrix A', 'Matrix B', 'Matrix C', 'Matrix D'],
    correctAnswer: 'Matrix C',
    explanation: 'Matrix C is the only figure that maintains the pattern across rows and columns.',
    difficulty: 'medium'
  },
  {
    id: 'nv21',
    subject: 'non-verbal',
    text: 'Which of the following is the correct top view of the 3D object?',
    options: ['Top View A', 'Top View B', 'Top View C', 'Top View D'],
    correctAnswer: 'Top View A',
    explanation: 'Top View A correctly represents what the object looks like when viewed from directly above.',
    difficulty: 'medium'
  },
  {
    id: 'nv22',
    subject: 'non-verbal',
    text: 'Select the image that is the correct cross-section of the object.',
    options: ['Cross-Section X', 'Cross-Section Y', 'Cross-Section Z', 'Cross-Section W'],
    correctAnswer: 'Cross-Section Y',
    explanation: 'Cross-Section Y accurately shows the internal structure of the object when cut along the specified plane.',
    difficulty: 'medium'
  },
  {
    id: 'nv23',
    subject: 'non-verbal',
    text: 'Which of the following is the correct unfolded version of the 3D shape?',
    options: ['Unfolded 1', 'Unfolded 2', 'Unfolded 3', 'Unfolded 4'],
    correctAnswer: 'Unfolded 2',
    explanation: 'Unfolded 2 is the only option that can be folded to create the original 3D shape.',
    difficulty: 'medium'
  },
  {
    id: 'nv24',
    subject: 'non-verbal',
    text: 'Identify the missing segment to complete the figure.',
    options: ['Segment A', 'Segment B', 'Segment C', 'Segment D'],
    correctAnswer: 'Segment C',
    explanation: 'Segment C is the only segment that fits perfectly to complete the figure without overlapping or leaving gaps.',
    difficulty: 'medium'
  },
  {
    id: 'nv25',
    subject: 'non-verbal',
    text: 'Which of the following is the correct side view of the object?',
    options: ['Side View A', 'Side View B', 'Side View C', 'Side View D'],
    correctAnswer: 'Side View B',
    explanation: 'Side View B accurately represents what the object looks like when viewed from the side.',
    difficulty: 'medium'
  },
  {
    id: 'nv26',
    subject: 'non-verbal',
    text: 'Select the image that is the correct combination of the two given images.',
    options: ['Combined X', 'Combined Y', 'Combined Z', 'Combined W'],
    correctAnswer: 'Combined Z',
    explanation: 'Combined Z is the only image that correctly merges the features of both given images without distortion.',
    difficulty: 'medium'
  },
  {
    id: 'nv27',
    subject: 'non-verbal',
    text: 'Which of the following is the correct mirrored version of the shape?',
    options: ['Mirrored A', 'Mirrored B', 'Mirrored C', 'Mirrored D'],
    correctAnswer: 'Mirrored A',
    explanation: 'Mirrored A is the original shape reflected across a vertical axis.',
    difficulty: 'medium'
  },
  {
    id: 'nv28',
    subject: 'non-verbal',
    text: 'Find the missing piece to complete the puzzle.',
    options: ['Piece 1', 'Piece 2', 'Piece 3', 'Piece 4'],
    correctAnswer: 'Piece 3',
    explanation: 'Piece 3 is the only piece that correctly aligns with the surrounding shapes and colors to complete the puzzle.',
    difficulty: 'medium'
  },
  {
    id: 'nv29',
    subject: 'non-verbal',
    text: 'Which of the following is the correct front view of the object?',
    options: ['Front View A', 'Front View B', 'Front View C', 'Front View D'],
    correctAnswer: 'Front View C',
    explanation: 'Front View C accurately represents what the object looks like when viewed from the front.',
    difficulty: 'medium'
  },
  {
    id: 'nv30',
    subject: 'non-verbal',
    text: 'Select the image that is the correct overlay of the two given images.',
    options: ['Overlay X', 'Overlay Y', 'Overlay Z', 'Overlay W'],
    correctAnswer: 'Overlay Y',
    explanation: 'Overlay Y is the only image that correctly combines the features of both given images without distortion or missing elements.',
    difficulty: 'medium'
  },
  {
    id: 'nv31',
    subject: 'non-verbal',
    text: 'Which of the following is the correct bottom view of the object?',
    options: ['Bottom View A', 'Bottom View B', 'Bottom View C', 'Bottom View D'],
    correctAnswer: 'Bottom View D',
    explanation: 'Bottom View D accurately represents what the object looks like when viewed from directly below.',
    difficulty: 'medium'
  },
  {
    id: 'nv32',
    subject: 'non-verbal',
    text: 'Select the image that is the correct intersection of the two given shapes.',
    options: ['Intersection X', 'Intersection Y', 'Intersection Z', 'Intersection W'],
    correctAnswer: 'Intersection W',
    explanation: 'Intersection W is the only image that correctly shows the overlapping area of both given shapes.',
    difficulty: 'medium'
  },
  {
    id: 'nv33',
    subject: 'non-verbal',
    text: 'Which of the following is the correct back view of the object?',
    options: ['Back View A', 'Back View B', 'Back View C', 'Back View D'],
    correctAnswer: 'Back View B',
    explanation: 'Back View B accurately represents what the object looks like when viewed from the back.',
    difficulty: 'medium'
  },
  {
    id: 'nv34',
    subject: 'non-verbal',
    text: 'Select the image that is the correct union of the two given shapes.',
    options: ['Union X', 'Union Y', 'Union Z', 'Union W'],
    correctAnswer: 'Union Z',
    explanation: 'Union Z is the only image that correctly combines all areas of both given shapes without omitting any parts.',
    difficulty: 'medium'
  },
  {
    id: 'nv35',
    subject: 'non-verbal',
    text: 'Which of the following is the correct isometric view of the object?',
    options: ['Isometric A', 'Isometric B', 'Isometric C', 'Isometric D'],
    correctAnswer: 'Isometric C',
    explanation: 'Isometric C accurately represents the 3D object in a 2D plane, maintaining the proportions and angles.',
    difficulty: 'medium'
  },
  {
    id: 'nv36',
    subject: 'non-verbal',
    text: 'Select the image that is the correct difference between the two given shapes.',
    options: ['Difference X', 'Difference Y', 'Difference Z', 'Difference W'],
    correctAnswer: 'Difference X',
    explanation: 'Difference X is the only image that correctly shows the area of the first shape that does not overlap with the second shape.',
    difficulty: 'medium'
  },
  {
    id: 'nv37',
    subject: 'non-verbal',
    text: 'Which of the following is the correct perspective view of the object?',
    options: ['Perspective A', 'Perspective B', 'Perspective C', 'Perspective D'],
    correctAnswer: 'Perspective B',
    explanation: 'Perspective B accurately represents the 3D object as it would be seen from a specific viewpoint, including depth and vanishing points.',
    difficulty: 'medium'
  },
  {
    id: 'nv38',
    subject: 'non-verbal',
    text: 'Select the image that is the correct symmetric difference between the two given shapes.',
    options: ['Symmetric Difference X', 'Symmetric Difference Y', 'Symmetric Difference Z', 'Symmetric Difference W'],
    correctAnswer: 'Symmetric Difference Y',
    explanation: 'Symmetric Difference Y is the only image that correctly shows the areas of both shapes that do not overlap.',
    difficulty: 'medium'
  },
  {
    id: 'nv39',
    subject: 'non-verbal',
    text: 'Which of the following is the correct exploded view of the object?',
    options: ['Exploded A', 'Exploded B', 'Exploded C', 'Exploded D'],
    correctAnswer: 'Exploded D',
    explanation: 'Exploded D accurately represents all components of the object separated but aligned to show how they fit together.',
    difficulty: 'medium'
  },
  {
    id: 'nv40',
    subject: 'non-verbal',
    text: 'Select the image that is the correct complement of the given shape.',
    options: ['Complement X', 'Complement Y', 'Complement Z', 'Complement W'],
    correctAnswer: 'Complement Z',
    explanation: 'Complement Z is the only image that correctly shows the area outside the given shape within a defined boundary.',
    difficulty: 'medium'
  },
  {
    id: 'nv41',
    subject: 'non-verbal',
    text: 'Which of the following is the correct cutaway view of the object?',
    options: ['Cutaway A', 'Cutaway B', 'Cutaway C', 'Cutaway D'],
    correctAnswer: 'Cutaway A',
    explanation: 'Cutaway A accurately represents the object with a portion of the outer surface removed to reveal the interior.',
    difficulty: 'medium'
  },
  {
    id: 'nv42',
    subject: 'non-verbal',
    text: 'Select the image that is the correct projection of the given shape onto a plane.',
    options: ['Projection X', 'Projection Y', 'Projection Z', 'Projection W'],
    correctAnswer: 'Projection W',
    explanation: 'Projection W is the only image that correctly shows the shape as it would appear when projected onto a flat surface.',
    difficulty: 'medium'
  },
  {
    id: 'nv43',
    subject: 'non-verbal',
    text: 'Which of the following is the correct section view of the object?',
    options: ['Section A', 'Section B', 'Section C', 'Section D'],
    correctAnswer: 'Section C',
    explanation: 'Section C accurately represents the object as if it has been cut through to reveal the internal structure at the cutting plane.',
    difficulty: 'medium'
  },
  {
    id: 'nv44',
    subject: 'non-verbal',
    text: 'Select the image that is the correct development of the given shape.',
    options: ['Development X', 'Development Y', 'Development Z', 'Development W'],
    correctAnswer: 'Development Y',
    explanation: 'Development Y is the only image that correctly shows how the surface of the 3D shape can be unfolded onto a 2D plane.',
    difficulty: 'medium'
  },
  {
    id: 'nv45',
    subject: 'non-verbal',
    text: 'Which of the following is the correct auxiliary view of the object?',
    options: ['Auxiliary A', 'Auxiliary B', 'Auxiliary C', 'Auxiliary D'],
    correctAnswer: 'Auxiliary B',
    explanation: 'Auxiliary B accurately represents the view of the object from a direction other than the primary planes, showing true size and shape of inclined surfaces.',
    difficulty: 'medium'
  },
  {
    id: 'nv46',
    subject: 'non-verbal',
    text: 'Select the image that is the correct pattern of the given shape.',
    options: ['Pattern X', 'Pattern Y', 'Pattern Z', 'Pattern W'],
    correctAnswer: 'Pattern X',
    explanation: 'Pattern X is the only image that correctly shows the repeating arrangement of elements that form the given shape.',
    difficulty: 'medium'
  },
  {
    id: 'nv47',
    subject: 'non-verbal',
    text: 'Which of the following is the correct revolved view of the object?',
    options: ['Revolved A', 'Revolved B', 'Revolved C', 'Revolved D'],
    correctAnswer: 'Revolved D',
    explanation: 'Revolved D accurately represents the object with a portion rotated to show features that are not visible in the primary views.',
    difficulty: 'medium'
  },
  {
    id: 'nv48',
    subject: 'non-verbal',
    text: 'Select the image that is the correct tessellation of the given shape.',
    options: ['Tessellation X', 'Tessellation Y', 'Tessellation Z', 'Tessellation W'],
    correctAnswer: 'Tessellation W',
    explanation: 'Tessellation W is the only image that correctly shows the shape repeated without gaps or overlaps to cover a plane.',
    difficulty: 'medium'
  },
  {
    id: 'nv49',
    subject: 'non-verbal',
    text: 'Which of the following is the correct removed view of the object?',
    options: ['Removed A', 'Removed B', 'Removed C', 'Removed D'],
    correctAnswer: 'Removed C',
    explanation: 'Removed C accurately represents a detailed view of a specific feature, placed separately from the main view but with a clear indication of its location.',
    difficulty: 'medium'
  },
  {
    id: 'nv50',
    subject: 'non-verbal',
    text: 'Select the image that is the correct fractal of the given shape.',
    options: ['Fractal X', 'Fractal Y', 'Fractal Z', 'Fractal W'],
    correctAnswer: 'Fractal Y',
    explanation: 'Fractal Y is the only image that correctly shows the shape repeated at different scales, exhibiting self-similarity.',
    difficulty: 'medium'
  },
  {
    id: 'nv51',
    subject: 'non-verbal',
    text: 'Which of the following is the correct aligned section view of the object?',
    options: ['Aligned Section A', 'Aligned Section B', 'Aligned Section C', 'Aligned Section D'],
    correctAnswer: 'Aligned Section A',
    explanation: 'Aligned Section A accurately represents the object with features rotated into the cutting plane to show them in true relationship to each other.',
    difficulty: 'medium'
  },
  {
    id: 'nv52',
    subject: 'non-verbal',
    text: 'Select the image that is the correct moiré pattern of the given shape.',
    options: ['Moiré Pattern X', 'Moiré Pattern Y', 'Moiré Pattern Z', 'Moiré Pattern W'],
    correctAnswer: 'Moiré Pattern W',
    explanation: 'Moiré Pattern W is the only image that correctly shows the interference pattern created when two similar patterns are overlaid with a slight angle or displacement.',
    difficulty: 'medium'
  },
  {
    id: 'nv53',
    subject: 'non-verbal',
    text: 'Which of the following is the correct broken-out section view of the object?',
    options: ['Broken-Out Section A', 'Broken-Out Section B', 'Broken-Out Section C', 'Broken-Out Section D'],
    correctAnswer: 'Broken-Out Section B',
    explanation: 'Broken-Out Section B accurately represents a portion of the object with a section view, limited by a break line to show interior details.',
    difficulty: 'medium'
  },
  {
    id: 'nv54',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Voronoi diagram of the given shape.',
    options: ['Voronoi Diagram X', 'Voronoi Diagram Y', 'Voronoi Diagram Z', 'Voronoi Diagram W'],
    correctAnswer: 'Voronoi Diagram Z',
    explanation: 'Voronoi Diagram Z is the only image that correctly shows the partitioning of a plane into regions based on distance to points in a specific subset of the plane.',
    difficulty: 'medium'
  },
  {
    id: 'nv55',
    subject: 'non-verbal',
    text: 'Which of the following is the correct removed section view of the object?',
    options: ['Removed Section A', 'Removed Section B', 'Removed Section C', 'Removed Section D'],
    correctAnswer: 'Removed Section C',
    explanation: 'Removed Section C accurately represents a section view placed separately from the main view, often at a different scale, to show intricate details.',
    difficulty: 'medium'
  },
  {
    id: 'nv56',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Penrose tiling of the given shape.',
    options: ['Penrose Tiling X', 'Penrose Tiling Y', 'Penrose Tiling Z', 'Penrose Tiling W'],
    correctAnswer: 'Penrose Tiling Y',
    explanation: 'Penrose Tiling Y is the only image that correctly shows a non-periodic tiling generated by a set of tiles with specific matching rules.',
    difficulty: 'medium'
  },
  {
    id: 'nv57',
    subject: 'non-verbal',
    text: 'Which of the following is the correct partial view of the object?',
    options: ['Partial View A', 'Partial View B', 'Partial View C', 'Partial View D'],
    correctAnswer: 'Partial View D',
    explanation: 'Partial View D accurately represents a portion of the object, used to simplify the drawing or focus on a specific area of interest.',
    difficulty: 'medium'
  },
  {
    id: 'nv58',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Apollonian gasket of the given shape.',
    options: ['Apollonian Gasket X', 'Apollonian Gasket Y', 'Apollonian Gasket Z', 'Apollonian Gasket W'],
    correctAnswer: 'Apollonian Gasket X',
    explanation: 'Apollonian Gasket X is the only image that correctly shows a fractal generated by circles tangent to each other, filling the space within a larger circle.',
    difficulty: 'medium'
  },
  {
    id: 'nv59',
    subject: 'non-verbal',
    text: 'Which of the following is the correct simplified view of the object?',
    options: ['Simplified View A', 'Simplified View B', 'Simplified View C', 'Simplified View D'],
    correctAnswer: 'Simplified View C',
    explanation: 'Simplified View C accurately represents the object with reduced complexity, omitting minor details to improve clarity.',
    difficulty: 'medium'
  },
  {
    id: 'nv60',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Koch snowflake of the given shape.',
    options: ['Koch Snowflake X', 'Koch Snowflake Y', 'Koch Snowflake Z', 'Koch Snowflake W'],
    correctAnswer: 'Koch Snowflake W',
    explanation: 'Koch Snowflake W is the only image that correctly shows a fractal curve generated by repeatedly modifying a line segment with equilateral triangles.',
    difficulty: 'medium'
  },
  {
    id: 'nv61',
    subject: 'non-verbal',
    text: 'Which of the following is the correct chain line representation of the object?',
    options: ['Chain Line A', 'Chain Line B', 'Chain Line C', 'Chain Line D'],
    correctAnswer: 'Chain Line B',
    explanation: 'Chain Line B accurately represents the object using a specific pattern of long and short dashes to indicate a surface or area.',
    difficulty: 'medium'
  },
  {
    id: 'nv62',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Sierpinski triangle of the given shape.',
    options: ['Sierpinski Triangle X', 'Sierpinski Triangle Y', 'Sierpinski Triangle Z', 'Sierpinski Triangle W'],
    correctAnswer: 'Sierpinski Triangle Z',
    explanation: 'Sierpinski Triangle Z is the only image that correctly shows a fractal generated by repeatedly removing the central triangle from a larger triangle.',
    difficulty: 'medium'
  },
  {
    id: 'nv63',
    subject: 'non-verbal',
    text: 'Which of the following is the correct phantom line representation of the object?',
    options: ['Phantom Line A', 'Phantom Line B', 'Phantom Line C', 'Phantom Line D'],
    correctAnswer: 'Phantom Line D',
    explanation: 'Phantom Line D accurately represents the object using a specific pattern of long dashes alternating with two short dashes to indicate a feature that is not directly visible.',
    difficulty: 'medium'
  },
  {
    id: 'nv64',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Hilbert curve of the given shape.',
    options: ['Hilbert Curve X', 'Hilbert Curve Y', 'Hilbert Curve Z', 'Hilbert Curve W'],
    correctAnswer: 'Hilbert Curve Y',
    explanation: 'Hilbert Curve Y is the only image that correctly shows a space-filling fractal curve that visits every point in a square grid.',
    difficulty: 'medium'
  },
  {
    id: 'nv65',
    subject: 'non-verbal',
    text: 'Which of the following is the correct cutting plane line representation of the object?',
    options: ['Cutting Plane Line A', 'Cutting Plane Line B', 'Cutting Plane Line C', 'Cutting Plane Line D'],
    correctAnswer: 'Cutting Plane Line C',
    explanation: 'Cutting Plane Line C accurately represents the object using a specific pattern of long dashes with two short dashes at the ends to indicate the location of a section view.',
    difficulty: 'medium'
  },
  {
    id: 'nv66',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Peano curve of the given shape.',
    options: ['Peano Curve X', 'Peano Curve Y', 'Peano Curve Z', 'Peano Curve W'],
    correctAnswer: 'Peano Curve X',
    explanation: 'Peano Curve X is the only image that correctly shows a space-filling fractal curve that maps a one-dimensional line to a two-dimensional area.',
    difficulty: 'medium'
  },
  {
    id: 'nv67',
    subject: 'non-verbal',
    text: 'Which of the following is the correct break line representation of the object?',
    options: ['Break Line A', 'Break Line B', 'Break Line C', 'Break Line D'],
    correctAnswer: 'Break Line A',
    explanation: 'Break Line A accurately represents the object using a jagged or wavy line to indicate that a portion has been removed for clarity or space-saving.',
    difficulty: 'medium'
  },
  {
    id: 'nv68',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Lévy C curve of the given shape.',
    options: ['Lévy C Curve X', 'Lévy C Curve Y', 'Lévy C Curve Z', 'Lévy C Curve W'],
    correctAnswer: 'Lévy C Curve W',
    explanation: 'Lévy C Curve W is the only image that correctly shows a fractal curve generated by repeatedly replacing a line segment with two segments at right angles.',
    difficulty: 'medium'
  },
  {
    id: 'nv69',
    subject: 'non-verbal',
    text: 'Which of the following is the correct hidden line representation of the object?',
    options: ['Hidden Line A', 'Hidden Line B', 'Hidden Line C', 'Hidden Line D'],
    correctAnswer: 'Hidden Line B',
    explanation: 'Hidden Line B accurately represents the object using short, dashed lines to indicate edges that are not visible from the current viewpoint.',
    difficulty: 'medium'
  },
  {
    id: 'nv70',
    subject: 'non-verbal',
    text: 'Select the image that is the correct dragon curve of the given shape.',
    options: ['Dragon Curve X', 'Dragon Curve Y', 'Dragon Curve Z', 'Dragon Curve W'],
    correctAnswer: 'Dragon Curve Z',
    explanation: 'Dragon Curve Z is the only image that correctly shows a fractal curve generated by repeatedly folding a strip of paper in half in the same direction.',
    difficulty: 'medium'
  },
  {
    id: 'nv71',
    subject: 'non-verbal',
    text: 'Which of the following is the correct center line representation of the object?',
    options: ['Center Line A', 'Center Line B', 'Center Line C', 'Center Line D'],
    correctAnswer: 'Center Line D',
    explanation: 'Center Line D accurately represents the object using alternating long and short dashes to indicate the axis of symmetry or center of a circular feature.',
    difficulty: 'medium'
  },
  {
    id: 'nv72',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Gosper curve of the given shape.',
    options: ['Gosper Curve X', 'Gosper Curve Y', 'Gosper Curve Z', 'Gosper Curve W'],
    correctAnswer: 'Gosper Curve Y',
    explanation: 'Gosper Curve Y is the only image that correctly shows a space-filling fractal curve that can tile the plane.',
    difficulty: 'medium'
  },
  {
    id: 'nv73',
    subject: 'non-verbal',
    text: 'Which of the following is the correct dimension line representation of the object?',
    options: ['Dimension Line A', 'Dimension Line B', 'Dimension Line C', 'Dimension Line D'],
    correctAnswer: 'Dimension Line C',
    explanation: 'Dimension Line C accurately represents the object using lines with arrowheads at each end to indicate the length or size of a feature.',
    difficulty: 'medium'
  },
  {
    id: 'nv74',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Cantor set of the given shape.',
    options: ['Cantor Set X', 'Cantor Set Y', 'Cantor Set Z', 'Cantor Set W'],
    correctAnswer: 'Cantor Set X',
    explanation: 'Cantor Set X is the only image that correctly shows a fractal set generated by repeatedly removing the middle third of each line segment.',
    difficulty: 'medium'
  },
  {
    id: 'nv75',
    subject: 'non-verbal',
    text: 'Which of the following is the correct extension line representation of the object?',
    options: ['Extension Line A', 'Extension Line B', 'Extension Line C', 'Extension Line D'],
    correctAnswer: 'Extension Line A',
    explanation: 'Extension Line A accurately represents the object using lines that extend from a feature to a dimension line, indicating the start and end points of the measurement.',
    difficulty: 'medium'
  },
  {
    id: 'nv76',
    subject: 'non-verbal',
    text: 'Select the image that is the correct Mandel
