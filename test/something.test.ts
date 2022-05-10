import { doSomething } from "../src/something";

describe(
    'something',
    () => {
        it(
            'should do B',
            () => {
                doSomething(false);
            }
        );
    }
);
