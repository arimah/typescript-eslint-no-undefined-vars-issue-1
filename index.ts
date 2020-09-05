function foo<T>(x: TemplateStringsArray, ...y: T[]) {
  // (irrelevant code to get rid of unused variable warnings)
  return [x,  y];
}

interface FalsePositive { }
//        ^^^^^^^^^^^^^ @typescript-eslint/no-unused-vars - false positive

foo<FalsePositive>``;
