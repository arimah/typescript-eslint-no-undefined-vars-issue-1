function foo<T>(x: TemplateStringsArray, ...y: T[]) {
  // (irrelevant code to get rid of unused variable warnings)
  return [x[0],  y[0]];
}

interface FalsePositive { something: unknown; }
//        ^^^^^^^^^^^^^ @typescript-eslint/no-unused-vars - false positive

foo<FalsePositive>``;
