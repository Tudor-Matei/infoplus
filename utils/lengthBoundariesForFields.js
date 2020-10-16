export const registerBoundaries = {
    name: [3, 128],
    surname: [3, 128],
    username: [5, 32],
    email: [5, 256],
    password: [8, 256],
};

export const loginBoundaries = {
    username: [5, 32],
    password: [8, 256],
};

export const generalDataStepBoundaries = {
    title: [3, 15],
    maxExecutionTime: [1, 2],
    maxMemory: [1, 4],
    source: [5, 128],
};

export const contentDataStepBoundaries = {
    content: [10, 10000],
    hint: [5, 2000],
    mentions: [5, 5000],
    officialSolution: [10, 50000],
};

export const inputDataStepBoundaries = {
    inputData: [1, 5000],
    outputData: [1, 5000],
    exampleInputData: [1, 5000],
    exampleOutputData: [1, 5000],
};

export const testsDataStepBoundaries = {
    input: [1, 5000],
    expectedOutput: [1, 5000],
};
