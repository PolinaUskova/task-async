export function mock(ms: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

export function getData(): Promise<number[]> {
    const result: number[] = [];
    return Promise.all([mock(100), mock(200), mock(300)]);
}

export async function catchException(): Promise<string | undefined> {
    try {
        throw(new Error('my error'));
    } catch (err) {
        return 'my error';
        ;
    }
}
