const delay = (ms) => new Promise(
    (resolve) => setTimeout(resolve, ms)
);

const dangerousRequestAsync = async () => {
    await delay(1000);
    const random = Math.random();
    if (random > 0.5) {
        return 'Congratulations! Everything is fine';
    }
    throw new Error('Today is not your lucky day');
};

export default dangerousRequestAsync;
