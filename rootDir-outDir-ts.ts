// Issue: ts file compile -> convert js file -> compile then root par js file generate

// Root Directory -> specific folder ki js file generate hojae, wahi compile ho, root par koi specific file compile na ho, koi change na ho
// Out Directory  -> specific folder me generate ho js file

// Go to -> tsconfig.json file

// uncomment these lines from file 

// "outDir": "./build",                                   /* Specify an output folder for all emitted files. */

// "rootDir": "./src",                                  /* Specify the root folder within your source files. */

//  -> last lines of tsconfig.json filr

//    /* Completeness */
//     // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
//     "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
//   },
//   "include":[src]
// }

// tsc -> command run 

// summary

// all src folder ts files compile ( convert ts file into js file ) on build folder 
// and rest of files are not compile and convert


