Create a function that parses a string into an integer (like the js function parseInt, but without the base parameter)

Example:
myParseInt(“123”) + 2
Should output 125, and not “1232”
should be actual string parse, and not +string or anything like that




Create a function that prints a given matrix in spiral
the function should accept any matrix size [MxN]

Example with a 3x3 matrix:
1
2
3
4
5
6
7
8
9


For the above matrix, the output should be:
1 2 3 6 9 8 7 4 5

Build a React component (class) that shows the files & folders in disk in a hierarchical structure
The app should have 2 distinct classes: Folder & File (no functional components)
each should implement a render function

Folder has a name, and list of children (Files & Folders)
File has a name & mime type

By default, all folders are collapsed,
User should be able to show/collapse a folder

The application should load fast on the browser and render only what is needed.

Consider the json in google drive as a sample data source.


Extra points:
Pass a list of path folders that should be expanded by default
e.g.
<MyBrowser expandedFolders={[‘/Path’, ‘/Path/1st’, ‘/Path/2nd’]} />
Implement a find functionality, that searches for a filename (and only show matching files and the parent folders)
e.g. when searching for ‘hello’, a potential output could be
+ Folder 1
+ Folder 2
+ Folder A
   + Folder B
      + Folder C
            Hello_world.js
      hello_Im_in_B.js


As you can see folder B & C has matching filenames, but A doesn’t
But because Folder B is in A, it is visible in the result as well

There are other folders that are in the disk, but are not shown because they (and their descended folders) don’t have any matches



The task will be measured by:
If code is working
Quality of code (cleanup, structure, performance)
Code readability - code should be clear
No need for documentation - code should explain itself

